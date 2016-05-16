var pouchDB = require('../node_modules/pouchdb/dist/pouchdb.js');

module.exports.megBoard = new pouchDB('megBoard');

module.exports.comment = new pouchDB('comment');
