import React, {useContext, useEffect} from 'react';
import style from './cartPage.module.css';
import {CartContext, HeaderContext} from "../../../utils/context";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";

const CartPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    const {cart} = useContext(CartContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.cartPage}>

            <div className="narrow">
                <BreadCrumbs/>
            </div>

            {cart.length === 0 ? <div>Let's go shopping!</div> : cart.map(item => <div key={item.id}>{item.id} --- {item.count}</div>)}

        </div>
    );
};

export default CartPage;