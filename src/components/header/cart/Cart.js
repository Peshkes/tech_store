import style from './cart.module.css';
import React from 'react';
import cart from "../../../images/header/cart.svg";
import {Link} from "react-router-dom";

const Cart = () => {
    return (
        <Link to={'cart'} className={style.cart}>
            <img src={cart} alt="cart"/>
        </Link>
    );
};

export default Cart;