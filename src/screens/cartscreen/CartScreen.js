import React, { useEffect } from "react";
import './CartScreen.css'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../../actions/cartActions";


const CartScreen = () => {
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const {id} = useParams()
    const [ searchParams, setSearchParams ] = useSearchParams();
    const qty = Number(searchParams.get('qty')) || 1;
    const dispatch = useDispatch()
    useEffect(()=>{
        if(id){
            dispatch(addToCart(id, qty))
        }
    }, [])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const checkoutHandler = () => {
        navigate("/signin?redirect=shipping")
    }
    return(
        <div className="cart">
            <div className="cart-list">
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
                                        Quantity:
                                        <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                        {[...Array(item.countInstock).keys()].map(x =>
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            )}
                                        </select>
                                        <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)}>Delete</button>
                                    </div>
                                </div>
                                <div className="cart-price">{item.price}</div>
                            </div>)
                    }
                </ul>
            </div>
            <div className="cart-action">
                <h3>
                    Subtotal ({cartItems.reduce((a, c)=> a + c.qty, 0)} items)
                    :
                    $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h3>
                <button onClick={checkoutHandler} className="button primary" disabled={cartItems.length === 0}>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default CartScreen