let AppDispatcher = require('./../dispatcher/appdispatcher');
let Constants = require('./../constants/appconstants');
let Events = require('events');
let EventEmitter = Events.EventEmitter;
let AppApi = require('./../utils/appapi');

const CHANGE_EVENT = 'change';

let _notes = [];

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

	addNote(note){
		_notes.push(note);
	},

	getNotes(){
		return _notes;
	},

	setNotes(notes){
		_notes = notes;
	},

	removeNote(noteId){
		let index = _notes.findIndex(x => x._id.$oid === noteId);
		_notes.splice(index, 1);
	}
});

AppDispatcher.register((payload) => {
	let action = payload.action;

	switch(action.actionType){
		case Constants.ADD_NOTE:
			console.log('adding note...');
			AppStore.addNote(action.note);
			AppApi.saveNote(action.note);
			AppStore.emitChange(CHANGE_EVENT);
			break;
		case Constants.FETCH_NOTE:
			console.log('fethcing notes from DB...');
			AppStore.setNotes(action.notes);
			AppStore.emitChange(CHANGE_EVENT);
			break;
		case Constants.REMOVE_NOTE:
			console.log('removing notes...');
			AppStore.removeNote(action.noteId);
			AppApi.removeNote(action.noteId);
			AppStore.emitChange(CHANGE_EVENT);
			break;
	}
	
	return true;
})

module.exports =  AppStore