let React = require('react');
let Workout = require('./workout');

class WorkoutList extends React.Component{
	render(){
		return(
			<ul className="list-group">
				{
					this.props.workouts.map((workout, index) => {
						return (
							<Workout workout={workout} key={index} />
						)
					})
				}
			</ul>
		)
	}
}

module.exports = WorkoutList