let React = require('react');
let AppActions = require('./../actions/appactions');
let AppStores = require('./../stores/appstores');

class AddForm extends React.Component{
	render(){
		return(
			<div className="add-form">
				<panel className="c12">
					<h3> Add Video</h3>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<div className="form-group">
							<label>Video Title</label><br />
							<input type="text" className="form-control" ref="title" />
						</div>
						<div className="form-group">
							<label>ID</label><br />
							<input type="text" className="form-control" ref="videoId" />
						</div>
						<div className="form-group">
							<label>Description</label><br />
							<textarea className="form-control" ref="description" />
						</div>
						<button type="submit" className="button">Add</button>
					</form>
				</panel>					
			</div>
		)
	}

	handleSubmit(e){
		e.preventDefault();

		let video = {
			id: this.refs.videoId.value.trim(),
			title: this.refs.title.value.trim(),
			description: this.refs.description.value.trim()
		}
		
		AppActions.saveVideo(video);
	}
}

module.exports = AddForm