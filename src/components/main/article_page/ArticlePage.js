import React, {useContext, useEffect} from 'react';
import style from './articlePage.module.css';
import {HeaderContext} from "../../../utils/context";
import Banner from "../banner/Banner";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";
import {useNavigate, useParams} from "react-router-dom";
import {articles} from "../../../utils/articlesConst";

const ArticlePage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);
    const navigate = useNavigate();
    const params = useParams();
    const articleObject = articles.find(article => article.id === +params.articleId);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
        window.scrollTo(0, 0);
        if (!articleObject) {
            navigate('/blog');
        }
    }, []);

    return (
        <div className={style.articlePage}>
            <div className="narrow">
                <BreadCrumbs/>
                <div className={style.article}>
                    <h3>{articleObject && articleObject.title}</h3>
                    <div className={style.meta}>
                        <span>{articleObject && articleObject.author}</span>
                        <span>{articleObject && articleObject.date.toLocaleDateString('ru-ru')}</span>
                    </div>
                    <p className={style.subtitle}>{articleObject && articleObject.subtitle}</p>
                    <img src={articleObject && articleObject.image} alt={articleObject && articleObject.title}/>
                    <p>{articleObject && articleObject.text}</p>
                </div>
            </div>
            <Banner/>
        </div>
    );
};

export default ArticlePage;