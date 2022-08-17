import axios from "axios";
import { useParams } from "react-router-dom";
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILED, PRODUCT_DETAIL_FAILED, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_REQUEST, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_FAILED, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAILED } from "../constants/productConstants";
const listProducts = () => async (dispatch) => {
    try {
            dispatch( {
                type: PRODUCT_LIST_REQUEST
            });
            const { data } = await axios.get("http://localhost:4000/api/products");
            dispatch({ 
                type: PRODUCT_LIST_SUCCESS, 
                payload: data
            })
        }
        catch(error){
            dispatch({ 
                type: PRODUCT_LIST_FAILED,
                payload: error.message
            })
        }
    
    
    }





const saveProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRODUCT_SAVE_REQUEST,
            payload: product
        })
        const { userSignin: {userInfo}} = getState();
        if(!product._id){
            const {data} = await axios.post("http://localhost:4000/api/products/createproduct", product, {headers: {
            "Authorization": "Bearer " + userInfo.token
        }})
        dispatch({
            type: PRODUCT_SAVE_SUCCESS,
            payload: data
        })   
        }else{
            const {data} = await axios.put("http://localhost:4000/api/products/updateproduct/" +  product._id, product, {headers: {
            "Authorization": "Bearer " + userInfo.token
        }})
        dispatch({
            type: PRODUCT_SAVE_SUCCESS,
            payload: data
        })
        }
        
        
    } catch (error) {
        dispatch({
            type: PRODUCT_SAVE_FAILED,
            payload: error.message
        })
    }
}

const deleteProduct = (productId) => async (dispatch, getState) => {
    try {
            dispatch( {
                type: PRODUCT_DELETE_REQUEST,
                payload: productId
            });
            const { userSignin: {userInfo}} = getState();
            const { data } = await axios.delete("http://localhost:4000/api/products/" + productId, {headers: {
                Authorization: "Bearer " + userInfo.token
            }});
            
            dispatch({ 
                type: PRODUCT_DELETE_SUCCESS, 
                payload: data,
                success: true
            })
        }
        catch(error){
            dispatch({ 
                type: PRODUCT_DELETE_FAILED,
                payload: error.message
            })
        }
    
    
    }

    const detailsProduct = (productId) => async (dispatch) => {
        try {
                dispatch( {
                    type: PRODUCT_DETAIL_REQUEST,
                    payload: productId
                });
                const { data } = await axios.get("http://localhost:4000/api/products/" + productId);
                dispatch({ 
                    type: PRODUCT_DETAIL_SUCCESS, 
                    payload: data
                })
            }
            catch(error){
                dispatch({ 
                    type: PRODUCT_DETAIL_FAILED,
                    payload: "Product does not exist"
                })
            }
        
        
        }

export { listProducts, detailsProduct, saveProduct, deleteProduct }