import React, { Component } from 'react';

class BugItem extends Component{
	onBugNameClick = () => {
		this.props.toggle(this.props.bug);
	}
	render = () => {
		let { bug } = this.props,
			bugClass = 'bugname ' + (bug.isClosed ? 'closed' : '');
		return(
			<li>
				<span className={bugClass} onClick={this.onBugNameClick}>
					{bug.name}
				</span>
			</li>
		)
	}
}

export default BugItem;