let React = require('react');
let AppActions = require('./../actions/appactions');
let AppStores = require('./../stores/appstores');

let AddForm = require('./addform');
let WorkoutList = require('./workoutlist');

function getAppState(){
	return {
		showForm: AppStores.getShowForm(),
		showFormText: AppStores.getShowFormText(),
		workouts: AppStores.getWorkouts()
	}
}

class App extends React.Component{
	constructor(){
		super();
		this.state = getAppState();

		// This line will ensure that the _onChange is referring to the appropriate this
		// and not the global scope this. 
		this._onChange = this._onChange.bind(this)
	}

	componentDidMount(){
		AppStores.addChangeListener(this._onChange);
	}

	componentWillUnmount(){
		AppStores.removeChangeListeneer(this._onChange);
	}

	showForm(e){
		e.preventDefault();
		AppActions.showForm();
	}

	render(){
		let form = '';

		if(this.state.showForm){
			form = <AddForm />
		}

		console.log('shreyas');
		console.log('workouts: ', this.state.workouts);
		return(
			<div>
				<h1 className="text-center page-header">Workout Logger</h1>
				<a href="#" className="btn btn-primary btn-block" onClick={this.showForm.bind(this)}>{this.state.showFormText}</a>
				<br/>
				{form}
				<hr/>
				<WorkoutList workouts={this.state.workouts} />
			</div>
		)
	}

	_onChange(){
		this.setState(getAppState);
	}
}

module.exports = App