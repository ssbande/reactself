import React, {Component} from 'react';

export default class MovieResults extends Component{
	render(){
		console.log('rendering movie -- ', this.props.movie);
		let movieLink = 'http://www.imdb.com/title/'+ this.props.movie.imdbID;
		console.log('movie Link: ', movieLink);
		return(
			<div className="well">
				<div className="row">
					<div className="col-md-4">
						<img className="thumbnail" src={this.props.movie.Poster} style={{'width': '100%'}}/>
					</div>
					<div className="col-md-8">
						<h4>{this.props.movie.Title}</h4>
						<ul className="list-group">
							<li className="list-group-item">Year Release: {this.props.movie.Year}</li>
							<li className="list-group-item">IMDB ID: {this.props.movie.imdbID}</li>
						</ul>
						<a className="btn btn-primary" href={movieLink}>View on IMDB</a>
					</div>
				</div>
			</div>
		)
	}
}
