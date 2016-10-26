var React = require('react');

var ComposeMessage = React.createClass({
  getInitialState: function(){
    return {
      messageInput: ''
    }
  },
  typedMessage: function(e){
    var str = e.target.value;
    console.log(str);
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.submitMessage();
  },
  render: function(){
    return (
      <footer className="message-composer">
        <div className="container">
          <div className="form-group">
            <form action="" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-xs-11">
                  <input onChange={this.typedMessage} type="text" name="message" placeholder="Message" className="form-control"/>
                </div>
                <div className="col-xs-1">
                  <input type="submit" value="Send" className="form-control btn btn-primary"/>
                </div>
              </div>
              <input type="hidden" name="username" value="imarsh" />
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