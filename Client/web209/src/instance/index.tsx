import axios from 'axios';

let token
if(localStorage.getItem("token")){
    token = localStorage.getItem("token")
}
const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers:{
        Authorization: 'Bearer ' + token || ''

    }
})


export default instance;