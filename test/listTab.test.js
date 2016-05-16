var React    = require('react');
var enzyme   = require('enzyme');
var reducers = require('../reducers.js');
var actions  = require('../actions.js');
var ListTab  = require('../js/listTab.js');

describe("ListTab component test", function () {
  it('ListTab\'s child should add one', function () {
    var listTabData = {
      doc: {
        _id: new Date().getTime(),
        email: '523003801@qq.com',
        content: 'test'
      }
    }
    
    var listTab = enzyme.mount( 
      <ListTab 
        data = { listTabData }
        getReplayId = { function() {} } />
    );
    
    //测试listTab获得数据是否可以生成子组件
    var childDivLen = listTab.find('div').length;
    
    listTab.setState({ childRepData: [listTabData] });

    listTab.find('div').length.should.equal(childDivLen + 3);
  });
}) 