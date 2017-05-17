let React = require('react');
let AppActions = require('./../actions/appactions');
let AppStores = require('./../stores/appstores');

let Note = require('./note');

class NotesList extends React.Component{
	render(){
		return(
			<div className="row small-up-2 medium-up-3 large-up-4">
				{
					this.props.notes.map((note, index) => {
						return (
							<Note note={note} key={index}/>
						)
					})
				}
			</div>
		)
	}
}

module.exports = NotesList;