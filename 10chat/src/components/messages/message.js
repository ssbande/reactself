import React, {Component} from 'react';

export default class Message extends Component{
	render(){
		const message = this.props.message;
		let formattedTime = this.formatTimeStamp(message.timeStamp)
		return (
			<div className="message">
				<strong>{message.user}</strong> {formattedTime} - {message.text}
			</div>
		)
	}

	formatTimeStamp(timeStamp){
		let dt = new Date(timeStamp * 1000);
		let hours = dt.getHours();
		let mins = dt.getMinutes();
		let secs = dt.getSeconds();

		if(hours < 10){
			hours = '0' + hours;
		}

		if(mins < 10){
			mins = '0' + mins;
		}

		if(secs < 10){
			secs = '0' + secs;
		}

		return hours + ':' + mins + ':' + secs;
	}
}
