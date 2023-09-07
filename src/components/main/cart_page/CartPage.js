import React, {useContext, useEffect} from 'react';
import style from './cartPage.module.css';
import {HeaderContext} from "../../../utils/context";

const CartPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.cartPage}>
            Cart
        </div>
    );
};

export default CartPage;