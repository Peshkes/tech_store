import React, {useContext, useEffect} from 'react';
import style from './errorPage.module.css';
import {HeaderContext} from "../../../utils/context";
import {Link} from "react-router-dom";

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
                <p>Этой страницы не существует<br/>(Тогда на что же вы смотрите?)</p>
                <Link to={'/'}>Главная</Link>
            </div>
        </div>
    );
};

export default ErrorPage;