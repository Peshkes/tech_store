import React, {useState} from 'react';
import style from './productsGallery.module.css';
import ProductCard from "./product_card/ProductCard";
import {productsArr} from "../../../utils/productsConst";
import Pagination from "./pagination/Pagination";
import {Link, useParams} from "react-router-dom";

const ProductsGallery = ({sorted, count}) => {

    const pageNumber = useParams();

    const [currentPage, setCurrentPage] = useState(+pageNumber.page_number || 1);

    //constants for pagination
    const [isStart, setStart] = useState(false);
    const [isFinish, setFinish] = useState(false);
    const totalCountProducts = productsArr.length;
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
        //style={{gridTemplateColumns: `repeat(${count / 3}, 1fr)`}
        <div>
            <div className={style.productsGallery}>
                {currentProductPage.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
            <div>
                {isStart ? '' :
                    <Link to={`?p=${currentPage - 1}`}>
                        <button id={'prevent'} onClick={event => changePage(event)}>Prev</button>
                    </Link>}
                <Pagination count={count} totalCountProducts={totalCountProducts}
                            paginate={paginate}/>
                {isFinish ? '' :
                    <Link to={`?p=${currentPage + 1}`}>
                        <button id={'next'} onClick={event => changePage(event)}>Next</button>
                    </Link>}
            </div>
        </div>

    );
};

export default ProductsGallery;