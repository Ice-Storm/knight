var React   = require('react');
var Form    = require('./form.js');
var ListTab = require('./listTab.js');
var db      = require('../model/db.js');
var error   = require('../errors/error.js');

/**
 * TODO: 留言板顶层组件，控制留言以及回复的状态
 */

module.exports = React.createClass({
  propTypes: {
    addMessage: React.PropTypes.func,
    addMessageReplay: React.PropTypes.func
  },
  getInitialState: function () {
    return {
      isSubmit: 0,      //表单是否提交 0 - 未提交  1 - 提交
      replayList: [],   //留言的数据
      replayId: 0       //如果表单是回复评论，回复评论的ID
    };
  },
  componentWillMount: function () {
    this.getReplay();
  },
  judgeSubmit: function () {
    this.setState({
      isSubmit: 1,
      replayId: 0
    });
  },
  getReplayId: function (id) {
    this.setState({ replayId: id });
  },
  getReplay: function () {
    var _this = this;
    db.megBoard.allDocs({
      include_docs: true,
      descending: true
    }).then(function (result) {
      _this.setState({
        isSubmit: 0,
        replayList: result.rows
      });
    }).catch(function (err) {
      errors.dbError(err);
    });
  },
  render: function () {
    var _this = this;

    _this.state.isSubmit === 1 ? _this.getReplay() : '';

    var listTabComponent = _this.state.replayList.map(function (value, index) {
      return (
        <ListTab
          key = { index }
          getReplayId = { _this.getReplayId }
          data = { _this.state.replayList[index]} />
      );
    })

    return (
      <div>
        <Form
          replayId = { this.state.replayId }
          addMessage = { this.props.addMessage }
          addMessageReplay = { this.props.addMessageReplay }
          judgeSubmit = { this.judgeSubmit } />
        { listTabComponent }
      </div>
    );
  }
})