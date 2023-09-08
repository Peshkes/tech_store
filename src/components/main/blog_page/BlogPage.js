import React, {useContext, useEffect} from 'react';
import style from './blogPage.module.css';
import {HeaderContext} from "../../../utils/context";
import {useResolvedPath} from "react-router-dom";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";

const BlogPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);
    const match  = useResolvedPath("").pathname;

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.blogPage}>
            <div className="narrow">
                <BreadCrumbs match={match}/>
            </div>
        </div>
    );
};

export default BlogPage;