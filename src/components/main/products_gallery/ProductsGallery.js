import React from 'react';
import style from './productsGallery.module.css';
import ProductCard from "./product_card/ProductCard";
import {productsArr} from "../../../utils/productsConst";
import Pagination from "./pagination/Pagination";
import {useParams} from "react-router-dom";

const ProductsGallery = ({sorted, count}) => {

    //current page calculation
    const {page_number} = useParams();
    const totalCountProducts = productsArr.length;
    const pagesCount = Math.ceil(totalCountProducts / count);
    let pageNumber = 1;

    if (page_number && page_number.includes('=')) {
        let temp = page_number.split('=');
        if (temp.length === 2 && temp[0] === 'p') {
            temp = +temp[1];
            if (temp && temp <= pagesCount) {
                pageNumber = temp;
            }
        }
    }

    //constants for pagination
    const lastProductIndex = pageNumber * count;
    const firstProductIndex = lastProductIndex - count;
    const currentProductPage = productsArr.slice(firstProductIndex, lastProductIndex);

    return (
        <div>
            <div className={style.productsGallery}>
                {currentProductPage.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
            <div className={style.paginationWrapper}>
                <div className={style.paginationBox}>
                    <Pagination pageNumber={pageNumber} count={count}
                                totalCountProducts={totalCountProducts} pagesCount={pagesCount}/>
                </div>
            </div>
        </div>

    );
};

export default ProductsGallery;