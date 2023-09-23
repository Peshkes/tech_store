import React, {useState} from 'react';
import style from './productsGallery.module.css';
import ProductCard from "./product_card/ProductCard";
import {productsArr} from "../../../utils/productsConst";
import Pagination from "../pagination/Pagination";
import {useSortLinkAnalyst} from "../../../hooks/useSortLinkAnalyst";
import {sortArray} from "../../../utils/functions";

const ProductsGallery = ({sorted = '', count = 8, count_in_row = 4, totalCount = productsArr.length}) => {
    const [page, setPage] = useState(1);

    //sorting
    let sortedArr = productsArr;
    const sortLinkAnalyst = useSortLinkAnalyst(sorted);

    if (sortLinkAnalyst.sortString) {
        sortLinkAnalyst.filterArray.forEach(sorting => {
            switch (sorting.type) {
                case 'range':
                    sortedArr = sortedArr.filter(item => item[sorting.item] >= sorting.data[0] && item[sorting.item] <= sorting.data[1]);
                    return;
                case 'enumeration':
                    sortedArr = sortedArr.filter(item => sorting.data.includes(item[sorting.item].toString().toLowerCase()));
                    return;
                default:
                    return;
            }
        });
    }

    if (sortLinkAnalyst.sorting)
        sortArray(sortedArr, sortLinkAnalyst.sorting);
    else
        sortArray(sortedArr, 'all');


    //current page calculation

    // const totalCountProducts = sortedArr.length;
    // const pagesCount = Math.ceil(totalCountProducts / count);

    if (sortLinkAnalyst.filterArray && sortedArr.length < totalCount) {
        totalCount = sortedArr.length;
    }
    const pagesCount = Math.ceil(totalCount / count);

    //constants for pagination
    const lastProductIndex = page * count;
    const firstProductIndex = lastProductIndex - count;
    const currentProductPage = sortedArr.slice(firstProductIndex, lastProductIndex);

    return (
        <div className={style.wrapper}>
            {sortedArr.length === 0 ?
                <div>
                    <h1>Таких товаров не найдено:(</h1>
                    <h2>Попробуй изменить запрос...</h2>
                </div> :
            <div className={style.productsGallery}
                 style={{gridTemplateColumns: `repeat(${count_in_row}, 1fr)`}}>
                {currentProductPage.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>}
            <Pagination pageNumber={page} setPage={setPage} pagesCount={pagesCount}/>
        </div>
    );
};

export default ProductsGallery;