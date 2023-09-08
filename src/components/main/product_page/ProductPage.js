import React, {useContext, useEffect} from 'react';
import style from './productPage.module.css';
import {HeaderContext} from "../../../utils/context";
import Banner from "../banner/Banner";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";

const ProductPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.productPage}>

            <div className="narrow">
                <BreadCrumbs/>
            </div>
            <Banner/>
        </div>
    );
};

export default ProductPage;