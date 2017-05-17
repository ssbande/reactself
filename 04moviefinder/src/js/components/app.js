// var React = require('react');
// var AppActions = require('./../actions/appactions');
// var AppStores = require('./../stores/appstores');

// var App = React.createClass({
// 	render: function(){
// 		return(
// 			<div> My App </div>
// 		)
// 	}
// });

// module.exports App = App;

import React, {Component} from 'react';
import AppActions from './../actions/appactions';
import AppStores from './../stores/appstores';
import SearchForm from './searchform';
import MovieResults from './result';

function getAppState(){
	return {
		movies: AppStores.getMovies()
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
		console.log('this.state render: ', this.state.movies);
		let movieResults = '';
		if(this.state.movies != ''){
			movieResults = <MovieResults movies={this.state.movies}/>
		}

		return(
			<div>
				<SearchForm />
				{movieResults}
			</div>
		)
	}

	_onChange(){
		// console.log('initial state: ', this.state);
		// console.log(getAppState());
		this.setState(getAppState);
		// console.log('changed state: ', this.state);
	}
}

