'use strict';
var React = require("react");
var ReactDOM = require("react-dom");
var Backbone = require("backbone");
var keys = require("../config/config_parse.js");
var Login = require("./components/Login");
var Register = require("./components/Register");
var Profile = require("./components/Profile");
var NavBar = require("./components/NavBar");
var Tagline = require("./components/Tagline");
var containerEl = document.getElementById("container");
var navEl = document.getElementById("nav");
var headerEl = document.getElementById("tagline");
Parse.initialize(keys.appKey, keys.jsKey);

var App = Backbone.Router.extend({
	routes: {
		"":"login",
		"login":"login",
		"register":"register",
		"profile/:id":"profile"
	},
	login: function(){
		ReactDOM.render(<Tagline />, headerEl);
		ReactDOM.render(<NavBar router={app} history={Backbone.history}/>, navEl);
		ReactDOM.render(<Login router={this} />,containerEl);
	},
	register: function(){
		ReactDOM.render(<Tagline />, headerEl);
		ReactDOM.render(<NavBar router={app} history={Backbone.history}/>, navEl);
		ReactDOM.render(<Register router={this} />,containerEl);
	},
	profile: function(id){
		ReactDOM.render(<div></div>, headerEl);
		ReactDOM.render(<NavBar router={app} history={Backbone.history}/>, navEl);
		ReactDOM.render(<Profile router={this} />,containerEl);
	}
});
var app = new App();
Backbone.history.start();
