let AppDispatcher = require('./../dispatcher/appdispatcher');
let Constants = require('./../constants/appconstants');

let AppActions = {
	saveVideo(video){
		AppDispatcher.handleViewAction({
			actionType: Constants.SAVE_VIDEO,
			video: video
		});
	},

	getVideos(videos){
		AppDispatcher.handleViewAction({
			actionType: Constants.RECEIVE_VIDEO,
			videos: videos
		});
	},

	deleteVideo(videoId){
		AppDispatcher.handleViewAction({
			actionType: Constants.DELETE_VIDEO,
			videoId: videoId
		});
	}
}

module.exports = AppActions;