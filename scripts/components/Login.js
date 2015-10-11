var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<form onSubmit={this.loginUser}>
				<h1>Login</h1>
				<input type="text" ref="username" placeholder="Username or Email" />
				<input type="password" ref="password" placeholder="Password" />
				<button>LOGIN</button><br/>
				<label>Haven&#39;t sign up? <a href="#register">Register Here!</a></label>
				<h5>Find the partner you&#39;ve been looking for! 💞</h5>
			</form>
		);
	},
	loginUser: function(e){
		e.preventDefault();
		Parse.User.logIn(this.refs.username.value, this.refs.password.value)
		.then(user => {
			this.props.router.navigate("profile/"+this.refs.username.value, {trigger: true});
		},
		error => {
			console.log(error)
		});
	}
});