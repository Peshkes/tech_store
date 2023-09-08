import React from 'react';
import style from './productsGallery.module.css';
import ProductCard from "./product_card/ProductCard";
import {productsArr} from "../../../utils/productsConst";

const ProductsGallery = ({sorted, count}) => {
    return (
        <div className={style.productsGallery} style={{gridTemplateColumns: `repeat(${count / 3}, 1fr)`}}>
            {productsArr.map(item => <ProductCard key={item.id} item={item}/>)}
        </div>
    );
};

export default ProductsGallery;