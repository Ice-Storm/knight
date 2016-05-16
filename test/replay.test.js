var should  = require('chai').should();
var enzyme  = require('enzyme');
var React   = require('react');
var Replay  = require('../js/replay.js');

describe('Replay component test', function () {
  it('Replay\'s list should be Todos', function () {
    
    var parentEmailData = '523003801@qq.com';
    
    var replayData = {
      doc: {
        email: '12345678@163.com',
        content: 'test',
        pubDate: '2016-5-15'
      }
    }
    
    var replay = enzyme.shallow(
      <Replay
        parentEmail = { parentEmailData }
        data = { replayData } />
    );
    
    var spanLen = replay.find('span').length;
    
    replay.find('span').at(0).text().should.equal(replayData.doc.email + ' 回复：' );
    replay.find('span').at(1).text().should.equal(parentEmailData);
    replay.find('span').at(2).text().should.equal(replayData.doc.pubDate);
    replay.find('.replay-content').text().should.equal(replayData.doc.content);
  });
})