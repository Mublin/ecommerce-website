import React, { useEffect } from "react";
import './Main.css'
// import { data } from "./data";
import { Link } from 'react-router-dom';
import { listProducts } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";


const Main = () => {
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect( ()=>{
        dispatch(listProducts());
        return () => {
            //
        };
    }, [])
    return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
        <div>
            <main className="main">
                <div className="content">
                    <ul className="products"> {
                        products.map(product=> {
                        return <li key={product._id}>
                            <div className="product">
                                <Link to={"/product/" + product._id}><img className="product-image" src={product.image} alt="product" /></Link>
                                <div className="product-name"><Link to={"/product/" + product._id}>{product.name}</Link></div>
                                <div id={product._id}></div>
                                <div className="product-brand">{product.brand}</div>
                                <div className="product-price">${product.price}</div>
                                <div className="product-rating">{product.rating} Stars ({product.review} reviews)</div>
                            </div>
                        </li> })
                    }
                    </ul>
                </div>
            </main>
        </div>
    
}







export default Main;