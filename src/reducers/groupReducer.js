import groupService from "../service/groups"


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
        const newGroup = await groupService.createGroup(obj)
        dispatch ({
            type: "CREATE_GROUP", 
            data: newGroup
        })
    }
}


export const joinGroup = (userId, groupId) => {
    const info = { 
        userId: userId,
        id: groupId 
    }
    return async dispatch => {
        const groupJoined = await groupService.joinGroup(info)
        dispatch({
            type: "JOIN_GROUP", 
            data: groupJoined
        })
    }
}

export const initializeGroups = () => {
    return async dispatch => {
        const groups = await groupService.getGroups()
        dispatch({
            type: "INIT_GROUPS", 
            data: groups
        })
    }
}


export default groupReducer