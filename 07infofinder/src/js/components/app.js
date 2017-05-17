let React = require('react');
let AppActions = require('./../actions/appactions');
let AppStores = require('./../stores/appstores');

let SearchForm = require('./searchform');
let SearchResults = require('./searchresults');

function getAppState(){
	return {
		results: AppStores.getResults(),
		searchedText: AppStores.getSearchedText()
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
		console.log('shreyas');
		return(
			<div>
				<SearchForm />
				<SearchResults searchText={this.state.searchedText} results={this.state.results}/>	
			</div>
		)
	}

	_onChange(){
		this.setState(getAppState);
	}
}

module.exports = App