
import axios from 'axios';



const instance = axios.create({
    baseURL : 'https://burger-builder-20e6f.firebaseio.com/'
});


export default instance;