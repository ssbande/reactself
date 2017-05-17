import React, {Component} from 'react';

export default class Result extends Component {
	render() {
		let percent = (this.props.score / this.props.questions.length * 100);
		let message = '';

		if(percent > 80){
			message = 'Awesome Job !';
		} else if(percent < 80 && percent > 60){
			message = 'You did OK !';
		} else {
			message = 'You did horrible !';
		}

		return (
			<div className="well">
				<h4>You Got {this.props.score} out of {this.props.questions.length} correct</h4>
				<h1>{percent} % - {message}</h1>
				<hr />
				<a href="/app">Take again</a>
			</div>
		)
	}
}