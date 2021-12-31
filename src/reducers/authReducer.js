import authService from '../service/auth'


const userReducer = (state = [], action) => {
    switch(action.type) {
        case "INIT_USER": 
            return action.data
        default: 
            return state
    }
}

export const initializeUser = () => {
    return async dispatch => {
        const user = await authService.getUserInfo(5)
        dispatch({
            type: "INIT_USER", 
            data: user.groups,
        })
    }
}

export default userReducer