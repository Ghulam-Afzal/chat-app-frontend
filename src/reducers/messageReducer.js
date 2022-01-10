import axios from 'axios'
import messagesService from '../service/message'
import { socket } from '../service/socket'

const taskReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_MESSAGE': 
            return [...state, action.data]
        case "SOCKET_NEW_MESSAGE": 
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
        const message = await messagesService.newMessage(payload)
        socket.emit("message-send", message)
        dispatch({
            type: "NEW_MESSAGE",
            data: message
        })
    }
}

export const socketNewMessage = (msgObj) => {
    return dispatch => {
        dispatch ({
            type: "SOCKET_NEW_MESSAGE", 
            data: msgObj
        })
    }
}

export const initializeMessages = (groupid) => {
    return async dispatch  => {
        const messages = await messagesService.getMessages(groupid)
        dispatch({ 
            type: 'INIT_DATA', 
            data: messages,
        }) 
    }
}

export default taskReducer