import React from 'react';
import style from './productCard.module.css';
import star from '../../../../images/star.svg';
import greyStar from '../../../../images/grey-star.svg';
import cart from '../../../../images/cartBlue.svg'

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
        <div className={style.card}>
            <div>
                <div className={style.images}>
                    <img className={style.imgCard} alt={'product' + item.id} src={item.imgSmall[0]}/>
                    <div className={style.cartBox}>
                        <img className={style.cart} alt={'cart'} src={cart}/>
                    </div>
                </div>
            </div>
            <div className={style.info}>
                <p style={{margin: '0'}}>{setRating(item.rating)}</p>
                <p className={style.id + ' ' + style.discrCard}>#{item.id}</p>
                <h4 className={style.discrCard}>{item.name}<span>{item.price}₽</span></h4>
            </div>

        </div>
    );
};

export default ProductCard;