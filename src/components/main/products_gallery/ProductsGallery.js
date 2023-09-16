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



    // if (sorted.length === 0) {
    //     console.log('sdfdf')
    // }

    // const {sort} = useParams();
    // let sortedArr = [];
    //
    // let sortingArr = [];
    // let sorting;
    // if (!sort) {
    //     sorting = sorted;
    // } else {
    //     sorting = sort;
    // }
    //
    // if (sorting.length !== 0) {
    //
    //     if (sorting.includes('&')) {
    //         sortingArr = sorting.split('&');
    //         console.log(sortingArr)
    //         sortingArr = sortingArr.map(item => {
    //             return item.split('=')      //[['type', 'laptops], ['price', '100-12000]]
    //         });
    //         console.log(sortingArr, '==')
    //     } else {
    //         sortingArr[0] = sorting.split('=') //[['type', 'laptops]]
    //         console.log(sortingArr, '=')
    //     }
    //
    //     let res = productsArr;
    //
    //     sortedArr = sortingArr.map(item => {
    //         res = res.map(product => {
    //             if (product[item[0]].toLowerCase() === item[1]) {
    //                 return product;
    //             }
    //         })
    //
    //         res = res.filter(element => element !== undefined)
    //         console.log(res, 'res')
    //         return res;
    //     })
    //
    //     console.log(sortedArr, 'sort')
    //
    // }


    //constants for pagination
    const lastProductIndex = pageNumber * count;
    const firstProductIndex = lastProductIndex - count;
    const currentProductPage = productsArr.slice(firstProductIndex, lastProductIndex);

    return (
        <div>
            <div className={style.productsGallery}>
                {currentProductPage.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
            <Pagination pageNumber={pageNumber} pagesCount={pagesCount}/>
        </div>
    );
};

export default ProductsGallery;