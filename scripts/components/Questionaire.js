var React = require("react");
var Match = require("./Match");
var questionaire = require("../data/QuestionAnswers");

module.exports = React.createClass({
	render: function(){
		var things = questionaire.map((question, index)=>{
			var key = Object.keys(question);
			return (
				<div key={"question-"+index}>
					<div>{key[0]}</div>
					<section>
						<input type="radio" value={1} name={"quesitongroup"+index} /> {question[key[0]][0]}
						<input type="radio" value={2} name={"quesitongroup"+index} /> {question[key[0]][1]}
						<input type="radio" value={3} name={"quesitongroup"+index} /> {question[key[0]][2]}
					</section>
				</div>
			);
		});

		return (
			<section className="diff" ref="answers">
				{things}
				<button onClick={this.submitQuestions}>SUBMIT</button>
			</section>
		);
	},
	submitQuestions: function(){
		var inputs = this.refs.answers.querySelectorAll("input[type='radio']");
		var inputArray = [].slice.call(inputs);
		var selected = inputArray.filter(input => {
			return input.checked;
		}).reduce((pValue, cValue) => {
			pValue[cValue.name] = parseInt(cValue.value);
			return pValue;
		}, {});
		var user = Parse.User.current();
		user.set("questionare", selected);
		user.save().then(user => {
			console.log("save");
		}, error => { 
			console.log(error);
		});
	}
});