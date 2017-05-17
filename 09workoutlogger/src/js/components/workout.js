let React = require('react');
let AppActions = require('./../actions/appactions');

class Workout extends React.Component{
	render(){
		let miles = '';
		if(this.props.workout.miles != ''){
			miles = this.props.workout.miles + ' Miles';
		}

		return(
			<li className="list-group-item">
				{this.props.workout.type} - {this.props.workout.mins} Minutes {miles}
				<span className="delete pull-right"><a href="#" onClick={this.handleDelete.bind(this, this.props.workout.id)}>X</a></span>
			</li>
		)
	}

	handleDelete(id, e){
		e.preventDefault();
		AppActions.removeWorkout(id);
	}
}

module.exports = Workout