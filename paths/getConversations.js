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

  var organization = req.query.organization;
  var search = req.query.search;
  
  var limit = req.query.limit;
  if(limit){
    if(limit == ''){
      limit = 25;
    }
  }
  else{
    limit = 25;
  }

  var page = req.query.page;
  if(page){
    if(page == ''){
      page = 0;
    }
  }
  else{
    page = 0;
  }

  var count_sql = "SELECT count(title) as conversationCount FROM conversations WHERE title IS NOT NULL";
  if(search){
    count_sql += " AND (title LIKE '%" + search + "%' OR description LIKE '%" + search + "%' OR tags LIKE '%" + search + "%')";
  }
  connection.query(count_sql, function (error, total, fields) { 

    var conversations_sql = "SELECT * FROM conversations WHERE title IS NOT NULL";
    if(search){
      conversations_sql += " AND (title LIKE '%" + search + "%' OR description LIKE '%" + search + "%' OR tags LIKE '%" + search + "%')";
    }    
    conversations_sql += " LIMIT " + page + "," + limit;

    connection.query(conversations_sql, function (error, conversations, fields) { 

      var totalRecords = total[0].conversationCount;
      var totalPages = Math.round(totalRecords/limit);

      var meta = {};
      if(search){
        meta.search = search;
      }
      meta.limit = limit;
      meta.page = page;
      meta.totalPages = totalPages;
      meta.count_sql = count_sql;
      meta.conversations_sql = conversations_sql;

      var response = {};
      response.meta = meta;
      response.data = conversations;
      
      resp.send(response);    
      
    }).on('error', err => {
      resp.send(err);
    });         
  }).on('error', err => {
    resp.send(err);
  });                   

});


router.post('/', jsonParser, (req, resp)=>{ 

  var bucket = 'api-evangelist';  
  var organization = req.query.organization;
  var conversation = req.body;   

  var check_conversation_sql = "SELECT * FROM conversations WHERE title = " +  connection.escape(conversation.title);
  connection.query(check_conversation_sql, function (error, exists, fields) {                   

    if(exists.length > 0){
      //Already Exists
      conversation.message = 'Already Exists!';
      resp.send(conversation);
    }
    else{

      conversation.title = conversation.title.trim();
      conversation.description = conversation.description.trim();
      conversation.slug = common.slugify(conversation.title);
      conversation.image = 'https://example.com/images.jpg';
      conversation.tags = ['New'];
      conversation.conversation = {};

      var markdown_conversation = '---\r\n' + yaml.dump(conversation) + '---\r\n';

      var insert_conversation_sql = "INSERT INTO conversations(title,description,conversation) VALUES";
      insert_conversation_sql += "(" + connection.escape(conversation.title) + "," + connection.escape(conversation.description) + "," + connection.escape(JSON.stringify(conversation)) + ")";
      connection.query(insert_conversation_sql, function (error, insert_results, fields) {     
              
        conversation.id = insert_results.insertId;

        var github_url = 'https://api.github.com/repos/' + organization + '/conversations/contents/_conversations/' + common.slugify(conversation.title) + '.md';     

        var c = {};
        c.name = "Kin Lane";
        c.email = "kinlane@gmail.com";

        var m = {};
        m.message = 'Writing New Rule';
        m.committer = c;
        m.content = btoa(markdown_conversation);

        const options = {
          method: 'put',
          headers: {
          "Accept": "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "Authorization": 'Bearer ' + github_token                
          },
          body: JSON.stringify(m)
        };                    
        
        fetch(github_url,options)
          .then(function(response) {
              if (!response.ok) {      
                
                var key = 'conversations/conversations/' + common.slugify(conversation.title) + '.md';
                var params = {
                  Bucket : bucket,
                  Key : key,
                  Body : markdown_conversation
                };

                const put_command = new PutObjectCommand(params);
          
                client.send(put_command).then(
                  (put) => {  

                    var status = response.status;  
                    var m = {};
                    m.status = status;
                    //m.github_url = github_url;                         
                    //m.options = options;    
                    //m.insert_conversation_sql = insert_conversation_sql;
                    m.conversation = conversation;    
                    resp.send(m);                      
                    
                },
                (error) => {
                  resp.send("1");
                }
                );

              }
              response.json().then(function(data) { 

                var key = 'conversations/conversations/' + common.slugify(conversation.title) + '.md';
                var params = {
                  Bucket : bucket,
                  Key : key,
                  Body : markdown_conversation
                };
          
                const put_command = new PutObjectCommand(params);
          
                client.send(put_command).then(
                  (put) => {                                                       
                    
                    var m = {};
                    //m.github_url = github_url;                         
                    //m.options = options;    
                    //m.insert_conversation_sql = insert_conversation_sql;
                    m.conversation = conversation;    
                    //m.data = data; 
                    //m.insert_results = insert_results;
                    resp.send(m);                      
                    
                },
                (error) => {
                  resp.send("2");
                }
                );

              });
            })
            .catch(function(err) {
                console.log('Error: ' + err);            
                resp.send(err);                     
          });                 

      }).on('error', err => {
        resp.send(err);
      }); 

    }      

  }).on('error', err => {
    resp.send(err);
  });  
        
});

module.exports = router;