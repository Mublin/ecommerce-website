import { USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAILED, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/productConstants";



function userSigninReducer(state={}, action){
    switch (action.type){
        case USER_SIGNIN_REQUEST:
            return {loading: true}
        case USER_SIGNIN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_SIGNIN_FAILED:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}
function registerReducer(state={}, action){
    switch (action.type){
        case USER_REGISTER_REQUEST:
            return {loading: true}
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_REGISTER_FAILED:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}
export { userSigninReducer, registerReducer}