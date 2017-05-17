let React = require('react');
let AppActions = require('./../actions/appactions');

class Contact extends React.Component{
	handleDelete(id, j){
		AppActions.deleteContact(id);
	}

	handleEdit(contact){
		AppActions.editContact(contact);
	}

	render(){
		return(
			<tr>
				<td>{this.props.contact.name}</td>
				<td>{this.props.contact.phone}</td>
				<td>{this.props.contact.email}</td>
				<td>
					<a href="#" className="btn btn-default" onClick={this.handleEdit.bind(this, this.props.contact)}>Edit</a>
					<a href="#" className="btn btn-danger" onClick={this.handleDelete.bind(this, this.props.contact.id)}>Delete</a>
				</td>
			</tr>
		)
	}
}

module.exports = Contact;
