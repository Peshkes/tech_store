import React from 'react';
import style from './productsGallery.module.css';
import ProductCard from "./product_card/ProductCard";
import {productsArr} from "../../../utils/productsConst";
import Pagination from "../pagination/Pagination";
import {useParams} from "react-router-dom";
import {urlParsing} from "../../../utils/functions";

const ProductsGallery = ({sorted, count}) => {

    //sorting
    const {sort} = useParams();
    let sortedArr = [];

    let sortingObj = {};
    let sortingArr = [];
    let sorting;

    //is sorting?
    if (!sort) {
        sorting = sorted;
    } else {
        sorting = sort;
    }

    if (sorting.length === 0) {

        sortedArr = productsArr;

    } else {

        //making sorting object
        if (sorting.includes('&')) {
            sortingArr = sorting.split('&');
            sortingArr.forEach(item => {
                let temp = item.split('=');

                if (item.includes('+')) {
                    sortingObj[temp[0]] = temp[1].split(/\+/);
                } else {
                    sortingObj[temp[0]] = temp[1];
                }
            })
        } else {
            let temp = sorting.split('=')
            if (temp[1].includes('+')) {
                sortingObj[temp[0]] = temp[1].split(/\+/);
            } else {
                sortingObj[temp[0]] = temp[1];
            }
        }

        //sorting process
        let resultArray = productsArr;
        let keysArr = Object.keys(sortingObj);
        let resultFilteredArray;

        keysArr.forEach(key => {

            console.log(sortingObj[key]);
            if (key === 'p') {
                return;
            } else if (key === 'other' && typeof sortingObj[key] !== 'object') {
                switch (sortingObj[key]) {
                    case 'new': {
                        resultArray.reverse();
                        return;
                    }
                    case 'price_up': {
                        resultArray.sort((first, second) => first.price - second.price);
                        return;
                    }
                    case 'price_down': {
                        resultArray.sort((first, second) => second.price - first.price);
                        return;
                    }
                }
            }

            if (typeof sortingObj[key] !== 'object' && !sortingObj[key].includes('-')) {
                resultArray.forEach(item => {
                    if (sortingObj[key] !== String(item[key]).toLowerCase()) {
                        resultFilteredArray = resultArray.filter(obj => obj.id !== item.id);
                        resultArray = resultFilteredArray;
                    }
                })
            } else  if (sortingObj[key].includes('-')) {

                sortingObj[key] = sortingObj[key].split('-');

                resultArray.forEach(item => {
                    if (item[key] < Number(sortingObj[key][0]) || item[key] > Number(sortingObj[key][1])) {
                        resultFilteredArray = resultArray.filter(obj => obj.id !== item.id);
                        resultArray = resultFilteredArray;
                    }
                })

            } else if (typeof sortingObj[key] === 'object') {

                let resultArrayCopy = resultArray;
                let tempFilteredArray = Array(sortingObj[key].length);

                sortingObj[key].forEach((value, index) => {
                    resultArrayCopy.forEach(item => {
                        if (item[key].toLowerCase() !== value) {
                            tempFilteredArray[index] = resultArrayCopy.filter(obj => obj.id !== item.id);
                            resultArrayCopy = tempFilteredArray[index]
                        }
                    })
                    resultArrayCopy = resultArray;
                })
                resultArray = new Array();
                tempFilteredArray.forEach(item => {
                    resultArray.push(...item)
                });
            }
        })
        sortedArr = resultArray;
    }

    //current page calculation
    const {page_number} = useParams();
    const totalCountProducts = sortedArr.length;
    const pagesCount = Math.ceil(totalCountProducts / count);
    const pageNumber = urlParsing(page_number, pagesCount);

    //constants for pagination
    const lastProductIndex = pageNumber * count;
    const firstProductIndex = lastProductIndex - count;
    const currentProductPage = sortedArr.slice(firstProductIndex, lastProductIndex);

    return (
        <div>
            <div className={style.productsGallery}>
                {sortedArr.length === 0 ? <div>
                        <h1>Таких товаров не найдено:(</h1>
                        <h2>Попробуй изменить запрос...</h2>
                    </div> :
                currentProductPage.map(item => <ProductCard key={item.id} item={item}/>)
                }
            </div>
            <Pagination pageNumber={pageNumber} pagesCount={pagesCount}/>
        </div>
    );
};

export default ProductsGallery;