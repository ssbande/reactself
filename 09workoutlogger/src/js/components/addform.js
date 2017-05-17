let React = require('react');
let AppActions = require('./../actions/appactions');
let AppStores = require('./../stores/appstores');

class AddForm extends React.Component{
	render(){
		return(
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group">
					<select className="form-control" ref="type">
						<option value="Jogging">Jogging</option>
						<option value="Weight Lifting">Weight Lifting</option>
						<option value="Yoga">Yoga</option>
						<option value="Other">Other</option>
					</select>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" ref="mins" placeholder="minutes" />
				</div>
				<div className="form-group">
					<input type="text" className="form-control" ref="miles" placeholder="miles (optional)" />
				</div>
				<button type="submit" className="btn btn-default btn-block">Log Workout</button>
			</form>
		)
	}

	generateId(){
		let id = '';
		let possible = '0123456789';

		for(let i=0; i<5; i++){
			id += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		return id;
	}

	handleSubmit(e){
		e.preventDefault();
		let workout = {
			id: this.generateId(),
			type: this.refs.type.value.trim(),
			mins: this.refs.mins.value.trim(),
			miles: this.refs.miles.value.trim(),
			date: new Date()
		}

		console.log('workout: ', workout);
		AppActions.addWorkout(workout);
	}
}

module.exports = AddForm