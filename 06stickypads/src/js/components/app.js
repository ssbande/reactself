let React = require('react');
let AppActions = require('./../actions/appactions');
let AppStores = require('./../stores/appstores');

let AddNoteForm = require('./addnoteform');
let NotesList = require('./notelist');

function getAppState(){
	return {
		notes: AppStores.getNotes()
	}
}

class App extends React.Component{
	constructor(){
		super();
		this.state = getAppState();

		// This line will ensure that the _onChange is referring to the appropriate this
		// and not the global scope this. 
		this._onChange = this._onChange.bind(this)
	}

	componentDidMount(){
		AppStores.addChangeListener(this._onChange);
	}

	componentWillUnmount(){
		AppStores.removeChangeListeneer(this._onChange);
	}

	render(){
		console.log('notes: ', this.state.notes);
		console.log('bande');
		return(
			<div>
				<div className="off-canvas-wrapper">
					<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
						<div className="off-canvas position-left reveal-for-large" data-off-canvas data-position="left">
							<div className="row column">
								<br/>
								<AddNoteForm />
							</div>
						</div>
						<div className="off-canvas-content" data-off-canvas-content>
							<NotesList notes={this.state.notes} />
						</div>
					</div>
				</div>	
			</div>
		)
	}

	_onChange(){
		this.setState(getAppState);
	}
}

module.exports = App