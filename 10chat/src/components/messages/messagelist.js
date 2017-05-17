import React, {Component} from 'react';
import Message from './message';

export default class MessageList extends Component{
	render(){
		return (
			<div className="well">
				<h3>Messages</h3>
				{
					this.props.messages.map((message, index) => {
						return (
							<Message message={message} user={this.props.user} key={index} />
						)
					})
				}
			</div>
		)
	}
}