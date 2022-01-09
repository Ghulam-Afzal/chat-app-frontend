import taskReducer from "./messageReducer";
import groupReducer from "./groupReducer";
import { combineReducers } from 'redux'
import userReducer from "./authReducer";

const allReducers = combineReducers ({
    messages: taskReducer, 
    groups: groupReducer,
    user: userReducer,
})

export default allReducers