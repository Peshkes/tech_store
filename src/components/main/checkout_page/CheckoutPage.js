import React, {useContext, useEffect} from 'react';
import style from './checkoutPage.module.css';
import {HeaderContext} from "../../../utils/context";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";

const CheckoutPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.checkoutPage}>

            <div className="narrow">
                <BreadCrumbs/>
            </div>
        </div>
    );
};

export default CheckoutPage;