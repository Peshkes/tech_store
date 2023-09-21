import React, {useContext, useEffect} from 'react';
import style from './productsPage.module.css';
import {HeaderContext} from "../../../utils/context";
import Banner from "../banner/Banner";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";
import Sorter from "./sorter/Sorter";
import Filter from "./filter/Filter";
import ProductsGallery from "../products_gallery/ProductsGallery";

const ProductsPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);


    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.productsPage}>
            <div className="narrow">
                <BreadCrumbs/>
                <Sorter/>
                <div>
                    <Filter/>
                    <ProductsGallery count={6}/>
                </div>
            </div>
            <Banner/>
        </div>
    );
};

export default ProductsPage;