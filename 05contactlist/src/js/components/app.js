let React = require('react');
let AppActions = require('./../actions/appactions');
let AppStores = require('./../stores/appstores');

let AddForm = require('./addform');
let ContactList = require('./contactlist');
let EditForm = require('./editform');

function getAppState(){
	return {
		contacts: AppStores.getContacts(),
		contactToEdit: AppStores.getContactToEdit()
	}
}

class App extends React.Component{
	constructor(){
		super();
		this.state = getAppState();

		// This line will ensure that the _onChange is referring to the appropriate this
		// and not the global scope this. 
		this._onChange = this._onChange.bind(this)
	}

	componentDidMount(){
		AppStores.addChangeListener(this._onChange);
	}

	componentWillUnmount(){
		AppStores.removeChangeListeneer(this._onChange);
	}

	render(){
		console.log('contacts: ', this.state.contacts);
		console.log('bande');
		let contacts = <ContactList contacts={this.state.contacts}/>

		if(this.state.contacts == ''){
			contacts = '';
		}

		let form = <AddForm />
		if(this.state.contactToEdit != ''){
			console.log('something selected');
			form = <EditForm contact={this.state.contactToEdit} />
		}

		console.log('contact to Edit: ', this.state.contactToEdit);
		return(
			<div>
				{form}
				{contacts}				
			</div>
		)
	}

	_onChange(){
		this.setState(getAppState);
	}
}

module.exports = App