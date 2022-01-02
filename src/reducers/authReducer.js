import authService from '../service/auth'
import groupService from '../service/groups'


const userReducer = (state = [], action) => {
    switch(action.type) {
        case "INIT_USER": 
            return action.data
        case "CREATE_GROUP": 
            return [...state, action.data]
        case "JOIN_GROUP":
            return [...state, action.data]
        case "LEAVE_GROUP": 
            return [...state.filter(group => group.groupId !== action.data)]
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

export const leaveGroup = (userId, groupId) => {
    const info = { 
        userId: userId,
        id: groupId
    }
    return async dispatch => {
        const leaveGroup = await groupService.leaveGroup(info)
        dispatch({
            type: "LEAVE_GROUP",
            data: groupId
        })
    }
}

export const initializeUser = (userId) => {
    return async dispatch => {
        const user = await authService.getUserInfo(userId)
        dispatch({
            type: "INIT_USER", 
            data: user.groups,
        })
    }
}

export default userReducer