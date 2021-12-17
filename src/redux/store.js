import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
const reducer = combineReducers({
    profile: profileReducer,
    message: messageReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer
})

const store = createStore(reducer, applyMiddleware(thunk))
window.store = store
export default store
