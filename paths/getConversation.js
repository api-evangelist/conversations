const { S3Client, GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router({ mergeParams: true });
const mysql = require('mysql');
const yaml = require('js-yaml');
const store = require('../../store/keys.json');
var github_token = store.github_token;
const common = require('../../libraries/common');

var jsonParser = bodyParser.json();  

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

  var conversationId = req.params.conversationId;
  var organization = req.query.organization;

  var conversations_sql = "SELECT * FROM conversations WHERE id = " + connection.escape(conversationId) + " OR slug = " + connection.escape(conversationId);
  connection.query(conversations_sql, function (error, conversations, fields) { 

    var totalPages = 1;

    var meta = {};
    meta.limit = 1;
    meta.page = 0;
    meta.totalPages = 1;

    var response = {};
    response.meta = meta;
    response.data = conversations[0];
    response.conversations_sql = conversations_sql;
    response.params = req.params;
    response.error = error;
    
    resp.send(response);    
    
  }).on('error', err => {
    resp.send(err);
  });                         

})

router.put('/', jsonParser, (req, resp)=>{ 

  var conversationId = req.params.conversationId;
  var organization = req.query.organization;  

  var change_name = req.query.name;
  var change_description = req.query.description;  

  var bucket =  'api-evangelist';

  var conversation = req.body;   
  var file = 'store/' + conversation.slug + '.md';
  var key = 'conversations/' + file;
  const params = {
    Bucket: bucket,
    Key: key,
    Body : yaml.dump(conversation)
  };

  const put_command = new PutObjectCommand(params);

  client.send(put_command).then(
    (put) => {        
      
      if(conversation.tags){
        var conversations_tags = conversation.tags.join(',');
      }
      else{
        var conversations_tags = '';
      }       

      var update_conversation_sql = "UPDATE conversations SET ";
      update_conversation_sql += "name = " + connection.escape(conversation.name) + ", ";
      update_conversation_sql += "description = " + connection.escape(conversation.description) + ", ";
      update_conversation_sql += "slug = " + connection.escape(conversation.slug) + ", ";
      update_conversation_sql += "image = " + connection.escape(conversation.image) + ", ";
      update_conversation_sql += "tags = " + connection.escape(conversations_tags) + ", ";
      update_conversation_sql += "conversation = " + connection.escape(JSON.stringify(conversation)) + " ";
      update_conversation_sql += "  WHERE slug = " + connection.escape(conversationId);
      
      connection.query(update_conversation_sql, function (error, changes, fields) {                   

        // insert change    
        var insert_changes = "INSERT INTO conversation_changes(conversationId,name,description,file) VALUES (" + connection.escape(conversationId) + "," + connection.escape(change_name) + "," + connection.escape(change_description) + "," + connection.escape(file) + ")";
        connection.query(insert_changes, function (error, changes, fields) {                                                   

          var response = {};
          response.update_conversation_sql = update_conversation_sql;
          response.insert_changes = insert_changes;
          resp.send(response);                       

        }).on('error', err => {
          resp.send(err);
        });  
        // End insert change

      }).on('error', err => {
        resp.send(err);
      });  
      // End Update Database     
   
      },
      (error) => {
        resp.send(error);
      }
    );              

});

module.exports = router;