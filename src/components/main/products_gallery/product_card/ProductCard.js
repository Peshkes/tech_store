import React from 'react';
import style from './productCard.module.css';
import img from '../../../../images/products/phones/6/6-1.webp';

const ProductCard = () => {
    return (
        <div>
            <img className={style.imageCard} alt={'product'} src={img}/>
            <h3>Phone 15</h3>
            <p>stars</p>
            <p>price</p>
        </div>
    );
};

export default ProductCard;