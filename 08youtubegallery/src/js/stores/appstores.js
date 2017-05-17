let AppDispatcher = require('./../dispatcher/appdispatcher');
let Constants = require('./../constants/appconstants');
let Events = require('events');
let EventEmitter = Events.EventEmitter;
let AppApi = require('./../utils/appapi');

const CHANGE_EVENT = 'change';

let _videos = [];

let AppStore = Object.assign({}, EventEmitter.prototype, {
	emitChange(){
		this.emit(CHANGE_EVENT);
	},

	addChangeListener(callback){
		this.on('change', callback);
	},

	removeChangeListener(callback){
		this.removeListener('change', callback);
	},

	saveVideo(video){
		_videos.push(video);
	},

	getVideos(){
		return _videos;
	},

	setVideos(videos){
		_videos = videos;
	},

	removeVideo(videoId){
		let index = _videos.findIndex(x => x.id === videoId);
		_videos.splice(index, 1);
	}
});

AppDispatcher.register((payload) => {
	let action = payload.action;

	switch(action.actionType){
		case Constants.SAVE_VIDEO:
			AppStore.saveVideo(action.video);
			AppApi.saveVideo(action.video);
			AppStore.emitChange(CHANGE_EVENT);
			break;
		case Constants.RECEIVE_VIDEO:
			AppStore.setVideos(action.videos);
			AppStore.emitChange(CHANGE_EVENT);
			break;
		case Constants.DELETE_VIDEO:
			AppStore.removeVideo(action.videoId);
			AppApi.removeVideo(action.videoId);
			AppStore.emitChange(CHANGE_EVENT);
			break;
	}
	
	return true;
})

module.exports =  AppStore