let React = require('react');
let AppActions = require('./../actions/appactions');
let AppStores = require('./../stores/appstores');

function getAppState(){
	return {
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
		return(
			<div>
				Shreyas	
			</div>
		)
	}

	_onChange(){
		this.setState(getAppState);
	}
}

module.exports = App