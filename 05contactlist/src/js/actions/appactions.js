let AppDispatcher = require('./../dispatcher/appdispatcher');
let Constants = require('./../constants/appconstants');

let AppActions = {
	saveContact(contact){
		console.log('contact: ', contact);
		AppDispatcher.handleViewAction({
			actionType: Constants.SAVE_CONTACT,
			contact: contact
		});
	},

	getContacts(contacts){
		console.log('contacts from store: ', contacts);
		AppDispatcher.handleViewAction({
			actionType: Constants.GET_CONTACTS,
			contacts: contacts
		});
	},

	deleteContact(id){
		console.log('deleting contact id: ', id);
		AppDispatcher.handleViewAction({
			actionType: Constants.DELETE_CONTACT,
			contactId: id
		});
	},

	editContact(contact){
		console.log('editing contact ...');
		AppDispatcher.handleViewAction({
			actionType: Constants.EDIT_CONTACT,
			contact: contact
		});
	},

	updateContact(contact){
		console.log('updating contact');
		AppDispatcher.handleViewAction({
			actionType: Constants.UPDATE_CONTACT,
			contact: contact
		});
	}
}

module.exports = AppActions;