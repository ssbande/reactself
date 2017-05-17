let React = require('react');
let Contact = require('./contact');

class ContactList extends React.Component{
	render(){
		return(
			<div>
				<h3>Contacts</h3>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Phone</th>
							<th>Email</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.contacts.map((contact, index) => {
								return (
									<Contact contact={contact} key={index} />
								)
							})
						}
					</tbody>
				</table>
			</div>
		)
	}
}

module.exports = ContactList;
