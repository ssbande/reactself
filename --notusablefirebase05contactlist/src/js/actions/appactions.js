import AppDispatcher from './../dispatcher/appdispatcher';
import * as Constants from './../constants/appconstants';

let AppActions = {
	saveContact(contact){
		console.log('contact: ', contact);
		AppDispatcher.handleViewAction({
			actionType: Constants.SAVE_CONTACT,
			contact: contact
		})
	}
}

export default AppActions;