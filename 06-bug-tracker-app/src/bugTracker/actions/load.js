import axios from 'axios';
import bugApi from '../services/bugApi';

function getDummyBugs(){
	return [
		{id : 1, name : 'This is bug - 1', isClosed : false},
		{id : 2, name : 'This is bug - 2', isClosed : true}
	]
}

//sync
/*export function load(){
	let bugs = getDummyBugs();
	
	let action = { 
		type : 'LOAD',
		payload : bugs
	};
	return action;
}*/

//async
export function load(){
	return function(dispatch){
		bugApi
			.getAll()
			.then(bugs => {
				let action = { 
					type : 'LOAD',
					payload : bugs
				};
				dispatch(action);		
			});
	}
}