import React, {Component} from 'react';
import QuestionList from './quiz/questionlist';
import ScoreBox from './quiz/scorebox';
import Result from './quiz/result';

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			questions: [
				{
					id: 1,
					text: 'what is your name ?',
					choices: [{ id: 'a', text: 'Incorrect'}, { id: 'b', text: 'Correct'}, { id: 'c', text: 'Incorrect'}],
					correct: 'b'
				},
				{
					id: 2,
					text: 'what is your mothers name ?',
					choices: [{ id: 'a', text: 'Incorrect'}, { id: 'b', text: 'Incorrect'}, { id: 'c', text: 'Correct'}],
					correct: 'c'
				},
				{
					id: 3,
					text: 'what is your fathers name ?',
					choices: [{ id: 'a', text: 'Incorrect'}, { id: 'b', text: 'Incorrect'}, { id: 'c', text: 'Correct'}],
					correct: 'c'
				},
				{
					id: 4,
					text: 'what is your brothers name ?',
					choices: [{ id: 'a', text: 'Correct'}, { id: 'b', text: 'Incorrect'}, { id: 'c', text: 'Incorrect'}],
					correct: 'a'
				},
			],
			score: 0,
			current: 1
		}
	}

	setScore(score){
		this.setState({score});
	}

	setCurrent(current){
		this.setState({current});
	}

	render() {
		var scorebox = <ScoreBox {...this.state} />;
		var result = '';
		if(this.state.current > this.state.questions.length){
			scorebox = '';
			result = <Result {...this.state} />
		}
		return (
			<div>
				{scorebox}
				<QuestionList {...this.state}
					setScore={this.setScore.bind(this)}
					setCurrent={this.setCurrent.bind(this)}
				/>
				{result}
			</div>
		)
	}
}
