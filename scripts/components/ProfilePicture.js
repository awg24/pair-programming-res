var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<figure className="figure">
				<img src="../../images/blank_profile_pic.jpg"/>
				<figcaption>name goes here</figcaption>
				<figcaption>city goes here</figcaption>
			</figure>
		);
	}
});