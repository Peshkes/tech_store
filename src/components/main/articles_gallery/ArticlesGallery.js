import React from 'react';
import style from './articlesGallery.module.css';
import {articles} from "../../../utils/articlesConst";
import {urlParsing} from "../../../utils/functions";
import {useParams} from "react-router-dom";
import ArticleCard from "./articleCard/ArticleCard";
import Pagination from "../pagination/Pagination";

const ArticlesGallery = ({count_on_page = 6, count = articles.length}) => {
    const {page_number} = useParams();
    const currentArticles = articles.sort((a, b) => b.date - a.date).slice(0, count);
    const pagesCount = Math.ceil(count / count_on_page);

    let pageNumber;
    let lastProductIndex;
    let firstProductIndex;
    let currentProductPage;

    if (pagesCount !== 1) {
        pageNumber = urlParsing(page_number, pagesCount);
        lastProductIndex = pageNumber * count_on_page;
        firstProductIndex = lastProductIndex - count_on_page;
        currentProductPage = currentArticles.slice(firstProductIndex, lastProductIndex);
    }

    if (pagesCount === 1)
        return (
            <div className={style.articlesGallery}>
                {currentArticles.map((item, index) => <ArticleCard key={'article ' + index} article={item}/>)}
            </div>
        );
    else
        return (
            <div>
                <div className={style.articlesGallery}>
                    {currentProductPage.map((item, index) => <ArticleCard key={'article ' + index} article={item}/>)}
                </div>
                <Pagination pageNumber={pageNumber} pagesCount={pagesCount}/>
            </div>
        );

};

export default ArticlesGallery;