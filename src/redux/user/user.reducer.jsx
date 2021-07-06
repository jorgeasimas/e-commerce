const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => { //if state is not set yet it will set the default value
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state;    

    }
}
export default userReducer;