let AppDispatcher = require('./../dispatcher/appdispatcher');
import * as Constants from './../constants/appconstants';
import * as Events from 'events';
let EventEmitter = Events.EventEmitter;
import AppApi from './../utils/appapi';

const CHANGE_EVENT = 'change';

let _movies = [];
let _selected = '';

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

	setMovies(movies){
		_movies = movies;
	},

	getMovies(){
		return _movies;
	}

});

AppDispatcher.register((payload) => {
	let action = payload.action;

	switch(action.actionType){
		case Constants.SEARCH_MOVIES:
			AppApi.searchMovies(action.movie);
			AppStore.emit(CHANGE_EVENT);
			break;
		case Constants.RECEIVE_MOVIES:
			AppStore.setMovies(action.movies);
			AppStore.emit(CHANGE_EVENT);
			break;
	}

	return true;
})

export default AppStore