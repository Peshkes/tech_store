import React, {useContext} from 'react';
import style from './slide.module.css';
import {Link} from "react-router-dom";
import {CartContext} from "../../../../../utils/context";

const Slide = ({title, subtitle, image, productId}) => {
    const {addToCart} = useContext(CartContext)
    return (
        <div className={style.slide + ' mySlides'}>
            <div>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </div>
            <img src={image} style={{width: '100%'}} alt={title}/>
            <div className={style.buttonBlock}>
                <button onClick={()=>addToCart({id: productId, count: 1})}>Купить</button>
                <Link to={`/product/${productId}`}>Посмотреть</Link>
            </div>
        </div>
    );
};

export default Slide;