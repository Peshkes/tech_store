import React, {useContext, useEffect} from 'react';
import style from './cartPage.module.css';
import {HeaderContext} from "../../../utils/context";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";

const CartPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.cartPage}>

            <div className="narrow">
                <BreadCrumbs/>
            </div>
        </div>
    );
};

export default CartPage;