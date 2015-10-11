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
				<button>REGISTER</button><br/>
				<label>Already signed up? <a href="#login">Login Here!</a></label>
				<h5>Find the partner you&#39;ve been looking for! 💞</h5>
			</form>
		);
	},
	registerUser: function(e){
		e.preventDefault();
		var that = this;
		var user = new Parse.User();
		user.set("username", this.refs.username.value);
		user.set("password", this.refs.password.value);
		user.set("email", this.refs.email.value);

		user.signUp(null)
		.then(
			user => {
				console.log(user);
				this.props.router.navigate("profile/1", {trigger: true});
		}, 	error => {
				console.log(error);
		});
	}
});