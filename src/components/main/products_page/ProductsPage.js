import React, {useContext, useEffect} from 'react';
import style from './productsPage.module.css';
import {HeaderContext} from "../../../utils/context";
import Banner from "../banner/Banner";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";
import {useResolvedPath} from "react-router-dom";

const ProductsPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);
    const match  = useResolvedPath("").pathname;

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.productsPage}>

            <div className="narrow">
                <BreadCrumbs match={match}/>
            </div>
            <Banner/>
        </div>
    );
};

export default ProductsPage;