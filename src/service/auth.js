import axios from "axios";
import config from "./service.config";

let token1 = null

export const setToken1 = newToken => {
    token1 = `bearer ${newToken}`
}

const getUserInfo = async userId => {
    const temp = {
        headers: { authorization: token1}
    }
    const response = await axios.post(config.user_url, {userId: userId}, temp)
    return response.data
}

const login = async credentials => {
    const response = await axios.post(config.signin_url, credentials)
    return response.data
}

const signup = async userInfo => {
    const response = await axios.post(config.signup_url, userInfo)
    return response.data
}

export default {  
    getUserInfo, 
    login, 
    signup
}