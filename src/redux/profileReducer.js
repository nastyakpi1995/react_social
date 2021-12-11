const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                text: state.newPostText,
                likeCount: 7
            }
            const res = [...state.posts, newPost]
            return {
                ...state,
                posts: res
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        default: {
            return state
        }
    }

}
export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
})

export default profileReducer