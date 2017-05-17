let Flux = require('flux');

let AppDispatcher = Object.assign(new Flux.Dispatcher(), {
	handleViewAction(action) {
		console.log('action: ', action);
		let payload = {
			source: 'VIEW_ACTION',
			action: action
		}

		this.dispatch(payload);
	}
});

module.exports =  AppDispatcher;