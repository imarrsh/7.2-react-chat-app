var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var messages = require('./models/message');
var users = require('./models/user');

var App = require('./components/index.jsx').App;


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){
    // initialize stuff 
  },
  index: function(){

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
