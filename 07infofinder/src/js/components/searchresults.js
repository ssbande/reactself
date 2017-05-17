let React = require('react');
let AppActions = require('./../actions/appactions');
let AppStores = require('./../stores/appstores');

let SearchResult = require('./searchresult');

class SearchResults extends React.Component{
	render(){
		let results = '';

		if(this.props.searchText != ''){
			results = <h2 className="pageHeader text-center">Search Results</h2>
		}

		return(
			<div>
				{results}
				{
					this.props.results.map((result, index) => {
						return (
							<SearchResult result={result} key={index} />
						)
					})
				}
			</div>
		)
	}
}

module.exports = SearchResults