const reducerApp = (
        state = {
            user: {},
            islogin: false,
        }, action
    ) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, user: action.payload, islogin: true};
        case 'LOGOUT_USER':
            return {...state, user: action.payload, islogin: false};
        default:
            return state;
    }
    return state;
}

export default reducerApp;