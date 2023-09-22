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
                <div>
                    <Sorter/>
                    <div className={style.main}>
                        <Filter/>
                        <ProductsGallery count={6} count_in_row={3}/>
                    </div>
                </div>
            </div>
            <Banner/>
        </div>
    );
};

export default ProductsPage;