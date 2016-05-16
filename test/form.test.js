var should  = require('chai').should();
var enzyme  = require('enzyme');
var React   = require('react');
var actions = require('../actions.js');
var Form    = require('../js/form.js');

describe('Form component test', function () {
  it('Form\'s title should be Todos', function () {
    var form = enzyme.shallow(
      <Form
        addMessage = { actions.addMessage }
        addMessageReplay = { actions.addMessageReplay }
        judgeSubmit = { function(){} } />
    );
    form.find('.form-title').text().should.equal('For The Lich King');
  });
  
  it('Form\'s submit should be Todos', function () {
    var form = enzyme.mount( 
      <Form
        addMessage = { actions.addMessage }
        addMessageReplay = { actions.addMessageReplay }
        judgeSubmit = { function(){} } />
    );
    
    //表单提交前input的value等于state，获得数据
    form.state('email').should.equal(form.find('#email').text());
    form.state('content').should.equal(form.find('#content').text());
    
    //模拟表单提交，清空state
    var submit = form.find('.button').at(0);
    submit.simulate('click');
    
    form.state('email').should.equal('');
    form.state('content').should.equal('');
  });
})