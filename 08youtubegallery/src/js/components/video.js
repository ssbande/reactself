let React = require('react');
let AppActions = require('./../actions/appactions');
let AppStores = require('./../stores/appstores');

class Video extends React.Component{
	render(){
		let link = "http://www.youtube.com/embed/" + this.props.video.youtubeId; 
		return(
			<div className="c4">
				<h5>{this.props.video.title} <span className="delete"><a href="#" onClick={this.handleDelete.bind(this, this.props.video.id)}>X</a></span></h5>
				<iframe width="360" height="285" src={link} frameBorder="0" allowFullScreen></iframe>
				<p>{this.props.video.description}</p>
			</div>
		)
	}

	handleDelete(id, e){
		AppActions.deleteVideo(id);
	}
}

module.exports = Video