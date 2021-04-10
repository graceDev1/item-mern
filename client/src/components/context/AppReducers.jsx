
export default (state, action) => {
    switch(action.type){
        case 'USER_LOADING':
            return{
                ...state,
                isLoading: true
            }
        case 'USER_LOADED':
            return{
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case 'LOGIN_USER':
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        default:
            return state;
    }
}