import axios from 'axios';

let serviceUrl = 'http://localhost:3030/bugs';

function getAll(){
	return axios
		.get(serviceUrl)
		.then(response => response.data);
}

function save(bugData){
	if (bugData.id === 0){
		return axios
			.post(serviceUrl, bugData)
			.then(response => response.data);
	} else {
		return axios
			.put(`${serviceUrl}/${bugData.id}`, bugData)
			.then(response => response.data);
	}
}
function remove(bugData){
	return axios
			.delete(`${serviceUrl}/${bugData.id}`)
			.then(response => response.data );
}

export default { getAll, save, remove };