var should   = require('chai').should();
var reducers = require('../reducers.js');

describe("Reducers test", function () {
  it('reducers case ADD_MESSAGE should retuen an object', function () {
    reducers({}, {
      type: 'ADD_MESSAGE',
      email: '523003801@qq.com',
      content: 'test'
    }).should.be.an('object');
  });

  it('reducers case ADD_MESSAGE should retuen an object', function () {
    reducers({}, {
      type: 'ADD_MESSAGE_REPLAY',
      email: '523003801@qq.com',
      content: 'test',
      replayId: 1
    }).should.be.an('object');
  });

  it('reducers case \"\" should retuen an object', function () {
    reducers({}, { type: '' }).should.be.an('object');
  });
})
