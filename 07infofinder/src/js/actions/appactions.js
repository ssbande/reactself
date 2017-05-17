let AppDispatcher = require('./../dispatcher/appdispatcher');
let Constants = require('./../constants/appconstants');

let AppActions = {
	searchText(search){
		AppDispatcher.handleViewAction({
			actionType: Constants.SEARCH_TEXT,
			search: search
		});
	},

	fetchResult(results){
		AppDispatcher.handleViewAction({
			actionType: Constants.SEARCH_RESULT,
			searchResult: results
		});
	}
}

module.exports = AppActions;