import React from 'react';
import style from './slide.module.css';
import {Link} from "react-router-dom";

const Slide = ({title, subtitle, image, productId}) => {
    return (
        <div className={style.slide + ' mySlides'}>
            <div><h3>{title}</h3>
                <h4>{subtitle}</h4></div>
            <img src={image} style={{width:'100%'}} alt={title}/>
            <button>Купить</button>
            <Link to={`product/${productId}`}>Посмотреть</Link>
        </div>
    );
};

export default Slide;