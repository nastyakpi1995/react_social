const ADD_MESSAGE = 'ADD_MESSAGE';

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const res = [...state, action.body]
            return res
        }
        default: {
            return state
        }
    }

}
export const addNewMessageTextCreator = (text) => ({
    type: ADD_MESSAGE,
    body: text
})


export default messageReducer