var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<form onSubmit={this.registerUser}>
				<h1>Sign Up</h1>
				<input type="text" ref="username" placeholder="Handle" />
				<input type="text" ref="email" placeholder="Email" />
				<input type="password" ref="password" placeholder="Password" />
				<input type="password" ref="repeatPassword" placeholder="Repeat Password" />
				<button>REGISTER</button>
			</form>
		);
	},
	registerUser: function(e){
		e.preventDefault();
	}
});