import React, {Component} from 'react';
import AppActions from './../actions/appactions';
import AppStores from './../stores/appstores';

import AddForm from './addform';

function getAppState(){
	return {
		contacts: AppStores.getContacts()
	}
}

export default class App extends Component{
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
		return(
			<div>
				<AddForm />
			</div>
		)
	}

	_onChange(){
		this.setState(getAppState);
	}
}

