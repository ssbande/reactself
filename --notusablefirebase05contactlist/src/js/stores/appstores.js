let AppDispatcher = require('./../dispatcher/appdispatcher');
import * as Constants from './../constants/appconstants';
import * as Events from 'events';
let EventEmitter = Events.EventEmitter;
import AppApi from './../utils/appapi';

const CHANGE_EVENT = 'change';

let _contacts = [];

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

	// App Methods 
	saveContact(contact){
		_contacts.push(contact);
	},

	getContacts(){
		return _contacts;
	}
});

AppDispatcher.register((payload) => {
	let action = payload.action;

	switch(action.actionType){
		case Constants.SAVE_CONTACT: 
			console.log('saving contact ...');

			// Store Save.
			AppStore.saveContact(action.contact);

			// DB Save
			AppApi.saveContact(action.contact);

			// Emit Change
			AppStore.emit(CHANGE_EVENT);
			break;
	}

	return true;
})

export default AppStore