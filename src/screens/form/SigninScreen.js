import React, { useEffect, useState } from "react";
import "./signinScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { register, signinn } from "../../actions/userActions";


const UserScreen = (props)=>{
    const userSignin = useSelector(state => state.userSignin)
    const { loading, userInfo, error } = userSignin
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
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
        dispatch(signinn(email, password))
    }
    return (<div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h3>Sign-In</h3>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        E-mail
                    </label>
                    <input type="email" name="email" placeholder="ex.. zaki@gmail.com" id="email" onChange={(e)=>{ setEmail(e.target.value)}} />
                </li>
                <li>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="secret" onChange={(e)=>{ setPassword(e.target.value) }} />
                </li>
                <li>
                    <button type="submit" className="submitbutton">Signin</button>
                </li>
            </ul>
        </form>
        <ul>
            <li>
                New to kano-mall?
            </li>
            <li>
                <button className="button-fullwidth"><Link to={redirect === "/" ? "/register" : "/register?redirect=" + redirect}>Create your kano-mall account</Link></button>
            </li>
        </ul>
    </div>)}



export default UserScreen