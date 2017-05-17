import React, {Component} from 'react';

export default class UserList extends Component{
	render(){
		return (
			<div>
				<h3>Users ({this.props.users.length})</h3>
				<ul className="list-group">
					{
						this.props.users.map((user, index) => {
							return <li className="list-group-item" key={index}>
									{user.name}
								</li>
						})
					}
				</ul>
			</div>
		)
	}
}