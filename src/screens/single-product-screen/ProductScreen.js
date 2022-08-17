import React, { useEffect, useState } from "react";
// import { data } from "./data";
import "./ProductScreen.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { detailsProduct } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const ProductScreen = (props)=>{
    const navigate = useNavigate()
    const [ Qty, SetQty ] = useState(1)
    const productDetails = useSelector(state => state.productDetail);
    const { id } = useParams()
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(detailsProduct(id));
        return () => {
            //
        };
    }, [])


    const addToCart = () => {
        navigate('/cart/' + id + '?qty=' + Qty)
    }
    return (
    <div className="siu">
        <div>
            <Link to={'/'}><button>Back to Homepage</button></Link>
        </div>
        {loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
        <div className="details">
            <div className="details-image">
                <img className="img" src={product.image} alt="Smage" />
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.review})
                    </li>
                    <li>
                        <b>{product.price}</b>
                    </li>
                    <li>
                        Description
                        <p>rbejkebkerjbjk ejkrbrgejgbj erjkbkbgkjgrbg erjknrbgklerbg ejebberjkre erjkerjrbjkr erjkbjrgberjkbrbjk erkbjkrgbrbgjkrgjk erjkbkrejrg erjjkrgbgrk cmmcfjv clsjsdjd ejkemfn gkgklf, djkjkfn kdfkfl.</p>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <div className="a7">
                    <div className="single-prod">
                    Price: <span className="ans">{product.price}</span>
                    </div>
                    <div className="single-prod">
                        State: {product.countInStock > 0 ? "Instock" : 'Out of Stock'}
                        </div>
                    <div className="single-prod">
                    Quantity: <select value={Qty} onChange={(e)=>{
                        SetQty(e.target.value)
                    }}>{[...Array(product.countInStock).keys()].map(x =>
                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                    )}
                        </select>
                    </div>
                    <div>
                        {product.countInStock > 0 ?
                        <button onClick={addToCart} className="btn" >Add To Cart</button> : <div>
                            "Out of Stock"</div>}
                        </div>
                </div>
                
            </div>
        </div>}
    </div>
)}

export default ProductScreen;