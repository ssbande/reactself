let AppDispatcher = require('./../dispatcher/appdispatcher');
let Constants = require('./../constants/appconstants');
let Events = require('events');
let EventEmitter = Events.EventEmitter;
let AppApi = require('./../utils/appapi');

const CHANGE_EVENT = 'change';

let _contacts = [];
let _contactToEdit = '';

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

	saveContact(contact){
		_contacts.push(contact);
	},

	getContacts(){
		return _contacts;
	},

	setContacts(contacts){
		_contacts = contacts;
	},

	removeContact(contactId){
		 var index = _contacts.findIndex(x => x.id === contactId);
		 _contacts.splice(index, 1);
	},

	setContactToEdit(contact){
		_contactToEdit = contact;
	},

	getContactToEdit(){
		return _contactToEdit;
	},

	updateContact(contact){
		var index = _contacts.findIndex(x => x.id === contact.id);
		_contacts[index].name = contact.name;
		_contacts[index].phone = contact.phone;
		_contacts[index].email = contact.email;
	}
});

AppDispatcher.register((payload) => {
	let action = payload.action;

	switch(action.actionType){
		case Constants.SAVE_CONTACT:
			AppStore.saveContact(action.contact);
			AppApi.saveContact(action.contact);
			AppStore.emit(CHANGE_EVENT);
			break;
		case Constants.GET_CONTACTS:
			console.log('receiving contacts ... ');
			AppStore.setContacts(action.contacts);
			AppStore.emit(CHANGE_EVENT);
			break;
		case Constants.DELETE_CONTACT:
			console.log('deleting contact ... ');
			AppStore.removeContact(action.contactId);
			AppApi.removeContact(action.contactId);
			AppStore.emit(CHANGE_EVENT);
			break;
		case Constants.EDIT_CONTACT:
			console.log('editing from store contact ... ');
			AppStore.setContactToEdit(action.contact);
			AppStore.emit(CHANGE_EVENT);
			break;
		case Constants.UPDATE_CONTACT:
			console.log('updating contact ... ');
			AppStore.updateContact(action.contact);
			AppApi.updateContact(action.contact);
			AppStore.emit(CHANGE_EVENT);
			break;
	}
	

	return true;
})

module.exports =  AppStore