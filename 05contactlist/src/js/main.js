var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app');
var AppApi = require('./utils/appapi');

AppApi.getContacts();

ReactDOM.render(
	<App />,
	document.getElementById('app')
);