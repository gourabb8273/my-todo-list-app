import axios from 'axios';
import  Cookies  from 'js-cookie';

const axiosInstance = axios.create({
    baseURL: 'http:localhost:8080'
})

axiosInstance.interceptors.request.use((config)=>{
    let cookies = Cookies.get('jwtAuth')    
    console.log(cookies);
    return config;
})

axiosInstance.interceptors.response.use((response)=>{
    return response;
})

export default axiosInstance;