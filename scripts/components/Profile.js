var React = require("react");
var ProfilePic = require("./ProfilePicture");
var MatchBox = require("./MatchBox");
var Questionaire = require("./Questionaire"); 

module.exports = React.createClass({
	render: function(){
		return (
			<section>
				<ProfilePic />
				<MatchBox />
				<Questionaire />
			</section>
		);
	}
});