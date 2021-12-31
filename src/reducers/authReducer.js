import axios from "axios"

const u_url = 'http://127.0.0.1:8080/api/auth/getUser'

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
        const user = await axios.post(u_url, {userId: 5})
        console.log(user.data)
        dispatch({
            type: "INIT_USER", 
            data: user.data.groups,
        })
    }
}

export default userReducer