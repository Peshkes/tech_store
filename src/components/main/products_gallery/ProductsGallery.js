import React, {useContext, useState} from 'react';
import style from './productsGallery.module.css';
import ProductCard from "./product_card/ProductCard";
import {productsArr} from "../../../utils/productsConst";
import Pagination from "./pagination/Pagination";
import {PagesContext} from "../../../utils/PagesContext";
import {Link, useParams} from "react-router-dom";

const ProductsGallery = ({sorted, count}) => {

    const {page} = useContext(PagesContext);
    const [isStart, setStart] = useState(true);
    const [isFinish, setFinish] = useState(false);
    const pageNumber = useParams();

    const [currentPage, setCurrentPage] = useState(+pageNumber.number || 1);

    let totalCountProducts = productsArr.length;

    const lastProductIndex = currentPage * count;
    const firstProductIndex = lastProductIndex - count;
    const currentProductPage = productsArr.slice(firstProductIndex, lastProductIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    const changePage = (event) => {

        switch (event.target.id) {
            case 'prevent' : {

                if (currentPage > 1) {
                    setCurrentPage(prevState => prevState - 1)
                }
                return;

            }
            case 'next': {
                if (currentPage < Math.ceil( totalCountProducts / count)) {
                    setCurrentPage(prevState => prevState + 1)
                }
                return;
            }
        }

    }

    return (
        <div className={style.productsGallery} style={{gridTemplateColumns: `repeat(${count / 3}, 1fr)`}}>
            {currentProductPage.map(item => <ProductCard key={item.id} item={item}/>)}
            <div>
                {isStart ? '' :
                <Link to={`${page}/${currentPage - 1}`}>
                    <button id={'prevent'} onClick={event => changePage(event)}>Prev</button>
                </Link>}
                <Pagination count={count} totalCountProducts={totalCountProducts}
                            paginate={paginate}/>
                {isFinish ? '' :
                <Link to={`${page}/${currentPage + 1}`}>
                    <button id={'next'} onClick={event => changePage(event)}>Next</button>
                </Link>}
            </div>
        </div>

    );
};

export default ProductsGallery;