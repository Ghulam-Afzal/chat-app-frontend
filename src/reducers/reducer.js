import axios from 'axios'

const mes_url = 'http://127.0.0.1:8080/api/messages/getMessages'

const taskReducer = (state = [], action) => {
    console.log('ACTION', action)
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
        const messages = await axios.get(mes_url, { groupId: groupid })
        dispatch({ 
            type: 'INIT_DATA', 
            data: messages,
        }) 
    }
}

export default taskReducer