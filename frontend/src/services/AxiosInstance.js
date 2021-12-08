import axios from 'axios';
// import { useCookies } from 'react-cookie';

const axiosInstance = axios.create({
    baseURL: 'http:localhost:8080'
})

axiosInstance.interceptors.request.use((config)=>{
    console.log(config);
    return config;
})

axiosInstance.interceptors.response.use((response)=>{
    // console.log(response.data.usertoken);    
    console.log(response)

    return response;
})

export default axiosInstance;