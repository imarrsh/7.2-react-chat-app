var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var messages = require('./models/message');
var User = require('./models/user').User;

var Login = require('./components/login.jsx').Login;
var App = require('./components/index.jsx').App;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'chat/' : 'chat'
  },
  initialize: function(){
    this.user = new User();
    console.log(this.user);
  },
  index: function(){

    ReactDOM.render(
      React.createElement(Login, {router: this}),
      document.getElementById('app')
    );
  },
  chat: function(){
    ReactDOM.render(
      React.createElement(App),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
