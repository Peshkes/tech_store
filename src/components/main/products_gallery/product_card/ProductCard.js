import React from 'react';
import style from './productCard.module.css';
import star from '../../../../images/starBlue.svg';
import greyStar from '../../../../images/starGrey.svg';
import cart from '../../../../images/cartBlue.svg';
import {Link} from "react-router-dom";

const ProductCard = ({item}) => {

    const setRating = (countStars) => {

        let starsArr = [];
        let noStarsArr = [];

        for (let i = 0; i < countStars; i++) {
            starsArr[i] = <img key={`starBlue` + i} className={style.stars} alt={star} src={star}/>;
        }
        for (let j = 0; j < 5 - countStars; j++) {
            noStarsArr[j] = <img key={`starGrey` + j} className={style.stars} alt={greyStar} src={greyStar}/>;
        }

        return [starsArr, noStarsArr];
    }

    return (
        <div className={style.card}>
            <div>
                <div className={style.images}>
                    <Link to={`product/${item.id}`}>
                        {
                        item.type === 'laptops' ?
                            <div className={style.imgCard}
                                 style={{backgroundImage: `url(${item.imgSmall[0]})`, backgroundSize: 'contain'}}>
                            </div> :
                            <div className={style.imgCard}
                                 style={{backgroundImage: `url(${item.imgSmall[0]})`, backgroundSize: '60%'}}>
                            </div>
                    }
                    </Link>
                    <Link to={'cart'}>
                        <div className={style.cartBox}>
                            <img className={style.cart} alt={'cart'} src={cart}/>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <p style={{margin: '0'}}>{setRating(item.rating)}</p>
                <p className={style.id + ' ' + style.discrCard}>#{item.id}</p>
                <div className={style.info}>
                    <div className={style.discrCard + ' ' + style.name}>
                            <Link className={style.link} to={`product/${item.id}`}>{item.name}</Link>
                    </div>
                    <div className={style.price}>{item.price}<span className={style.rub}> ₽</span></div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;