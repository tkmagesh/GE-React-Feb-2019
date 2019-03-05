import bugApi from '../services/bugApi';

export function toggle(bugToToggle){
	return function(dispatch){
		let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
		bugApi
			.save(toggledBug)
			.then(bug => {
				let action = {
					type : 'REPLACE',
					payload : bug
				};
				dispatch(action);		
			})
	};
	
}