var React  = require('react');
var Replay = require('./replay.js');
var db     = require('../model/db.js');

/**
 * TODO: 留言内容组件，控制留言内容的显示
 */

module.exports = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    getReplayId: React.PropTypes.func.isRequired
  },
  getInitialState: function () {
    return { childRepData: [] };       //留言回复的数据
  },
  getChildData: function () {
    var _this = this;
    var parentId = _this.props.data.doc._id;

    function map(doc, emit) {
      if (doc.replayId === parentId) {
        emit(doc);
      }
    }

    db.comment.query(map, { include_docs: true, descending: true }).then(function (result) {
      _this.setState({ childRepData: result.rows });
    })

  },
  handReplay: function (event) {
    var replayId = event.target.getAttribute('data-replayId');
    this.props.getReplayId(replayId);

    //点击回复以后页面回到顶部留言表单 缓动
    var timer = setInterval(function () {
      //处理FireFox和Chrome兼容性问题
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      var speed = scrollTop / 13;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if (document.body.scrollTop) {
        document.body.scrollTop > 0
          ? document.body.scrollTop -= speed
          : clearInterval(timer);
      } else {
        document.documentElement.scrollTop > 0
          ? document.documentElement.scrollTop -= speed
          : clearInterval(timer);
      }
      
    }, 35);

  },
  render: function () {
    var _this = this;

    _this.getChildData();

    var ReplayComponent = _this.state.childRepData.map(function (value, index) {
      if (_this.props.data.doc.email) {
        return (
          <Replay
            key = { index }
            parentEmail = { _this.props.data.doc.email }
            data = { _this.state.childRepData[index]} />
        );
      }
    })

    return (
      <div className = 'list'>
        <div className = 'list-tab'>
          <img src = 'https://s.gravatar.com/avatar/206442a1825783c915f2d65bd98bdf69?s=80' className = 'list-image' />
          <div className = 'list-content'>
            <ul className = 'list-info'>
              <li><i className = 'fa fa-envelope-o'></i></li>
              <li><span>{ this.props.data.doc.email }</span></li>
            </ul>
            <div className = 'list-message'>
              <span>
                { this.props.data.doc.content }
              </span>
            </div>
            <div className = 'list-reply'>
              <em>
                <i className = 'fa fa-clock-o replay-icon'></i>
                { this.props.data.doc.pubDate}
              </em>
              <span
                data-replayId = { this.props.data.doc._id }
                onClick = { this.handReplay } >
                <i className = 'fa fa-comment-o replay-icon'></i>
                回复
              </span>
            </div>
          </div>
        </div>
        { ReplayComponent }
      </div>
    );
  }
})