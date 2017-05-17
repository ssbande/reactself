let React = require('react');

class SearchResult extends React.Component{
	render(){
		return(
			<div>
				<p className="content lead" dangerouslySetInnerHTML={{__html:this.props.result.Result}}></p>
			</div>
		)
	}
}

module.exports = SearchResult