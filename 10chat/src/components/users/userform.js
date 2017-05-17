import React, {Component} from 'react';

export default class UserForm extends Component{
	render(){
		return (
			<div>
				<h3>Chat Login</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" className="form-control" ref="name" placeholder="choose a username ... " />
				</form>
			</div>
		)
	}

	handleSubmit(e){
		e.preventDefault();
		let username = this.refs.name.value.trim();
		this.props.setUser({name: username});
		this.props.emit('userJoined', {name: username});
		this.refs.name.value = '';
	}
}