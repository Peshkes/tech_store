import React from 'react';
import style from './productsGallery.module.css';
import ProductCard from "./product_card/ProductCard";

const ProductsGallery = () => {
    return (
        <div className={style.productsGallery}>
            <ProductCard/>
        </div>
    );
};

export default ProductsGallery;