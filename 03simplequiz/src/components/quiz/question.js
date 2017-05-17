import React, {Component} from 'react';

export default class Question extends Component {
	onChange(e){
		e.preventDefault();
		let selected = e.target.value;
		
		const {setCurrent, setScore, question} = this.props;
		if(selected == question.correct){
			setScore(this.props.score + 1);
		}

		setCurrent(this.props.current + 1);
	}

	render() {
		return (
			<div className="well">
				<h3>{this.props.question.text}</h3>
				<hr />
				<ul className="list-group">
					{
						this.props.question.choices.map(choice => {
							return (
								<li className="list-group-item" key={choice.id}>
									<input type="radio" onChange={this.onChange.bind(this)} name={this.props.question.id} value={choice.id} /> {choice.text}
								</li>
							)
						})
					}
				</ul>
		</div>
		)
	}
}