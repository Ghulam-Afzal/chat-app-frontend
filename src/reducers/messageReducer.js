import axios from 'axios'
import messagesService from '../service/message'
import config from '../service/service.config'
import { socket } from '../service/socket'

const taskReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_MESSAGE': 
            return [...state, action.data]
        case "INIT_DATA": 
            return action.data
        default: 
            return state
    }
}

export const newMessage = (author, message, group) => {
    const payload = {
        authorId: author, 
        message: message, 
        groupId: group 
    }
    return async dispatch => {
        const message = await axios.post(config.new_mes_url, payload)
        console.log(message.data)
        socket.emit("message-send", message.data)
        dispatch({
            type: "NEW_MESSAGE",
            data: message.data
        })
    }
}


export const initializeMessages = (groupid) => {
    return async dispatch  => {
        const messages = await messagesService.getMessages(groupid)
        console.log(messages)
        dispatch({ 
            type: 'INIT_DATA', 
            data: messages,
        }) 
    }
}

export default taskReducer