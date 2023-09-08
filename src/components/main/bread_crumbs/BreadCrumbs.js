import React from 'react';
import style from './breadCrumbs.module.css';
import {Link} from "react-router-dom";
import {pages} from "../../../utils/constants";
import {productsArr} from "../../../utils/productsConst";
import {articles} from "../../../utils/articlesConst";

const BreadCrumbs = ({match}) => {
    let routeCrumbs = match.split('/');
    let nameCrumbs = routeCrumbs.map(m_item => {
        let tmp = pages.find(f_item => f_item.route === m_item);
        return tmp ? tmp.name : m_item;
    });
    let length = routeCrumbs.length;

    if (parseInt(nameCrumbs[length - 1])) {
        if (routeCrumbs[length - 2] === 'products') {
            let tmp = productsArr.find(item => item.id === parseInt(nameCrumbs[length - 1]));
            nameCrumbs[length - 1] = tmp.name;
        } else if (routeCrumbs[length - 2] === 'blog') {
            let tmp = articles.find(item => item.id === parseInt(nameCrumbs[length - 1]));
            nameCrumbs[length - 1] = tmp.title;
        }
    }
    routeCrumbs[0] = '/';

    for (let index = 1; index < length; index++){
        for (let i = 0;  i < index; i++){
            routeCrumbs[index]= routeCrumbs[i] + routeCrumbs[index];
        }
    }


    return (
        <span className={style.breadCrumbs}>
            {routeCrumbs.map((item, index) => index !== length - 1? <span className={style.normal}><Link to={item} key={'crumbs ' + index}>{nameCrumbs[index]}</Link> / </span> : <span className={style.last}><Link to={item} key={'crumbs ' + index}>{nameCrumbs[index]}</Link></span> )}
        </span>

    );
};

export default BreadCrumbs;