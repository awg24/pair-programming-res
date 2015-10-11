var React = require("react");
var Match = require("./Match")

module.exports = React.createClass({
	render: function(){
		return (
			<section className="pos-abs">
				<Match />
				<Match />
				<Match />
				<Match />
			</section>
		);
	}
});