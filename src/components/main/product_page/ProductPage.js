import React, {useContext, useEffect} from 'react';
import style from './productPage.module.css';
import {HeaderContext} from "../../../utils/context";

const ProductPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.productPage}>

        </div>
    );
};

export default ProductPage;