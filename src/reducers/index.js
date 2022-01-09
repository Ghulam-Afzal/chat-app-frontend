import taskReducer from "./messageReducer";
import groupReducer from "./groupReducer";
import { combineReducers } from 'redux'
import userReducer from "./authReducer";
import loginReducer from "./loginReducer";

const allReducers = combineReducers ({
    messages: taskReducer, 
    groups: groupReducer,
    user: userReducer,
    loggedIn: loginReducer
})

export default allReducers