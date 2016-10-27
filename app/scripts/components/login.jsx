var React = require('react');
var Backbone = require('backbone');

var User = require('../models/user').User

var LoginWrap = React.createClass({
  render: function(){
    return(
      <div className="login-wrapper">
        <div className="container">
          <div className="row">

            {this.props.children}

          </div>
        </div>
      </div>
    );
  }
});

var Login = React.createClass({
  getInitialState: function(){
    // this.user = new User();
    return {
      username: ''
    }
  },
  componentWillMount: function(){
    // do stuff
  },
  handleTyping: function(e){
    this.setState({username: e.target.value})
  },
  handleLogin: function(e){
    e.preventDefault();
    var router = this.props.router;

    router.user.username = this.state.username;
    router.navigate('#chat/', {trigger: true})
    // this.setState({username: ''});
  },
  render: function(){
    return(
      <LoginWrap>

        <div className="col-md-6 col-md-offset-3">
          <div className="login-controls">
            <h1>Chat Reactor</h1>
            <form action="" onSubmit={this.handleLogin}>
              <input onChange={this.handleTyping} value={this.state.username} type="text" name="username" className="un-input" placeholder="Enter a username" required/>
              <input type="submit" value="Join Chat!"/>
            </form>
          </div>
        </div>

      </LoginWrap>
    );
  }
});


module.exports = {
  Login: Login
}
