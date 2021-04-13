
export default (state, action) => {
    switch(action.type){
        case 'GET_ITEM':
            return {
                ...state,
                items: action.payload
            }
        case 'DELETE_ITEM':
            return{
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        default:
            return state;
    }
}