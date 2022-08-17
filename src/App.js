
import Nav from './screens/nav';
import './App.css';
import Intro from './screens/mainscreen/Intro';
import Main from './screens/mainscreen/Main';
import Footers from './screens/Footer';
// import { data } from './data';
import ProductScreen from './screens/single-product-screen/ProductScreen';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import CartScreen from './screens/cartscreen/CartScreen';
import UserScreen from './screens/form/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/form/RegisterScreen';
import ProductsScreen from './screens/form/ProductsScreen';
import ShippingScreen from './screens/form/ShippingScreen';
import PaymentScreen from './screens/form/PaymentScreen';
import PlaceOrderScreen from './screens/form/PlaceOrderScreen';

function App() {


  const userSignin = useSelector(state=> state.userSignin);
  const {userInfo} = userSignin
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  const closeMenu1 = () => {
    document.querySelector(".ororo").classList.remove(".navig")
  }
    return (
        <div className='root'>
          <Nav userInfo={userInfo} openMenu={ openMenu } closeMenu={ closeMenu } closeMenu1={ closeMenu1 }/>
          <div className='route'>
          <Routes>
            <Route path="/" element={(
            <div>
              <Intro />
              <Main />
            </div>)} />
            <Route path="/products" element={<ProductsScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/signin" element={<UserScreen />} /> 
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} /> 
          </Routes>
          </div>
          <Footers />
        </div>
        );}
  

export default App;
