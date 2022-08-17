import React, { useEffect, useState } from "react";
// import "./paymentScreen.css"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { savePayment, saveShipping } from "../../actions/cartActions";
import { register } from "../../actions/userActions";
import CheckoutSteps from "./CheckoutSteps";


const PaymentScreen = (props)=>{
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [ payment, setPaymentMethod ] = useState('')
    useEffect(()=>{
        return () => {
            //
        };
    }, [])
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(savePayment({payment}))
        navigate("/placeorder")
    }
    return (<div>
        
        <div className="form">
        
        <form onSubmit={submitHandler}>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <ul className="form-container">
                <li>
                    <h2>Payment</h2>
                </li>
                <div>
                <li>
                    <input type="radio" name="paymentmethod" id="paymentmethod" defaultValue="paypal" onChange={(e)=>{ setPaymentMethod(e.target.value)}} />
                    <label htmlFor="paymentmethod">
                        Paypal    
                    </label>
                </li>  
                </div>
                
                <li>
                <button type="submit" className="button-fullwidth">Continue</button>
            </li>
            </ul>
        </form>
    </div>
    </div>)}



export default PaymentScreen