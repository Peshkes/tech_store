import React, {useContext, useEffect} from 'react';
import style from './productsPage.module.css';
import {HeaderContext} from "../../../utils/context";
import Banner from "../banner/Banner";

const ProductsPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.productsPage}>
            Products
            <Banner/>
        </div>
    );
};

export default ProductsPage;