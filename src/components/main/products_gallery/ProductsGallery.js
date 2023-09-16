import React from 'react';
import style from './productsGallery.module.css';
import ProductCard from "./product_card/ProductCard";
import {productsArr} from "../../../utils/productsConst";
import Pagination from "../pagination/Pagination";
import {useParams} from "react-router-dom";
import {urlParsing} from "../../../utils/functions";

const ProductsGallery = ({sorted, count}) => {

    //current page calculation
    const {page_number} = useParams();
    const totalCountProducts = productsArr.length;
    const pagesCount = Math.ceil(totalCountProducts / count);
    const pageNumber = urlParsing(page_number, pagesCount);

    //constants for pagination
    const lastProductIndex = pageNumber * count;
    const firstProductIndex = lastProductIndex - count;
    const currentProductPage = productsArr.slice(firstProductIndex, lastProductIndex);

    return (
        <div>
            <div className={style.productsGallery}>
                {currentProductPage.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
            <Pagination pageNumber={pageNumber} count={count}
                        totalCountProducts={totalCountProducts} pagesCount={pagesCount}/>
        </div>


    );
};

export default ProductsGallery;