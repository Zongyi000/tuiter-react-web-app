import axios from 'axios';
// const TUITS_API = 'http://localhost:4000/api/tuits'; // location of HTTP services local
// const TUITS_API = 'https://tuiter-node-server-app-pme8.onrender.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits  = async ()     => {
    const response = await axios.get(TUITS_API); // send HTTP GET request to TUITS_API
     // extract JSON array from response from server
    return response.data;
}
export const deleteTuit = async (tid) => {
    const response = await axios // send HTTP DELETE request to server
        .delete(`${TUITS_API}/${tid}`) // append tuit's ID to URL
    return response.data

}

// the axios.put() function embeds the updated tuit parameter in the body of the HTTP request and then PUTs it to TUITS_API with the tuit's ID appended at the end.
export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}
