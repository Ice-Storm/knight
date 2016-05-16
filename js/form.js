var React = require('react');

/**
 * TODO: 留言板组件，获得留言内容，以及回复的内容
 */

module.exports = React.createClass({
  propTypes: {
    replayId: React.PropTypes.number,
    addMessage: React.PropTypes.func.isRequired,
    addMessageReplay: React.PropTypes.func.isRequired,
    judgeSubmit: React.PropTypes.func.isRequired
  },
  getInitialState: function () {
    return {
      email: '',       //表单Email内容
      content: '',     //表单Content内容
      isEmail: 0       //Email内容是否是真实的邮件地址
    };
  },
  handClick: function (event) {
    event.preventDefault();

    var _state = this.state;
    
    var isEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;

    if (!isEmail.test(_state.email)) {
      this.setState({ isEmail: 1 });
      return;
    }

    if (this.props.replayId) {
      this.props.addMessageReplay(_state.email, _state.content, this.props.replayId);
    } else {
      this.props.addMessage(_state.email, _state.content);
    }

    this.props.judgeSubmit();

    this.setState({ email: '', content: '', isEmail: 0 });
  },
  handEmail: function (event) {
    this.setState({ email: event.target.value });
  },
  handContent: function (event) {
    this.setState({ content: event.target.value });
  },
  render: function () {
    return (
      <div className = 'form'>
        <form>
          <div className = 'form-title'>
            <span>For The Lich King</span>
          </div>
          <ul className = 'form-text'>
            <li>
              <label htmlFor = 'email'>
                <i className = 'fa fa-envelope-o'></i>
              </label>
              <input
                id = 'email'
                type = 'text'
                maxLength = '30'
                placeholder = 'Please input your Email !'
                onChange = { this.handEmail }
                value = { this.state.email } />
              { this.state.isEmail === 1 ? <i className = 'fa fa-times form-warning'></i> : '' }
            </li>
            <li>
              <label htmlFor = 'content'>
                <i className = 'fa fa-bullhorn'></i>
              </label>
              <textarea
                id = 'content'
                maxLength = '500'
                placeholder = 'Please input your message !'
                onChange = { this.handContent }
                value = { this.state.content }></textarea>
            </li>
            <li>
              <input type = 'submit' className = 'button' value = '留言' onClick = { this.handClick } />
            </li>
          </ul>
        </form>
      </div>
    );
  }
})