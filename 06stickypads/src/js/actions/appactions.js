let AppDispatcher = require('./../dispatcher/appdispatcher');
let Constants = require('./../constants/appconstants');

let AppActions = {
	addNote(note){
		AppDispatcher.handleViewAction({
			actionType: Constants.ADD_NOTE,
			note: note
		});
	},

	fetchNotes(notes){
		AppDispatcher.handleViewAction({
			actionType: Constants.FETCH_NOTE,
			notes: notes
		});
	},

	removeNote(noteId){
		AppDispatcher.handleViewAction({
			actionType: Constants.REMOVE_NOTE,
			noteId: noteId
		});
	}
}

module.exports = AppActions;