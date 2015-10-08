var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<form onSubmit={this.loginUser}>
				<h1>Login</h1>
				<input type="text" ref="username" placeholder="Username or Email" />
				<input type="text" ref="email" placeholder="Email" />
				<input type="password" ref="password" placeholder="Password" />
				<button>LOGIN</button>
			</form>
		);
	},
	loginUser: function(e){
		e.preventDefault();
	}
});