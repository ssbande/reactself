let React = require('react');
let AppActions = require('./../actions/appactions');
let AppStores = require('./../stores/appstores');

class SearchForm extends React.Component{
	handleSearch(e){
		e.preventDefault();
		console.log('value to search: ', this.refs.text.value.trim());
		let search = {
			text: this.refs.text.value.trim()
		}

		AppActions.searchText(search);
	}

	render(){
		return(
			<div>
				<form className="well" onSubmit={this.handleSearch.bind(this)}>
					<div className="form-group">
						<label>Search for something ... </label>
						<input type="text" className="form-control" ref="text" />
					</div>
				</form>
			</div>
		)
	}
}

module.exports = SearchForm