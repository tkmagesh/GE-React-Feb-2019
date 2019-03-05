import { combineReducers } from 'redux';
import spinnerReducer from './spinnerReducer';
import bugsReducer from './bugsReducer';

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

export default rootReducer;