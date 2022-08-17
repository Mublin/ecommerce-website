import axios from "axios"
import Cookies from "js-cookie"
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT, CART_SAVE_SHIPPING } from "../constants/productConstants"

const addToCart = (id, qty) => async (dispatch, getState) =>{
    try{
        const {data} = await axios.get("http://localhost:4000/api/products/" + id)
        dispatch({ 
            type: CART_ADD_ITEM,
            payload:{
                product: data._id,
                name: data.name,
                price: data.price,
                image: data.image,
                noInStock: data.countInStock,
                qty
            }
        })
        const { cart: { cartItems } } = getState();
        Cookies.set("cartItems", JSON.stringify(cartItems))

    }catch(error){

    }
}
const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: id})
    const { cart: { cartItems } } = getState();
        Cookies.set("cartItems", JSON.stringify(cartItems))
}

const saveShipping = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING,
        payload: data
    })
}
const savePayment = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT,
        payload: data
    })
}
export { addToCart, removeFromCart, saveShipping, savePayment }