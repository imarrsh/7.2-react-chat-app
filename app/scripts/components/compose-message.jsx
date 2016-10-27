var React = require('react');

var ComposeMessage = React.createClass({
  getInitialState: function(){
    console.log(this.props.username)
    return {
      messageInput: '',
      currentUser: this.props.username,
      avatar: ''
    }
  },
  typedMessage: function(e){
    var str = e.target.value;
    this.setState({messageInput: str});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var messageInput = {
      content: this.state.messageInput,
      username: this.state.currentUser,
      time: new Date().getTime(),
      user_avatar: this.state.avatar
    };
    this.props.submitMessage(messageInput);
    
    this.setState({messageInput: ''});
  },
  render: function(){
    var placeholder = 'typing as ' + this.state.currentUser + '...'
    return (
      <footer className="message-composer">
        <div className="container">
          <div className="form-group">
            <form action="" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-xs-11">
                  <input onChange={this.typedMessage} value={this.state.messageInput} type="text" name="message" placeholder={placeholder} className="form-control"/>
                </div>
                <div className="col-xs-1">
                  <input type="submit" value="Send" className="form-control btn btn-primary"/>
                </div>
              </div>
              <input type="hidden" name="username" value={this.state.currentUser} />
            </form>
          </div>
        </div>
      </footer>
    );
  }  
});

module.exports = {
  ComposeMessage: ComposeMessage
};