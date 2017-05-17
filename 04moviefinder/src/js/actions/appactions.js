import AppDispatcher from './../dispatcher/appdispatcher';
import * as Constants from './../constants/appconstants';

let AppActions = {
	searchMovies(movie){
		AppDispatcher.handleViewAction({
			actionType: Constants.SEARCH_MOVIES,
			movie: movie
		});
	},

	receiveMovies(movies){
		AppDispatcher.handleViewAction({
			actionType: Constants.RECEIVE_MOVIES,
			movies: movies		
		});
	}
}

export default AppActions;