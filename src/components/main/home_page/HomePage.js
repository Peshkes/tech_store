import React, {useContext, useEffect} from 'react';
import style from './homePage.module.css';
import Slider from "./slider/Slider";
import {HeaderContext} from "../../../utils/context";
import ProductsGallery from "../products_gallery/ProductsGallery";
import Banner from "../banner/Banner";
import ArticlesGallery from "../articles_gallery/ArticlesGallery";

const HomePage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('black' !== headerStyle) {
            setHeaderStyle('black');
        }
    }, []);

    return (
        <div className={style.homePage}>
            <Slider/>
            <div className={'narrow'}>
                <h2>Новые поступления</h2>
                <ProductsGallery sorted={'other=new'} count={10}/>
                <h2>Блог</h2>
                <ArticlesGallery count_on_page={3} count={3}/>
            </div>
            <Banner/>
        </div>
    );
};

export default HomePage;