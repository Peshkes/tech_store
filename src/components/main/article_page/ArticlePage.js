import React, {useContext, useEffect} from 'react';
import style from './articlePage.module.css';
import {HeaderContext} from "../../../utils/context";

const ArticlePage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.articlePage}>

        </div>
    );
};

export default ArticlePage;