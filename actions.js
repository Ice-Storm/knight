var Redux = require('redux');

var ADD_MESSAGE = 'ADD_MESSAGE';
var ADD_MESSAGE_REPLAY = 'ADD_MESSAGE_REPLAY';

module.exports.addMessage = function (email, content) {
  return {
    type: ADD_MESSAGE,
    email: email,
    content: content
  }
}

module.exports.addMessageReplay = function (email, content, replayId) {
  return {
    type: ADD_MESSAGE_REPLAY,
    email: email,
    content: content,
    replayId: replayId
  }
}
