import React from 'react';
import style from './banner.module.css';
import image from '../../../images/banner/aw.webp';

const Banner = () => {
    return (
        <div className={style.banner}>
            <div className={style.form}>
                <p>Рассылка</p>
                <h3>Подпишись на рассылку и узнавай новости первым!</h3>
                <div className={style.subform}>
                    <input type="text" placeholder={'Email'}/>
                    <button>Подписаться</button>
                </div>
            </div>
            <img className={style.image} src={image} alt="banner"/>
        </div>
    );
};

export default Banner;