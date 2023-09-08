import React, {useContext, useEffect} from 'react';
import style from './blogPage.module.css';
import {HeaderContext} from "../../../utils/context";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";

const BlogPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.blogPage}>
            <div className="narrow">
                <BreadCrumbs/>
            </div>
        </div>
    );
};

export default BlogPage;