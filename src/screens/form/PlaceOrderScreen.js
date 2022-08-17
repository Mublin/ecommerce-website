import React, { useEffect } from "react";
// import './PlaceOrderScreen.css'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import CheckoutSteps from "./CheckoutSteps";


const PlaceOrderScreen = () => {
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart);
    const { cartItems, shipping, payment } = cart;
    const dispatch = useDispatch()
    if(!shipping){
        navigate("/shipping")
    }
    if(!payment){
        navigate("/payment")
    }
    useEffect(()=>{
    }, [])
    const checkoutHandler = () => {
        navigate("/signin?redirect=shipping")
    }
    return(
        <div className="cart">
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="placeorder">
                <div className="placeorder-info">
                    <div>
                        <h3>
                            Shipping
                        </h3>
                        <div>
                        {cart.shipping.address}, {cart.shipping.city},
                        {cart.shipping.area}
                        </div>  
                    </div>
                    <div>
                        <h3>
                            Payment
                        </h3>
                        <div>
                            Payment Method: {cart.payment.paymentMethod}
                        </div>
                        <div>
                        <ul className="cart-list-container">
                    <li>
                        <h3>
                            Shopping Cart
                        </h3>
                        <div>
                            Price
                        </div>
                    </li>
                    {
                        cartItems.length === 0 ?
                        <div>
                           Cart is empty 
                        </div> :
                        cartItems.map( item =>
                            <div key={item._id}>
                                <div className="cart-image">
                                <img src={item.image} alt="product" />
                                </div>
                                <div className="cart-name">
                                    <div>
                                        <Link to={"/product/" + item.product}>{item.name}</Link>
                                    </div>
                                    <div>
                                        Quantity:{item.qty}
                                    </div>
                                </div>
                                <div className="cart-price">{item.price}</div>
                            </div>)
                    }
                </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="placeorder-action">
                
                <button onClick={checkoutHandler} className="button primary" disabled={cartItems.length === 0}>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default PlaceOrderScreen