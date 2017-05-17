let AppDispatcher = require('./../dispatcher/appdispatcher');
let Constants = require('./../constants/appconstants');
let Events = require('events');
let EventEmitter = Events.EventEmitter;
let AppApi = require('./../utils/appapi');

const CHANGE_EVENT = 'change';
let _searchedText = '';
let _results = [];

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

	searchedText(search){
		_searchedText = search.text;
	},

	getSearchedText(){
		return _searchedText;
	},

	setResults(results){
		_results = results;
	},

	getResults(){
		return _results;
	}
});

AppDispatcher.register((payload) => {
	let action = payload.action;

	switch(action.actionType){
		case Constants.SEARCH_TEXT:
			console.log('searching for text');
			AppStore.searchedText(action.search);
			AppApi.searchText(action.search);
			
			AppStore.emit(CHANGE_EVENT);
			break;
		case Constants.SEARCH_RESULT:
			console.log('results for the searched text', action.searchResult);
			AppStore.setResults(action.searchResult);
			AppStore.emit(CHANGE_EVENT);
			break;
	}
	
	return true;
})

module.exports =  AppStore