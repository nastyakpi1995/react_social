const SET_AUTH_USER_DATE = 'SET_AUTH_USER_DATE';

const initState = {
    isAuth: false,
    authData: {
        userId: 0,
        login: '',
        email: ''
    }

}

const authReducer = (state= initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATE: {
            return {
                ...state,
                authData: action.authData,
                isAuth: true
            }
        }
        default: {
            return state
        }
    }

}
export const setAuthUserCreator = (authData) => ({
    type: SET_AUTH_USER_DATE,
    authData
})

export default authReducer
