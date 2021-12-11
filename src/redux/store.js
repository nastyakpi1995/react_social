import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";

 const store = {
    _state: {
        messages: ['Hi', 'How is your it?', 'YO'],
        dialogsArray: [
            {name: 'Sveta',},
            {name: 'Viktor'},
            {name: 'Sergay'},
            {name: 'Sergio'},
            {name: 'Ivan'},
            {name: 'Vitaliy'},
        ],
        myProfile: {
            posts: [
                {text: 'hi how are you?', likeCount: 0},
                {text: 'its another message?', likeCount: 5},
            ],
            newPostText: 'it camasutra',
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
         const lol =  messageReducer(this._state.messages, action)
         this._state.messages = lol

         this._renderEntireTree(store.getState())
     },
     subscribe (observe) {
         this._renderEntireTree = observe
     }
}



export default store