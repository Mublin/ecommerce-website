import { cartReducer } from './reducers/cartReducer';
import { configureStore } from '@reduxjs/toolkit';
import { productDetailReducer } from './reducers/productDetailReducer';
import { productDeleteReducer, productListReducer, productSaveReducer } from './reducers/productListReducer.js';
import Cookies from 'js-cookie';
import { registerReducer, userSigninReducer } from './reducers/userReducer';

const cartItems = Cookies.get("cartItems") || [];
const userInfo = Cookies.get("userInfo") || null;

const initialState = {cart:{cartItems}, userSignin: {userInfo}}
const store = configureStore({
    reducer: { 
      productList : productListReducer,
      productDetail : productDetailReducer,
      cart : cartReducer,
      userSignin : userSigninReducer,
      userRegister: registerReducer,
      productSave: productSaveReducer,
      productDelete: productDeleteReducer
     }
  }, initialState)

export default store;