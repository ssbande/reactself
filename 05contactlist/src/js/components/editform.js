let React = require('react');
let AppActions = require('./../actions/appactions');

class EditForm extends React.Component{
	handleSubmit(e){
		e.preventDefault();
		let contact = {
			id: this.props.contact.id,
			name: this.refs.name.value.trim(),
			phone: this.refs.phone.value.trim(),
			email: this.refs.email.value.trim()
		}

		AppActions.updateContact(contact);
	}

	handleChange(fieldName, event){
		var newState = event.target.value;
		var selected = this.state.selected;
		selectedName = newState;
		this.setState({selected: selected});
	}

	render(){
		return(
			<div className="well">
				<h3>Edit Contact</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group">
						<input type="text" ref="name" onChange={this.handleChange.bind(this, 'name')} value={this.props.contact.name} className="form-control" placeholder="Add Name..." />
					</div>
					<div className="form-group">
						<input type="text" ref="phone" onChange={this.handleChange.bind(this, 'phone')} value={this.props.contact.phone} className="form-control" placeholder="Add Phone..." />
					</div>
					<div className="form-group">
						<input type="text" ref="email" onChange={this.handleChange.bind(this, 'email')} value={this.props.contact.email} className="form-control" placeholder="Add Email..." />
					</div>
					<button type="submit" className="btn btn-primary">Edit contact</button>
				</form>
			</div>
		)
	}
}

module.exports = EditForm;
