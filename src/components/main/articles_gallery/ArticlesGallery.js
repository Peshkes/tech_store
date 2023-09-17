import React, {useEffect, useRef, useState} from 'react';
import style from './articlesGallery.module.css';
import {articles} from "../../../utils/articlesConst";
import ArticleCard from "./articleCard/ArticleCard";
import Pagination from "../pagination/Pagination";

const ArticlesGallery = ({count_on_page = 6, count = articles.length}) => {
    const [page, setPage] = useState(1);
    const isInitialMount = useRef(true);
    const currentArticles = articles.sort((a, b) => b.date - a.date).slice(0, count);
    const pagesCount = Math.ceil(count / count_on_page);


    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            window.scrollTo({
                top: 80,
                behavior: "smooth",
            });
        }
    },[page]);

    let lastProductIndex;
    let firstProductIndex;
    let currentProductPage;

    if (pagesCount !== 1) {
        lastProductIndex = page * count_on_page;
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
                <Pagination setPage={setPage} pageNumber={page} pagesCount={pagesCount}/>
            </div>
        );

};

export default ArticlesGallery;