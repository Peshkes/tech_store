import React, {useState} from 'react';
import style from './productsGallery.module.css';
import ProductCard from "./product_card/ProductCard";
import {productsArr} from "../../../utils/productsConst";
import Pagination from "../pagination/Pagination";
import {useParams} from "react-router-dom";

const ProductsGallery = ({sorted = '', count}) => {
    const [page, setPage] = useState(1);

    //sorting
    const {sort} = useParams();
    let sortedArr = productsArr;
    let sortString;

    if (sort) {
        sortString = sort;
    } else if (sorted) {
        sortString = sorted;
    }

    if (sortString){
        let filterArray;
        if (sortString.includes('&'))
            filterArray = sortString.split('&');
        else
            filterArray = [sortString];

        filterArray = filterArray.map(item => {
            const result = {};
            const tmp = item.split('=');
            result.item = tmp.shift();
            if (tmp[0].includes('-')) {
                result.type = 'range';
                result.data = tmp[0].split('-');
            } else if (tmp[0].includes('+')) {
                result.type = 'enumeration';
                result.data = tmp[0].split('+');
            } else {
                result.type = 'simple';
                result.data = tmp[0];
            }
            return result;
        });

        let sorting = filterArray.findIndex(item => item.item === 'other');
        if (sorting !== -1)
            sorting = filterArray.splice(sorting, 1)[0].data;
        else
            sorting = null;

        filterArray.forEach(sorting => {
            switch (sorting.type) {
                case 'range':
                    sortedArr = sortedArr.filter(item => item[sorting.item] >= sorting.data[0] && item[sorting.item] <= sorting.data[1]);
                    return;
                case 'enumeration':
                    sortedArr = sortedArr.filter(item => sorting.data.includes(item[sorting.item].toLowerCase()));
                    return;
                case 'simple':
                    sortedArr = sortedArr.filter(item => item[sorting.item].toLowerCase() === sorting.data);
                    return;
                default:
                    return;
            }
        });

        if (sorting)
            sortArray(sortedArr, sorting);
    }

    function sortArray (array, sorting) {
        switch (sorting) {
            case 'new': {
                sortedArr.sort((a, b) => b.id - a.id);
                return;
            }
            case 'price_up': {
                sortedArr.sort((a, b) => a.price - b.price);
                return;
            }
            case 'price_down': {
                sortedArr.sort((a, b) => b.price - a.price);
                return;
            }
            default:
                return;
        }
    }

    //current page calculation
    const totalCountProducts = sortedArr.length;
    const pagesCount = Math.ceil(totalCountProducts / count);

    //constants for pagination
    const lastProductIndex = page * count;
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
            <Pagination pageNumber={page} setPage={setPage} pagesCount={pagesCount}/>
        </div>
    );
};

export default ProductsGallery;