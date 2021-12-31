import axios from 'axios'
import messagesService from '../service/message'


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