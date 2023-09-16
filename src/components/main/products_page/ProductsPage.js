import React, {useContext, useEffect} from 'react';
import style from './productsPage.module.css';
import {HeaderContext} from "../../../utils/context";
import Banner from "../banner/Banner";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";
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
                <ProductsGallery sorted={'type=laptops'} count={9}/>
            </div>

            <Banner/>
        </div>
    );
};

export default ProductsPage;