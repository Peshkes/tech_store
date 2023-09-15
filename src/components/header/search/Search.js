import style from './search.module.css';
import React, {useContext, useState} from 'react';
import searchWhite from '../../../images/header/searchWhite.svg';
import searchBlack from '../../../images/header/searchBlack.svg';
import {productsArr} from "../../../utils/productsConst";
import {articles} from "../../../utils/articlesConst";
import SearchResultItem from "./SearchResultItem";
import {CartContext} from "../../../utils/context";

const Search = ({headerStyle}) => {
    const [isActive, setIsActive] = useState(false);
    const [resultProducts, setResultProducts] = useState([]);
    const [resultArticles, setResultArticles] = useState([]);
    const {isOverlayOpen, setIsOverlayOpen} = useContext(CartContext);
    const changeHandler = event => {
        const text = event.target.value.trim().toUpperCase();
        if (!isActive && text.length > 0){
            setIsOverlayOpen(true);
            setIsActive(true);
        }
        else if (isActive && text.length === 0){
            setIsOverlayOpen(false);
            setIsActive(false);
        } else {
            setIsOverlayOpen(true);
        }

        setResultProducts(productsArr.filter(item => item.name.toUpperCase().includes(text)).slice(0,3));
        setResultArticles(articles.filter(item => item.title.toUpperCase().includes(text)).slice(0,2));
    }

    return (
        <div className={style.search + ' ' + style[headerStyle]}>
            <img src={headerStyle === 'white' ? searchBlack : searchWhite} alt="search"/>
            <input type="search" placeholder={'Поиск'} onChange={changeHandler}/>
            {isActive && isOverlayOpen &&
                <div className={style.result}>
                    {resultProducts.length !== 0 && resultProducts.map((item, index) => <SearchResultItem key={index + ' result'} setIsOverlayOpen={setIsOverlayOpen} setIsActive={setIsActive} result={item}/>)}
                    {resultProducts.length !== 0 && resultArticles.length !== 0 && <hr/>}
                    {resultArticles.length !== 0 && resultArticles.map((item, index) => <SearchResultItem key={index + ' result'} setIsOverlayOpen={setIsOverlayOpen} setIsActive={setIsActive} result={item}/>)}
                    {resultProducts.length === 0 && resultArticles.length === 0 && <p>Запрос не найден ;(</p>}
                </div>
            }
        </div>
    );
}

export default Search;