import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './views/bugStats';
import BugEdit from './views/bugEdit';
import BugSort from './views/bugSort';
import BugList from './views/bugList';

import bugActionCreators from './actions';

class BugTracker extends Component{
	componentDidMount = () => {
		this.props.load();
	}
	render = () => {
		let	{ bugs, toggle, removeClosed, addNew} = this.props;
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}

function mapStateToBugTrackerProps(storeState){
	let bugs = storeState.bugsData;
	return { bugs : bugs };
}

function mapDispatchToBugTrackerProps(dispatch){
	let bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
	return bugActionDispatchers;
}

export default connect(
		mapStateToBugTrackerProps,
		mapDispatchToBugTrackerProps
	)(BugTracker);