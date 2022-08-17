import axios from "axios"
import Cookies from "js-cookie"
import { USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAILED, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/productConstants"

const signinn = (email, password) => async (dispatch) => {
    dispatch( { 
        type: USER_SIGNIN_REQUEST,
        payload: {email, password }
    })
    try {
        const {data} = await axios.post("http://localhost:4000/api/users/signin", {email, password})
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        })
        Cookies.set("userInfo", data)
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAILED,
            payload: error.message
        })
    }
}
const register = (name, email, password) => async (dispatch) => {
    dispatch( { 
        type: USER_REGISTER_REQUEST,
        payload: {email, password }
    })
    try {
        const {data} = await axios.post("http://localhost:4000/api/users/register", {name, email, password})
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        Cookies.set("userInfo", data)
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAILED,
            payload: error.message
        })
    }
}
export {signinn, register}