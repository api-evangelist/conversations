const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
const express = require('express');
const mysql = require('mysql');
const yaml = require('js-yaml');
const router = express.Router();
const store = require('../../store/keys.json');
var fs = require('fs');
var path = require('path');
var github_token = store.github_token;
const common = require('../../libraries/common');

var connection = mysql.createConnection({
  host     : store.api_search_database_host,
  database : store.api_search_database_database,
  user: store.api_search_database_user,
  password: store.api_search_database_password
  });

const client = new S3Client({ 
  region: "us-east-1", 
  credentials: {
      accessKeyId: store.aws_access_key,
      secretAccessKey: store.aws_secret_key
  }});

router.get('/', (req, resp)=>{ 

  var conversations_path = '/laneworks/api-evangelist/config/conversations-processing.json';
  var conversations_file = fs.readFileSync(conversations_path, 'utf8');
  var process_conversations = JSON.parse(conversations_file);  
  var processed_one = 0;
  for (let i = 0; i < process_conversations.length; i++) {
    if(process_conversations[i].processed == 0 && processed_one == 0){

      processed_one = 1;

      var local_conversations_path = '/laneworks/api-evangelist/conversations/_store/' + process_conversations[i].path + '.md';
      var conversations_markdown = fs.readFileSync(local_conversations_path, 'utf8');
      var conversations_array = conversations_markdown.split("---");
      var conversations_yaml = conversations_array[1];
      var conversation = yaml.load(conversations_yaml); 

      if(conversation.tags){
        var conversations_tags = conversation.tags.join(',');
      }
      else{
        var conversations_tags = '';
      }      
      var conversations_sql = "INSERT INTO conversations(title,description,slug,tags,date,guestName,guestRole,guestCompany,guestIndustry,guestImage,bio,obfuscated,summary,subtitle,audio_file,audio_length,youtubeId,sound_cloud,duration,publish_date,url,conversation) VALUES";
      conversations_sql += "(" + connection.escape(conversation.title) + "," + connection.escape(conversation.description) + "," + connection.escape(conversation.slug) + "," + connection.escape(conversations_tags) + "," + connection.escape(date) + "," + connection.escape(guestName) + "," + connection.escape(guestRole) + "," + connection.escape(guestCompany) + "," + connection.escape(guestIndustry) + "," + connection.escape(guestImage) + "," + connection.escape(bio) + "," + connection.escape(obfuscated) + "," + connection.escape(summary) + "," + connection.escape(subtitle) + "," + connection.escape(audio_file) + "," + connection.escape(audio_length) + "," + connection.escape(youtubeId) + "," + connection.escape(sound_cloud) + "," + connection.escape(duration) + "," + connection.escape(publish_date) + "," + connection.escape(url) + "," + connection.escape(JSON.stringify(conversation)) + ")";
      connection.query(conversations_sql, function (error, results, fields) {
            
        process_conversations[i].processed = 1;
        var this_config = JSON.stringify(process_conversations);
        fs.writeFileSync(conversations_path, this_config, (err) => {});          

        var m = {};
        m.path = process_conversations[i].path;
        m.conversations_sql = conversations_sql;
        m.config_count = i;
        m.results = results;
        resp.send(m);             
        
      }).on('error', err => {
        resp.send(err);
      });

    }
    
  }  
  if(processed_one == 0){
    var m = {};
    m.message = 'DONE';
    resp.send(m);
  }

})

module.exports = router;