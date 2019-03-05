import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

let spinnerActionCreators = {
	down(delta){
		delta = delta || 1;
		let action = {
			type : 'DOWN',
			payload : delta
		};
		return action;
	},
	up(delta){
		delta = delta || 1;
		let action = {
			type : 'UP',
			payload : delta
		};
		return action;
	}
}

class Spinner extends Component{
	txtDelta = React.createRef();
	onDownClick = () => {
		let delta = this.txtDelta.current.valueAsNumber;
		this.props.down(delta);
	}
	onUpClick = () => {
		let delta = this.txtDelta.current.valueAsNumber;
		this.props.up(delta);
	}
	render = () => {
		let { spinnerValue } = this.props;
		return(
			<div>
				<input type="number" ref={this.txtDelta} />
				<br/>
				<input type="button" value="DOWN" onClick={this.onDownClick}/>
				<span> [ {spinnerValue} ] </span>
				<input type="button" value="UP" onClick={this.onUpClick}/>
			</div>
		)
	}
}

//Spinner
function mapStateToSpinnerProps(storeState){
	let value = storeState.spinnerData;
	return { spinnerValue : value };
}

function mapDispatchToSpinnerProps(dispatch){
	let spinnerActionDipatchers = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActionDipatchers;
}

export default connect(
	mapStateToSpinnerProps,
	mapDispatchToSpinnerProps
)(Spinner);