import React, { useEffect, useState } from "react";
import "./registerScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { register } from "../../actions/userActions";


const RegisterScreen = (props)=>{
    const userRegister = useSelector(state => state.userRegister)
    const { loading, userInfo, error } = userRegister
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [ name, setName ] = useState('')
    const [email, setEmail]= useState('')
    const [repassword, setPassword] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const redirect = searchParams.get("redirect") ? (`/` + searchParams.get('redirect')) : "/"
    useEffect(()=>{
        if (userInfo){
            navigate(redirect)
        }
        return () => {
            //
        };
    }, [userInfo])
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(register(name, email, repassword))
    }
    return (<div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h3>Create Account</h3>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Name
                    </label>
                    <input type="text" name="name" placeholder="Full name ex.. abc" id="name" onChange={(e)=>{ setName(e.target.value)}} />
                </li>
                <li>
                    <label htmlFor="email">
                        E-mail
                    </label>
                    <input type="email" name="email" placeholder="ex.. zaki@gmail.com" id="email" onChange={(e)=>{ setEmail(e.target.value)}} />
                </li>
                <li>
                    <label htmlFor="repassword">Password</label>
                    <input type="repassword" id="repassword" name="repassword" placeholder="secret" onChange={(e)=>{ setPassword(e.target.value) }} />
                </li>
                <li>
                    <button type="submit" className="submitbutton"><Link to={redirect === "/" ? "/register" : "/register?redirect=" + redirect}>Register</Link></button>
                </li>
            </ul>
        </form>
        <ul>
            <li>
                Already have an account?
            </li>
            <li>
                <button className="button-fullwidth"><Link to={redirect === "/" ? "/signin" : "/signin?redirect=" + redirect}>Sign-In</Link></button>
            </li>
        </ul>
    </div>)}



export default RegisterScreen