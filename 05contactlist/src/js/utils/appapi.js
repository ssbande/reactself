let Firebase = require('firebase');
let AppActions = require('./../actions/appactions');

var config = {
    apiKey: "AIzaSyAdPn0xylRb8-MAwRzbs26kSl1DrdG2SV4",
    authDomain: "contactlist-84c6b.firebaseapp.com",
    databaseURL: "https://contactlist-84c6b.firebaseio.com",
    projectId: "contactlist-84c6b",
    storageBucket: "contactlist-84c6b.appspot.com",
    messagingSenderId: "334129027167"
  };

Firebase.initializeApp(config);
let saveRef = Firebase.database().ref('contacts');

module.exports =  {
	saveContact(contact){
		console.log('from api');
		saveRef.push({
			contact: contact
		});
		console.log('contact saved to db');
	},

	getContacts(){
		var readRef = Firebase.app().database().ref();
		readRef.once('value')
			.then((snaps) => {
		 		let contacts = [];
		 		let dbContacts = snaps.val().contacts;
		 		console.log('dbContacts: ', dbContacts);
		 		Object.keys(dbContacts).forEach((key) => {
		 			console.log('key: ', key);
		 			let instance = dbContacts[key].contact;
		 			console.log('instance: ', instance);
		 			let contact = {
			 			id: key,
			 			name: instance.name,
			 			phone: instance.phone,
			 			email: instance.email
			 		}

			 		contacts.push(contact);
		 		});

		 		AppActions.getContacts(contacts);
		 	});
	},

	removeContact(contactId){
		console.log('removing contact');
		var readRef = Firebase.app().database().ref('contacts/' + contactId);
		readRef.remove()
			.then(() => {
				alert('contact deleted successfully');
			})
			.catch((err) => {
				alert('error while deleting contact');
			})
	},

	updateContact(contact){
		console.log('updating contact in DB');
		var updateRef = Firebase.app().database().ref('contacts/' + contact.id);
		let updatedContact = {
			name: contact.name,
			phone: contact.phone,
			email: contact.email,
		}

		updateRef.update({
			contact: updatedContact
		});
		console.log('contact updated in DB');
	}
}