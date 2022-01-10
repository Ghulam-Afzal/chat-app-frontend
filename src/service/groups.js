import axios from "axios"
import config from "./service.config"

let token2 = null

export const setToken2 = newToken => {
    token2 = `bearer ${newToken}`
}

const getGroups = async () => {
    const response = await axios.post(config.g_get_url)
    return response.data 
}

const createGroup = async info => {
    const temp = {
        headers: { authorization: token2}
    }
    const response = await axios.post(config.g_create_url, info, temp)
    return response.data
}

const joinGroup = async info => {
    const temp = {
        headers: { authorization: token2}
    }
    const response =  await axios.put(config.g_join_url, info, temp)
    return response.data
}

const leaveGroup = async info => {
    const temp = {
        headers: { authorization: token2}
    }
    const response =  await axios.put(config.g_leave_url, info, temp)
    return response.data
}

const groupService = {
    getGroups, 
    createGroup, 
    joinGroup,
    leaveGroup
}

export default groupService