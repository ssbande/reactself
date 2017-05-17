let React = require('react');
let Video = require('./video');

class VideoList extends React.Component{
	render(){
		return(
			<div className="row">
					{
						this.props.videos.map((video, index) => {
							return (
								<Video video={video} key={index} />
							)
						})
					}
			</div>
		)
	}
}

module.exports = VideoList