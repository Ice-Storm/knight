var React    = require('react');
var render   = require('react-dom').render;
var Redux    = require('redux');
var Provider = require('react-redux').Provider;
var connect  = require('react-redux').connect;
var reducers = require('./reducers.js');
var actions  = require('./actions.js');
var App      = require('./js/container.js');

var store = Redux.createStore(reducers);

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return Redux.bindActionCreators(actions, dispatch);
}

var Main = connect(mapStateToProps, mapDispatchToProps)(App);

render(
  <Provider store = { store }>
    <Main />
  </Provider>,
  document.getElementById('container')
)
