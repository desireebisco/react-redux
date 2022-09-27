// import { addUserDetails } from '../store/actions';

const axios = require('axios');

export const fetchAll = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        // setResponse(promise.json);
        // console.log('response from fetch:', response);
        return response;
    } catch (e) {
        console.log('error in service:', e);
        throw(e);
    }
}

export const fetchById = async ({id}) => {
// console.log(`ids: ${id}`);
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        // dispatch(addUserDetails({id: id, name: response.data.name}));


        // setResponse(promise.json);
        // console.log('response from fetch:', response.data);
        return response;
    } catch (e) {
        console.log('error in service:', e);
        throw(e);
    }
}

