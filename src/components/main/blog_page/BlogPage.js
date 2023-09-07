import React, {useContext, useEffect} from 'react';
import style from './blogPage.module.css';
import {HeaderContext} from "../../../utils/context";

const BlogPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.blogPage}>
            Blog
        </div>
    );
};

export default BlogPage;