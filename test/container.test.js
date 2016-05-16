var React    = require('react');
var enzyme   = require('enzyme');
var App      = require('../js/container.js');
var reducers = require('../reducers.js');
var actions  = require('../actions.js');
var db       = require('../model/db.js');
var moment   = require('moment');

describe("container component test", function () {
  
  it('when container\'s form was submit container will get data ', function () {
    var app = enzyme.mount( 
      <App 
        addMessage = { actions.addMessage }
        addMessageReplay = { actions.addMessageReplay } />
    );
    
    var dataLen = app.state('replayList').length;

    app.setState({ isSubmit: 1 });
    app.state('replayList').should.to.be.an('array');

  })
  
  it('when container get data container\'s child should add one', function () {
    var app = enzyme.mount( 
      <App 
        addMessage = { actions.addMessage }
        addMessageReplay = { actions.addMessageReplay } />
    );
    //测试container組件获得数据以后生成子组件
    var childDivLen = app.find('div').length;
    app.setState({
      isSubmit: 0,
      replayList: [{doc: { _id: new Date().getTime(), email: '523003801@qq.com', content: 'test'}}],
      replayId: new Date().getTime()
    })
    app.find('div').length.should.equal(childDivLen + 5);
  });
}) 