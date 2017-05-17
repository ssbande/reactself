let Firebase = require('firebase');
let AppActions = require('./../actions/appactions');

var config = {
    apiKey: "AIzaSyAdPn0xylRb8-MAwRzbs26kSl1DrdG2SV4",
    databaseURL: "https://youtubevideos-53907.firebaseio.com/",
    projectId: "youtubevideos-53907",
  };

Firebase.initializeApp(config);
let saveRef = Firebase.database().ref('videos');

module.exports =  {
	saveVideo(video){
		console.log('from api');
		saveRef.push(video);
		console.log('contact saved to db');
	},

	getVideos(){
		console.log('fetching videos');
		var readRef = Firebase.app().database().ref();
		readRef.once('value')
			.then((snaps) => {
		 		let videos = [];
		 		let dbVideos = snaps.val().videos;
		 		console.log('dbVideos: ', dbVideos);
		 		Object.keys(dbVideos).forEach((key) => {
		 			console.log('key: ', key);
		 			let instance = dbVideos[key];
		 			console.log('instance: ', instance);
		 			let contact = {
			 			id: key,
			 			youtubeId: instance.id,
			 			title: instance.title,
			 			description: instance.description
			 		}

			 		videos.push(contact);
		 		});

		 		console.log('videos: ', videos)

		 		AppActions.getVideos(videos);
		 	});
	},

	removeVideo(videoId){
		console.log('removing video from DB');
		var readRef = Firebase.app().database().ref('videos/' + videoId);
		readRef.remove()
			.then(() => {
				alert('video deleted successfully');
			})
			.catch((err) => {
				alert('error while deleting video');
			})
	}
}