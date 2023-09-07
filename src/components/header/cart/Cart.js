import style from './cart.module.css';
import React from 'react';
import cartWhite from "../../../images/header/cartWhite.svg";
import cartBlack from "../../../images/header/cartBlack.svg";
import {Link} from "react-router-dom";

const Cart = ({headerStyle}) => {
    return (
            <Link to={'cart'} className={style.cart}>
                <img src={headerStyle === 'white' ? cartBlack : cartWhite} alt="cart"/>
            </Link>
    );
};

export default Cart;