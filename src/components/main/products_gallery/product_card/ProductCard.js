import React from 'react';
import style from './productCard.module.css';
import star from '../../../../images/star.svg';
import greyStar from '../../../../images/grey-star.svg';

const ProductCard = ({item}) => {

    // let count = 4;

    //style={{width: `calc(100% / ${count})`}}

    const setRating = (countStars) => {

        let starsArr = [];
        let noStarsArr = [];

        for (let i = 0; i < countStars; i++) {
            starsArr[i] = <img className={style.stars} alt={star} src={star}/>;
        }
        for (let j = 0; j < 5 - countStars; j++) {
            noStarsArr[j] = <img className={style.stars} alt={greyStar} src={greyStar}/>;
        }

        return [starsArr, noStarsArr];
    }

    return (
        <div>
            <div className={style.boxImg}>
                <img className={style.imageCard} alt={'product' + item.id} src={item.imgSmall[0]}/>
            </div>
            {setRating(item.rating)}
            <p className={style.id}>#{item.id}</p>
            <h3>{item.name}</h3>
            <p>{item.price}₽</p>
        </div>
    );
};

export default ProductCard;