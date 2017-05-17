import React, {Component} from 'react';

export default class MessageForm extends Component{
	render(){
		return (
			<div>
				<form onSubmit={this.handleMessageSubmit.bind(this)}>
					<input type="text" className="form-control" ref="text" placeholder="type a message ... " />
				</form>
			</div>
		)
	}

	handleMessageSubmit(e){
		e.preventDefault();

		this.props.emit('messageAdded', {
			timeStamp: Date.now(),
			text: this.refs.text.value.trim(),
			user: this.props.user.name
		});

		// clear the input value;
		this.refs.text.value = '';
	}
}