import React from "react";
import './nav.css'
import { Link } from 'react-router-dom';


const Nav = ({ openMenu, closeMenu, closeMenu1, userInfo }) => {
    return(
        <nav className="master">
            <header className="header">
                <div className="brand">
                    <button onClick={ openMenu }>
                        &#9776;
                    </button>
                    <img src="http" alt="my logo" />
                </div>
                <div className="navig">
                    <ul className="main-nav">
                        <li><a href="#">Home</a></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="main-nav-1">
                        { userInfo ? <Link to="/profile">{userInfo.name}</Link> : 
                        <div>
                            <button><Link to="/signin">Signin</Link></button>
                            <button><Link to="/register">Register</Link></button>
                        </div>}
                    </ul>
                </div>
                <button onClick={ closeMenu1 } className="ororo">navviii</button>
            </header>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={ closeMenu }>x</button>
                <ul>
                        <li>
                            <a href="#">pants</a>
                        </li>
                        <li>
                            <a href="#">Shirt</a>
                        </li>
                    </ul> 
            </aside>
        </nav>
    )
}

export default Nav;