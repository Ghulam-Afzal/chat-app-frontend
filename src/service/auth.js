import axios from "axios";
import config from "./service.config";

const getUserInfo = async userId => {
    const response = await axios.post(config.user_url, {userId: 5})
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