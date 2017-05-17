let AppActions = require('./../actions/appactions');

module.exports =  {
	addWorkout(workout){
		console.log('saving workout');
		let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
		workouts.push(workout);
		localStorage.setItem('workouts', JSON.stringify(workouts));
	},

	getWorkouts(){
		let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
		AppActions.receiveWorkouts(workouts);
	},

	removeWorkout(workoutId){
		let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
		if(workouts == []){
			console.log('no workouts');
		} else {
			let index = workouts.findIndex(x => x.id === workoutId);
			workouts.splice(index, 1);
			localStorage.setItem('workouts', JSON.stringify(workouts));
		}
	}
}