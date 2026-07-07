import { TOKEN } from "../constants/auth.js";

//to set the value of access token
export const setToken = (token)=>{
    localStorage.setItem(TOKEN, token);
}
//to get the value of access token
export const getToken = () => {
    return localStorage.getItem(TOKEN);
};
//to remove the access token
export const removeToken = () => {
    localStorage.removeItem(TOKEN);
};