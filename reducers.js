var moment = require('moment');
var db     = require('./model/db.js');
var error  = require('./errors/error.js');

function dealAction(state, action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      db.megBoard.put({
        _id: new Date().toISOString(),
        email: action.email,
        content: action.content,
        pubDate: moment(new Date().getTime()).format('YYYY-MM-DD h:mm:ss')
      }).catch(function (err) {
        errors.dbError(err);
      });
      return state;
    case 'ADD_MESSAGE_REPLAY':
       db.comment.put({
        _id: new Date().toISOString(),
        email: action.email,
        content: action.content,
        pubDate: moment(new Date().getTime()).format('YYYY-MM-DD h:mm:ss'),
        replayId: action.replayId
      }).catch(function (err) {
        errors.dbError(err);
      });
      return state;
    default:
      return state;
  }
}

module.exports = dealAction;