import React, {useContext, useEffect} from 'react';
import style from './homePage.module.css';
import Slider from "./slider/Slider";
import {HeaderContext} from "../../../utils/context";
import ProductsPage from "../products_page/ProductsPage";
import ProductPage from "../product_page/ProductPage";
import ProductGallery from "../product_description/product_gallery/ProductGallery";
import ProductsGallery from "../products_gallery/ProductsGallery";

const HomePage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('black' !== headerStyle)
            setHeaderStyle('black');
    }, []);

    return (
        <div className={style.homePage}>
            <Slider/>
            <div className={'narrow'}>
                <h2>Новые поступления</h2>
                <ProductsGallery/>
            </div>

        </div>
    );
};

export default HomePage;