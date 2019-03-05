var stateManager = (function(){
	var currentState, 
		reducer, 
		listeners = [],
		__init_action = '@@INIT/ACTION';

	function subscribe(listenerFn){
		listeners.push(listenerFn);
	}

	function triggerChange(){
		listeners.forEach(listenerFn => listenerFn());
	}

	function getState(){
		return currentState;
	}

	function dispatch(action){
		let newState = reducer(currentState, action);
		if (newState === currentState) return;
		currentState = newState;
		triggerChange();
	}

	function createStore(_reducer){
		reducer = _reducer;
		currentState = reducer(currentState, __init_action);
		return { subscribe, getState, dispatch };
	}

	function bindActionCreators(actionCreators, dispatch){
		let result = {};
		for(let key in actionCreators){
			result[key] = function(...args){
				let action = actionCreators[key](...args);
				dispatch(action);
			}
		}
		return result;
	}

	return { createStore, bindActionCreators };

})();