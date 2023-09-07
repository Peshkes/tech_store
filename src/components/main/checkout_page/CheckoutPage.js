import React, {useContext, useEffect} from 'react';
import style from './checkoutPage.module.css';
import {HeaderContext} from "../../../utils/context";

const CheckoutPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.checkoutPage}>
            Checkout
        </div>
    );
};

export default CheckoutPage;