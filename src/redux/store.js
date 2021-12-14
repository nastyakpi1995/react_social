import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const reducer = combineReducers({
    profile: profileReducer,
    message: messageReducer,
    users: usersReducer,
    auth: authReducer
})

const store = createStore(reducer)
export default store
