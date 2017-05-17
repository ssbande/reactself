import React, {Component} from 'react';
import Movie from './movie';

export default class MovieResults extends Component{
	render(){
		return(
			<div>
				<h3 className="text-center">Search Results</h3>
				{
					this.props.movies.map((movie, index) => {
						return (
							<Movie movie={movie} key={index} />
						)
					})
				}
			</div>
		)
	}
}
