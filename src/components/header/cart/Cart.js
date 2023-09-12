import style from './cart.module.css';
import React, {useContext} from 'react';
import cartWhite from "../../../images/header/cartWhite.svg";
import cartBlack from "../../../images/header/cartBlack.svg";
import {NavLink} from "react-router-dom";
import {CartContext} from "../../../utils/context";

const Cart = ({headerStyle}) => {
    const {cart} = useContext(CartContext);
    return (
            <NavLink to={'cart'} className={({isActive}) => isActive ? style.cart + ' ' + style["active"] : style.cart}>
                {cart.length !== 0 ? <div className={style.icon}>{cart.length}</div> : null}
                <img src={headerStyle === 'white' ? cartBlack : cartWhite} alt="cart"/>
            </NavLink>
    );
};

export default Cart;