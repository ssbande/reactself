let AppDispatcher = require('./../dispatcher/appdispatcher');
let Constants = require('./../constants/appconstants');
let Events = require('events');
let EventEmitter = Events.EventEmitter;
let AppApi = require('./../utils/appapi');

const CHANGE_EVENT = 'change';

let _showForm = false
let _showFormText = 'Add workout';
let _workouts = [];

let AppStore = Object.assign({}, EventEmitter.prototype, {
	emitChange(){
		this.emit(CHANGE_EVENT);
	},

	addChangeListener(callback){
		this.on('change', callback);
	},

	removeChangeListener(callback){
		this.removeListener('change', callback);
	},

	showForm(){
		_showForm = !_showForm;
		_showFormText = !_showForm ? 'Add workout' : 'Hide it ...';
	},

	getShowForm(){
		return _showForm;
	},

	getShowFormText(){
		return _showFormText;
	},

	addWorkout(workout){
		_workouts.push(workout);
	},

	getWorkouts(){
		return _workouts;
	},

	setWorkouts(workouts){
		_workouts = workouts;
	},

	removeWorkout(workoutId){
		let index = _workouts.findIndex(x => x.id === workoutId);
		_workouts.splice(index, 1);
	}
});

AppDispatcher.register((payload) => {
	let action = payload.action;

	switch(action.actionType){
		case Constants.SHOW_FORM:
			AppStore.showForm();
			AppStore.emitChange(CHANGE_EVENT);
			break;
		case Constants.ADD_WORKOUT:
			AppStore.addWorkout(action.workout);
			AppApi.addWorkout(action.workout);
			AppStore.emitChange(CHANGE_EVENT);
			break;
		case Constants.RECEIVE_WORKOUT:
			AppStore.setWorkouts(action.workouts);
			AppStore.emitChange(CHANGE_EVENT);
			break;
		case Constants.REMOVE_WORKOUT:
			AppStore.removeWorkout(action.workoutId);
			AppApi.removeWorkout(action.workoutId);
			AppStore.emitChange(CHANGE_EVENT);
			break;
	}
	
	return true;
})

module.exports =  AppStore