import React, {useContext, useEffect, useRef} from 'react';
import style from './blogPage.module.css';
import {HeaderContext} from "../../../utils/context";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";
import ArticlesGallery from "../articles_gallery/ArticlesGallery";
import Banner from "../banner/Banner";
import {useParams} from "react-router-dom";

const BlogPage = () => {
    const params = useParams();
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            if ('white' !== headerStyle)
                setHeaderStyle('white');
            isInitialMount.current = false;
        } else {
            window.scrollTo({
                top: 80,
                behavior: "smooth",
            });
        }
    },[params]);

    return (
        <div className={style.blogPage}>
            <div className="narrow">
                <BreadCrumbs/>
                <ArticlesGallery/>
            </div>
            <Banner/>
        </div>
    );
};

export default BlogPage;