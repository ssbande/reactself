let React = require('react');
let AppActions = require('./../actions/appactions');

class AddForm extends React.Component{
	handleSubmit(e){
		e.preventDefault();
		let contact = {
			name: this.refs.name.value.trim(),
			phone: this.refs.phone.value.trim(),
			email: this.refs.email.value.trim()
		}

		AppActions.saveContact(contact);
	}

	render(){
		return(
			<div className="well">
				<h3>Add Contact</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group">
						<input type="text" ref="name" className="form-control" placeholder="Add Name..." />
					</div>
					<div className="form-group">
						<input type="text" ref="phone" className="form-control" placeholder="Add Phone..." />
					</div>
					<div className="form-group">
						<input type="text" ref="email" className="form-control" placeholder="Add Email..." />
					</div>
					<button type="submit" className="btn btn-primary">Add contact</button>
				</form>
			</div>
		)
	}
}

module.exports = AddForm;
