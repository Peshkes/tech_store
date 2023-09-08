import React, {useContext, useEffect} from 'react';
import style from './cartPage.module.css';
import {HeaderContext} from "../../../utils/context";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";
import {useResolvedPath} from "react-router-dom";

const CartPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);
    const match  = useResolvedPath("").pathname;

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.cartPage}>

            <div className="narrow">
                <BreadCrumbs match={match}/>
            </div>
        </div>
    );
};

export default CartPage;