const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());

const getConversations = require('./paths/getConversations.js');
app.use('/conversations', getConversations);

const pullConversations = require('./paths/pullConversations.js');
app.use('/conversations/pull', pullConversations);

const processConversations = require('./paths/processConversations.js');
app.use('/conversations/process', processConversations);


const getConversation = require('./paths/getConversation.js');
app.use('/conversations/:conversationId', getConversation);

const commitConversation = require('./paths/commitConversation.js');
app.use('/conversations/:conversationId/commit', commitConversation);

const reviewConversation = require('./paths/reviewConversation.js');
app.use('/conversations/:conversationId/review', reviewConversation);

app.listen(4400, () => {
  console.log('Server listening on port 4400');
});

