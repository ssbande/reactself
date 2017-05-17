import AppActions from './../actions/appactions';
export default {
	searchMovies(movie){
		console.log('fetching movies - appi api');
		$.ajax({
			url: 'http://www.omdbapi.com/?s=' + movie.title,
			dataType: 'json',
			cache: false,
			success: function(data){
				// data.Search is based on the response we get from the OMDB API result.
				AppActions.receiveMovies(data.Search);
			}.bind(this),
			error: function(xhr, status, err){
				alert(err);
			}.bind(this)
		})
	}
}