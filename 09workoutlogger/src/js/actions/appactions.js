let AppDispatcher = require('./../dispatcher/appdispatcher');
let Constants = require('./../constants/appconstants');

let AppActions = {
	showForm(){
		AppDispatcher.handleViewAction({
			actionType: Constants.SHOW_FORM
		})
	},

	addWorkout(workout){
		AppDispatcher.handleViewAction({
			actionType: Constants.ADD_WORKOUT,
			workout: workout
		})
	},

	receiveWorkouts(workouts){
		AppDispatcher.handleViewAction({
			actionType: Constants.RECEIVE_WORKOUT,
			workouts: workouts
		})
	},

	removeWorkout(id){
		AppDispatcher.handleViewAction({
			actionType: Constants.REMOVE_WORKOUT,
			workoutId: id
		})
	}
}

module.exports = AppActions;