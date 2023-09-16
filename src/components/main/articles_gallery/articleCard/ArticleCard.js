import React from 'react';
import style from './articlesCard.module.css';
import {Link} from "react-router-dom";

const ArticleCard = ({article}) => {
    return (
        <div className={style.articleCard}>
            <Link to={`/blog/${article.id}`}>
                <div className={style.image} style={{backgroundImage: `url(${article.image})`}}/>
            </Link>
            <div className={style.textBlock}>
                <Link to={`/blog/${article.id}`}>
                    <h3>{article.title}</h3>
                </Link>
                <p>{article.date.toLocaleDateString('ru-ru')}</p>
            </div>

        </div>

    );
};

export default ArticleCard;