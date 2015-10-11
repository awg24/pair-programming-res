var React = require("react");

module.exports = React.createClass({
	componentWillMount: function(){
		this.props.router.on("route", () => {
			this.forceUpdate();
		});
	},
	render: function(){
		var links = [];
		if(this.props.history.getFragment() === "register"){
			links.push(<li key="login-link"><a href="#login">Login</a></li>);
		} else {
			links.push(<li key="register-link"><a href="#register">Register</a></li>);
		}
		if(this.props.history.getFragment().indexOf("profile") !== -1){
			links = [];
			links.push(<li key="edit-link"><a href="#editprofile">Edit Profile</a></li>);
			links.push(<li key="search-link"><a href="#profile/1">Search</a></li>);
			links.push(<li key="logout-link"><a onClick={this.logoutUser} href="#">Logout</a></li>);
		}
		return (
			<nav>
				<em><a href="#profile/1">Pair Pr💕gramming</a></em>
				<ul>
					{links}
				</ul>
			</nav>
		);
	},
	logoutUser: function(){
		Parse.User.logOut().then(()=>{console.log("user was logged out")});
	}
});