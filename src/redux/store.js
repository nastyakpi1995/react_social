import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
const reducer = combineReducers({
    profile: profileReducer,
    message: messageReducer,
    users: usersReducer,
    auth: authReducer
})

const store = createStore(reducer, applyMiddleware(thunk))
export default store
