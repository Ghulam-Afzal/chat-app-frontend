import axios from "axios"

const g_url = 'http://127.0.0.1:8080/api/groups/getGroups'

const groupReducer = (state = [], action) => {
    switch(action.type) {
        case "JOIN_GROUP":
            return [...state, action.data]
        case "CREATE_GROUP":
            return [...state, action.data]
        case "INIT_GROUPS": 
            return action.data
        default: 
            return state
    }
}


export const createGroup = (owner, groupName, userId) => {
    const obj = {
        owner: owner, 
        groupName: groupName, 
        userId: userId
    }
    return async dispatch => {
        const newGroup = await axios.post("http://127.0.0.1:8080/api/groups/createGroup", obj)
        dispatch ({
            type: "CREATE_GROUP", 
            data: newGroup.data
        })
    }
}


export const joinGroup = (userId, groupId) => {
    return async dispatch => {
        const groupJoined = await axios.put("http://127.0.0.1:8080/api/groups/joinGroup", { userId: userId, id: groupId })
        dispatch({
            type: "JOIN_GROUP", 
            data: groupJoined.data
        })
    }
}

export const initializeGroups = () => {
    return async dispatch => {
        const groups = await axios.post(g_url)
        console.log(groups.data)
        dispatch({
            type: "INIT_GROUPS", 
            data: groups.data,
        })
    }
}


export default groupReducer