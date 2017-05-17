import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

import MessageList from './messages/messagelist';
import MessageForm from './messages/messageform';

import UserList from './users/userlist';
import UserForm from './users/userform';

export default class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			status: 'disconnected',
			messages: [{
				timeStamp: Date.now(),
				text: 'Welcome to sock chat'
			}],
			users: [],
			user: ''
		}
	}

	componentWillMount(){
		this.socket = io('http://localhost:4043');
		this.socket.on('connect', this.connect.bind(this));
		this.socket.on('disconnect', this.disconnect.bind(this));
		this.socket.on('messageAdded', this.messageAdded.bind(this));
		this.socket.on('userJoined', this.userJoined.bind(this));
	}

	userJoined(users){
		this.setState({
			users: users
		});
	}

	connect(){
		this.setState({status: 'connected'});
		console.log('connected: ', this.socket.id);
	}

	disconnect(users){
		this.setState({status: 'disconnected'});
		this.setState({users: users});
		console.log('disconnected: ', this.socket.id);
	}

	messageAdded(message){
		console.log('messageAdded here');
		this.setState({
			messages: this.state.messages.concat(message)
		});
	}

	emit(eventName, payload){
		this.socket.emit(eventName, payload);
	}

	setUser(user){
		this.setState({
			user: user
		});
	}

	render(){
		console.log('messages: ', this.state.messages);
		console.log('user: ', this.state.user);

		if(this.state.user == ''){
			return <UserForm emit={this.emit.bind(this)} setUser={this.setUser.bind(this)} />
		}
		else {
			return (
				<div className="row">
					<div className="col-md-4">
						<UserList {...this.state}/>
					</div>
					<div className="col-md-8">
						<MessageList {...this.state}/>
						<MessageForm  emit={this.emit.bind(this)} {...this.state}/>
					</div>
				</div>
			)
		}
	}
}