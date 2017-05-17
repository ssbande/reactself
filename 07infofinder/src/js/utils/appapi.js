let AppActions = require('./../actions/appactions');

module.exports =  {
	searchText(search){
		console.log('searching for ' + search.text + ' on duck duck go');
		let url = 'http://api.duckduckgo.com/?q=' + search.text + '&format=json&pretty=1';
		$.ajax({
			url: url,
			dataType: 'JSONP',
			cache: false,
			success: function(data){
				console.log('received data: ', data);
				AppActions.fetchResult(data.RelatedTopics);
			}.bind(this),
			error: function(xhr, status, err){
				console.log('error while retrieving data from duckduckgo: ', err);
			}.bind(this)
		});
	}
}