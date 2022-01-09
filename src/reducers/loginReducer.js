

const loginReducer = (state = false, action) => {
    console.log(state)
    switch(action.type){
        case "USER_SIGNEDIN":
            return !state
        default: 
            return state
    }
}

export const handleLoginState = () => {
    return {
        type: "USER_SIGNEDIN"
    }
}


export default loginReducer