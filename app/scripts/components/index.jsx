// index components
var React = require('react');

var chats = require('../models/message');
var users = require('../models/user');

var ComposeMessage = require('./compose-message.jsx').ComposeMessage;
var MessageView = require('./message-view.jsx').MessageView;

var App = React.createClass({
  getInitialState: function(){
    var self = this;
    var messages = new chats.MessageCollection();

    messages.fetch().then(function(data){
      // console.log(messages)
      self.setState({collection: messages})
    });

    return {
      collection: messages
    }
  },
  submitMessage: function(){
    console.log('top level submit handling');
  },
  render: function(){
    return(
      <div className="wrapper">
        <AppHeader />
        <MessageView messageData={this.state.collection}/>
        <ComposeMessage submitMessage={this.submitMessage}/>
      </div>
    );
  }
});

var AppHeader = React.createClass({
  render: function(){
    return (
      <header className="chat-header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>Chat Reactor</h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
});

module.exports = {
  App: App
}

