import axios from "axios";
import { getToken } from "../services/tokenService";
const api = axios.create({
    baseURL: "localhost:8000/api/v1/",
    withCredentials: true
})

api.interceptors.request.use((config)=>{
    const token = getToken();
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
})

export default api;