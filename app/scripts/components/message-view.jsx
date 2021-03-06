// MessageView component

var React = require('react');

var MessageBody = React.createClass({
  render: function(){
    return (
      <div className="msg msg-default">
        <span className="date-text">{this.props.date}</span>
        <span className="chat-text">{this.props.user}: {this.props.content}</span>
      </div>
    )
  }
});


var MessageView = React.createClass({
  render: function(){
    var messages = this.props.messageData.map(function(message){
      return (
        <MessageBody 
          key={message.get('_id') || message.cid} 
          content={message.get('content')} 
          user={message.get('username')}
          date={message.get('date')}
        />
      );
    });

    return (
      <section className="chat-wrap">
          
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">

              <div className="chat-window">
                {messages}
              </div>

            </div>
          </div>
        </div>

      </section>
    );
  }
});

module.exports = {
  MessageView: MessageView
}