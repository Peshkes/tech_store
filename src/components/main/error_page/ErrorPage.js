import React, {useContext, useEffect} from 'react';
import style from './errorPage.module.css';
import {HeaderContext} from "../../../utils/context";
import {Link} from "react-router-dom";
import ProductsGallery from "../products_gallery/ProductsGallery";

const ErrorPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.errorPage}>
            <div className={'narrow'}>
                <h3>Error 404</h3>
                <p className={style.note}>Этой страницы не существует<br/>(Тогда на что же вы смотрите?)</p>
                <Link className={style.link} to={'/'}>Главная</Link>
                <h2 className={style.alsoLike}>Лучше посмотрите на эти товары</h2>
                <ProductsGallery sorted={'other=new'} count={4} totalCount={8}/>
            </div>
        </div>
    );
};

export default ErrorPage;