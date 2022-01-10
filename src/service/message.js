import axios from "axios"
import config from "./service.config"

let token3 = null

export const setToken3 = newToken => {
    token3 = `bearer ${newToken}`
}


const getMessages = async groupId => {
    const temp = {
        headers: { authorization: token3}
    }
    const response = await axios.post(config.mes_url, { groupId: groupId }, temp)
    return response.data
}

const newMessage = async payload => {
    const temp = {
        headers: { authorization: token3}
    }
    const response = await axios.post(config.new_mes_url, payload, temp)
    return response.data
}

export default { 
    getMessages,
    newMessage
 }