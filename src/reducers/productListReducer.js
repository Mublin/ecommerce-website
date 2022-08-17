import { PRODUCT_DELETE_FAILED, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_LIST_FAILED, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SAVE_FAILED, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS } from "../constants/productConstants";

const initialStateProducts = {
    products: []
}
const productListReducer = (state = initialStateProducts, action) => {
    switch (action.type){
        case PRODUCT_LIST_REQUEST:
            return Object.assign({}, state, {loading: true});
        case PRODUCT_LIST_SUCCESS:
            return Object.assign({}, state,{ loading: false, products: action.payload });
        case PRODUCT_LIST_FAILED:
            return Object.assign({}, state,{ loading: false, error: action.payload });
        default:
            return state;
    }
}




const productSaveReducer = (state = { product: {} }, action) => {
    switch (action.type){
        case PRODUCT_SAVE_REQUEST:
            return Object.assign({}, state, {loading: true});
        case PRODUCT_SAVE_SUCCESS:
            return Object.assign({}, state,{ loading: false, success: true, product: action.payload });
        case PRODUCT_SAVE_FAILED:
            return Object.assign({}, state,{ loading: false, error: action.payload });
        default:
            return state;
    }
}

const productDeleteReducer = (state = { product: {} }, action) => {
    switch (action.type){
        case PRODUCT_DELETE_REQUEST:
            return Object.assign({}, state, {loading: true});
        case PRODUCT_DELETE_SUCCESS:
            return Object.assign({}, state,{ loading: false, success: true, product: action.payload });
        case PRODUCT_DELETE_FAILED:
            return Object.assign({}, state,{ loading: false, error: action.payload });
        default:
            return state;
    }
}
export { productListReducer, productSaveReducer, productDeleteReducer }