import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import {combineReducers, createStore} from "redux";

 const store = {
    _state: {
        dialogs: {
            messages: ['Hi', 'How is your it?', 'YO'],
            dialogsArray: [
                {name: 'Sveta',},
                {name: 'Viktor'},
                {name: 'Sergay'},
                {name: 'Sergio'},
                {name: 'Ivan'},
                {name: 'Vitaliy'},
            ],
        },
        myProfile: {
            posts: [
                {text: 'hi how are you?', likeCount: 0},
                {text: 'its another message?', likeCount: 5},
            ],
        },
    },
    _renderEntireTree () {
        console.log('heeeelo')
    },
    getState () {
        return this._state
    },
     dispatch (action) {
        this._state.myProfile = profileReducer(this._state.myProfile, action)
         this._state.dialogs = messageReducer(this._state.dialogs, action)
         this._renderEntireTree(store.getState())
     },
     subscribe (observe) {
         this._renderEntireTree = observe
     }
}

const reducer = combineReducers({
    profile: profileReducer,
    message: messageReducer,

})

// const store = createStore(reducer)
export default store