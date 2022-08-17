import React, { useEffect, useState } from "react";
import "./shippingScreen.css"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { saveShipping } from "../../actions/cartActions";
import { register } from "../../actions/userActions";
import CheckoutSteps from "./CheckoutSteps";


const ShippingScreen = (props)=>{
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [ address, setAddress ] = useState('')
    const [ city, setCity]= useState('')
    const [ area, setArea] = useState('')
    useEffect(()=>{
        return () => {
            //
        };
    }, [])
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShipping({address, city, area}))
        navigate("/payment")
    }
    return (<div>
        <CheckoutSteps step1 step2></CheckoutSteps>
        <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Shipping Details</h2>
                </li>
                <li>
                    <label htmlFor="address">
                        Address
                    </label>
                    <input type="text" name="address" placeholder="exp... naibawa layin dan hassan" id="address" onChange={(e)=>{ setAddress(e.target.value)}} />
                </li>
                <li>
                    <label htmlFor="city">
                        City
                    </label>
                    <input type="text" name="city" placeholder="ex.. Kano" id="city" onChange={(e)=>{ setCity(e.target.value)}} />
                </li>
                <li>
                    <label htmlFor="area">
                        Area
                    </label>
                    <input type="text" name="area" placeholder="ex.. naibawa" id="area" onChange={(e)=>{ setArea(e.target.value)}} />
                </li>
                <li>
                <button type="submit" className="button-fullwidth">Continue</button>
            </li>
            </ul>
        </form>
    </div>
    </div>)}



export default ShippingScreen