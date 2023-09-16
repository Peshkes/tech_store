import React from 'react';
import style from './articlesGallery.module.css';
import {articles} from "../../../utils/articlesConst";
import {urlParsing} from "../../../utils/functions";
import {useParams} from "react-router-dom";
import {productsArr} from "../../../utils/productsConst";
import ArticleCard from "./articleCard/ArticleCard";

const ArticlesGallery = ({count_on_page, count}) => {
    const {page_number} = useParams();
    if (!count)
        count = articles.length;
    const currentArticles = articles.sort((a, b) => b.date - a.date).slice(0, count);
    const pagesCount = Math.ceil(count / count_on_page);

    let pageNumber;
    let lastProductIndex;
    let firstProductIndex;
    let currentProductPage;

    if (pagesCount !== 1) {
        pageNumber = urlParsing(page_number, pagesCount);
        lastProductIndex = pageNumber * count;
        firstProductIndex = lastProductIndex - count;
        currentProductPage = productsArr.slice(firstProductIndex, lastProductIndex);
    }

    return (
        <div className={style.articlesGallery}>
            {pagesCount === 1 ?
                currentArticles.map((item, index) => <ArticleCard key={'article ' + index} article={item}/>) : null

            }
        </div>
    );
};

export default ArticlesGallery;