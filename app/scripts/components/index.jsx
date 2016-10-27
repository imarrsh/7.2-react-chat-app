// index components
var React = require('react');

var chats = require('../models/message');
var User = require('../models/user').User;

var ComposeMessage = require('./compose-message.jsx').ComposeMessage;
var MessageView = require('./message-view.jsx').MessageView;

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

var App = React.createClass({
  getInitialState: function(){
    var self = this;
    var messages = new chats.MessageCollection();

    messages.fetch().then(function(data){
      // console.log(messages)
      messages.sort();
      self.setState({collection: messages});
    });

    return {
      collection: messages
    }
  },
  submitMessage: function(input){
    this.state.collection.create(input);
    this.setState({collection: this.state.collection});
  },
  componentWillMount: function(nextProps){
    var router = this.props.router;
    var username = router.user.username;
    // console.log('mounting', username);
    if(username === undefined){
      router.navigate('', {trigger: true});
    }
  },
  componentDidMount: function(){
    var self = this;
    setInterval(function(){
      console.log('polling...');

      self.state.collection.fetch().then(function(data){
        self.setState({collection: self.state.collection});
      });

    }, 2000)
  },
  componentWillUnmount: function(){
    clearInterval();
  },
  render: function(){
    // console.log('hello', this.props.router.user.username, '!')
      return(
        <div className="wrapper">
          <AppHeader />
          <MessageView messageData={this.state.collection}/>
          <ComposeMessage submitMessage={this.submitMessage} username={this.props.router.user.username}/>
        </div>
      );
  }
});

module.exports = {
  App: App
}

