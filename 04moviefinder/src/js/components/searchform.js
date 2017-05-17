import React, {Component} from 'react';
import AppActions from './../actions/appactions';
import AppStores from './../stores/appstores';

export default class SearchForm extends Component{
	render(){
		return(
			<div className="searchForm">
				<h1 className="text-center">Search a Movie</h1>
				<form onSubmit={this.onSubmit.bind(this)}>
					<div className="form-group">
						<input type="text" className="form-control" ref="title" placeholder="Search a movie ... " />
					</div>
					<button className="btn btn-primary btn-block">Search Movies</button>
				</form>
			</div>
		)
	}

	onSubmit(e){
		e.preventDefault();
		// console.log(this.refs.title.value);
		let movie = {
			title: this.refs.title.value.trim()
		}

		// create an event to search for this movie. 
		AppActions.searchMovies(movie);
	}
}
