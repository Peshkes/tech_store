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

    //sorting

    const {sort} = useParams();
    let sortedArr;

    let sortingArr = [];
    let sorting;
    if (!sort) {
        sorting = sorted;
    } else {
        sorting = sort;
    }

    if (sorting.length !== 0) {

        if (sorting.includes('&')) {
            sortingArr = sorting.split('&');
            console.log(sortingArr)                                         //['type=phones', 'company=apple']
            sortingArr = sortingArr.map(item => item.split(/=|_|\+/));
            console.log(sortingArr, '==')                                   //[ ['type', 'laptops', 'phones'],
                                                                            //  ['price', '100', '12000']    ]
        } else {
            sortingArr[0] = sorting.split(/=|_|\+/)
            console.log(sortingArr, '=')                                    //[['type', 'laptops' 'phones']]
        }

        let res = [];

        sortingArr.map(item => {


            for (let i = 1; i <= item.length; i++) {

                res.push(productsArr.filter(product => product[item[0]].toLowerCase() === item[i]));
            }
                console.log(res, 'all needed elements')

            console.log(res, 'res')
            return;
        })

        let newRes = res.flat(1);
        sortedArr = newRes.filter((item, index) => {

           return  newRes.indexOf(item) !== index
        });

        console.log(sortedArr, 'sort')

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
            <Pagination pageNumber={pageNumber} pagesCount={pagesCount}/>
        </div>
    );
};

export default ProductsGallery;