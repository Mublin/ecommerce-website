import { PRODUCT_DETAIL_FAILED, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "../constants/productConstants";



const initialStateProduct = {
    product : {}
  }

  const productDetailReducer = (state = initialStateProduct, action) => {
    switch (action.type){
        case PRODUCT_DETAIL_REQUEST:
            return Object.assign({}, state, {loading: true});
        case PRODUCT_DETAIL_SUCCESS:
            return Object.assign({}, state,{ loading: false, product: action.payload });
        case PRODUCT_DETAIL_FAILED:
            return Object.assign({}, state,{ loading: false, error: action.payload });
        default:
            return state;
    }
  }

  export { productDetailReducer }