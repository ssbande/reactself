let React = require('react');
let AppActions = require('./../actions/appactions');
let AppStores = require('./../stores/appstores');

class Note extends React.Component{
	render(){
		return(
			<div className="column">
				<div className="note" onDoubleClick={this.removeNote.bind(this, this.props.note._id)}>
					<p>{this.props.note.text}</p>
				</div>
			</div>
		)
	}

	removeNote(id, event){
		console.log('event: ', event);
		console.log('id: ', id);

		AppActions.removeNote(id.$oid);
	}
}

module.exports = Note;