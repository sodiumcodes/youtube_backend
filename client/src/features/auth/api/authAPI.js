import api from "../../../lib/axios.js"

export const registerUser = async (data)=>{
    const res = await api.post("/auth/register");
    return res;
}
export const loginUser = async (data)=>{
    const res = await api.post("/auth/login");
    return res;
}
export const logoutUser = async (data)=>{
    const res = await api.post("/auth/logout");
    return res;
}
export const getCurrentUser = async (data)=>{
    const res = await api.post("/auth/me");
    return res;
}
export const refreshToken = async (data)=>{
    const res = await api.post("/auth/refresh-access-token");
    return res;
}