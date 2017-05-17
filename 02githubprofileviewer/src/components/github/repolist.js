import React, {Component} from 'react';
import Repo from './repo.js'

export default class RepoList extends Component{
	render(){
		return (
			<div>
				<ul className="list-group">
					{
						this.props.userRepos.map(repo => {
							return <Repo repo = {repo} key={repo.id} {...this.props} />
						})
					}
				</ul>
			</div>
		)
	}
}