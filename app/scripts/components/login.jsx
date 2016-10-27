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
  handleLogin: function(e){
    e.preventDefault();
    console.log('no submit!')
  },
  render: function(){
    return(
      <LoginWrap>

        <div className="col-md-6 col-md-offset-3">
          <div className="login-controls">
            <h1>Chat Reactor</h1>
            <form action="" onSubmit={this.handleLogin}>
              <input type="text" name="username" className="un-input" placeholder="Enter a username"/>
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
