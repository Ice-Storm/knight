var should = require('chai').should();
var db     = require('../model/db.js');

describe("Database test", function () {
  it('megBoard should retuen an db object', function () {
    db.megBoard.should.be.an('object');
  });

  it('comment should retuen an db object', function () {
    db.comment.should.be.an('object');
  });
})