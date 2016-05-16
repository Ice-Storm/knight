var should  = require('chai').should();
var actions = require('../actions.js');

describe("Actions test", function () {
  it('addMessage should retuen an object', function () {
    actions.addMessage().should.be.an('object');
    actions.addMessage().should.to.have.all.keys('type', 'email', 'content');
  });

  it('addMessageReplay should retuen an object', function () {
    actions.addMessageReplay().should.be.an('object');
    actions.addMessageReplay().should.to.have.all.keys('type', 'email', 'content', 'replayId');
  });
})