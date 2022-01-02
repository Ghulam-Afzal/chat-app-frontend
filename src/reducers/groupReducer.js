import groupService from "../service/groups"

const groupReducer = (state = [], action) => {
    switch(action.type) {
        case "INIT_GROUPS": 
            return action.data
        default: 
            return state
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