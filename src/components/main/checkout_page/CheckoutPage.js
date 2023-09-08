import React, {useContext, useEffect} from 'react';
import style from './checkoutPage.module.css';
import {HeaderContext} from "../../../utils/context";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";
import {useResolvedPath} from "react-router-dom";

const CheckoutPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);
    const match  = useResolvedPath("").pathname;

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.checkoutPage}>

            <div className="narrow">
                <BreadCrumbs match={match}/>
            </div>
        </div>
    );
};

export default CheckoutPage;