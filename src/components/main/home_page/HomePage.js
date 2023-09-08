import React, {useContext, useEffect} from 'react';
import style from './homePage.module.css';
import Slider from "./slider/Slider";
import {HeaderContext} from "../../../utils/context";
import ProductsGallery from "../products_gallery/ProductsGallery";
import Banner from "../banner/Banner";
import {PagesContext} from "../../../utils/PagesContext";

const HomePage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);
    const {setPage} = useContext(PagesContext);

    setPage('home');

    useEffect(() => {
        if ('black' !== headerStyle)
            setHeaderStyle('black');
    }, []);

    return (
        <div className={style.homePage}>
            <Slider/>
            <div className={'narrow'}>
                <h2>Новые поступления</h2>
                <ProductsGallery count={12}/>
            </div>
            <Banner/>
        </div>
    );
};

export default HomePage;