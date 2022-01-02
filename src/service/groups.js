import axios from "axios"
import config from "./service.config"

const getGroups = async () => {
    const response = await axios.post(config.g_get_url)
    return response.data 
}

const createGroup = async info => {
    const response = await axios.post(config.g_create_url, info)
    return response.data
}

const joinGroup = async info => {
    const response =  await axios.put(config.g_join_url, info)
    return response.data
}

const leaveGroup = async info => {
    const response =  await axios.put(config.g_leave_url, info)
    return response.data
}

const groupService = {
    getGroups, 
    createGroup, 
    joinGroup,
    leaveGroup
}

export default groupService