import React, {useContext, useEffect} from 'react';
import style from './errorPage.module.css';
import {HeaderContext} from "../../../utils/context";

const ErrorPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.errorPage}>
            Error
        </div>
    );
};

export default ErrorPage;