import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Profile from './github/profile.js';
import Search from './github/search.js';


export default class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			username: 'ssbande',
			userData: [],
			userRepos: [],
			perPage: 10 // no of repos per page.
		}
	}

	// get user data from github
	getUserData(){
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({
					userData: data
				});
			}.bind(this),
			error: function(xhr, status, error){
				alert(error)
				this.setState({
					username: null
				});

			}.bind(this)
		})
	}

	// get user repositories from github
	getUserRepos(){
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret+'&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({
					userRepos: data
				});
			}.bind(this),
			error: function(xhr, status, error){
				alert(error)
				this.setState({
					username: null
				});

			}.bind(this)
		})
	}

	handleFormSubmit(username){
		this.setState({
			username: username
		}, function(){
			this.getUserData();
			this.getUserRepos();
		})
	}

	componentDidMount(){
		this.getUserData();
		this.getUserRepos();
	}

	render(){
		return (
			<div>
				<Search onFormSubmit={this.handleFormSubmit.bind(this)}/>
				<Profile {...this.state}/>
			</div>
		)
	}
}

App.propTypes = {
	clientId: PropTypes.string.isRequired,
	clientSecret: PropTypes.string.isRequired
}

App.defaultProps = {
	clientId: '4e39ae2de594c87b1452',
	clientSecret: 'f910fc922f2df7b814bc82c3bf2114204cb01aec'
}
