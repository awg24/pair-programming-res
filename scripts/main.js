'use strict';
var React = require("react");
var ReactDOM = require("react-dom");
var Backbone = require("backbone");
var keys = require("../config/config_parse.js");
var Login = require("./components/Login");
var Register = require("./components/Register");
var Profile = require("./components/Profile");
var containerEl = document.getElementById("container");
Parse.initialize(keys.appKey, keys.jsKey);

var App = Backbone.Router.extend({
	routes: {
		"":"login",
		"login":"login",
		"register":"register",
		"profile/:id":"profile"
	},
	login: function(){
		ReactDOM.render(<Login router={this} />,containerEl);
	},
	register: function(){
		ReactDOM.render(<Register router={this} />,containerEl);
	},
	profile: function(id){
		ReactDOM.render(<Profile router={this} />,containerEl);
	}
});

var app = new App();
Backbone.history.start();