let React = require('react');
let AppActions = require('./../actions/appactions');
let AppStores = require('./../stores/appstores');

class AddNoteForm extends React.Component{
	render(){
		return(
			<div>
				<h5>Add a Note</h5>
				<form onSubmit={this.onSubmit.bind(this)}>
					<div className="row">
						<div className="large-12 columns">
							<label>Note Text
								<input type="text" ref="text" placeholder="Enter Text..." />
							</label>
							<button className="button">Add</button>
						</div>
					</div>
				</form>
			</div>
		)
	}

	onSubmit(e){
		e.preventDefault();

		let note = {
			text: this.refs.text.value.trim()
		}

		AppActions.addNote(note)
	}
}

module.exports = AddNoteForm;