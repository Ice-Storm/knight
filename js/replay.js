var React = require('react');

/**
 * TODO: 留言回复显示组件，控制留言回复的显示
 */

module.exports = React.createClass({
  propTypes: {
    parentEmail: React.PropTypes.string.isRequired,
    data: React.PropTypes.object.isRequired
  },
  render: function () {
    return (
      <div className = 'replay'>
        <ul className = 'replay-list'>
          <li><i className = 'fa fa-envelope-o'></i></li>
          <li><span>{ this.props.data.doc.email } 回复：</span></li>
          <li><span>{ this.props.parentEmail }</span></li>
        </ul>
        <div className = 'replay-content'>
          { this.props.data.doc.content }
        </div>
        <div className = 'replay-time'>
          <i className = 'fa fa-clock-o replay-icon'></i>
          <span>{ this.props.data.doc.pubDate }</span>
        </div>
      </div>
    );
  }
})