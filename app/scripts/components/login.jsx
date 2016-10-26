var React = require('react');


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
  render: function(){
    return(
      <LoginWrap>

        <div className="login">
          <h1>Chat Reactor</h1>
          <form action="">
            <input type="text" name="username" placeholder="Enter a username"/>
            <input type="submit" value="Join Chat!"/>
          </form>
        </div>
        
      </LoginWrap>
    );
  }
});



module.exports = {
  Login: Login
}
