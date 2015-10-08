var React = require("react");

module.exports = React.createClass({
	componentWillMount: function(){
		var that = this;
		this.props.router.on("route", function(){
			that.forceUpdate();
		});
	},
	render: function(){
		var links = [];
		if(this.props.history.getFragment() === "register"){
			links.push(<li key="login-link"><a href="#login">Login</a></li>);
		} else {
			links.push(<li key="register-link"><a href="#register">Register</a></li>);
		}
		// links.push(<li key="login-link"><a href="#profile/1">Profile</a></li>);
		// links.push(<li key="login-link"><a href="#editprofile">Edit Profile</a></li>);
		
		return (
			<section>
				<em><a href="#profile/1">Pair Pr💕gramming</a></em>
				<ul>
					{links}
				</ul>
			</section>
		);
	}
});