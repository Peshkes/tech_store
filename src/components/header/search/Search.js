import style from './search.module.css';
import React, {useContext, useState} from 'react';
import searchWhite from '../../../images/header/searchWhite.svg';
import searchBlack from '../../../images/header/searchBlack.svg';
import {productsArr} from "../../../utils/productsConst";
import {articles} from "../../../utils/articlesConst";
import SearchResultItem from "./SearchResultItem";
import {OverlayContext} from "../../../utils/context";

const Search = ({headerStyle}) => {
    const [resultProducts, setResultProducts] = useState([]);
    const [resultArticles, setResultArticles] = useState([]);
    const [text, setText] = useState();
    const {isSearchResultActive, setIsSearchResultActive, isOverlayOpen, setIsOverlayOpen} = useContext(OverlayContext);

    const changeHandler = event => {
        const inputValue = event.target.value;
        setText(inputValue);
        if (!isSearchResultActive && inputValue.length > 0){
            setIsOverlayOpen(true);
            setIsSearchResultActive(true);
        }
        else if (setIsOverlayOpen && inputValue.length === 0){
            setIsOverlayOpen(false);
            setIsSearchResultActive(false);
        } else if (isSearchResultActive && inputValue.length > 0)
            setIsOverlayOpen(true);

        setResultProducts(productsArr.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase().trim())).slice(0,3));
        setResultArticles(articles.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase().trim())).slice(0,2));
    }

    return (
        <div className={style.search + ' ' + style[headerStyle]}>
            <img src={headerStyle === 'white' ? searchBlack : searchWhite} alt="search"/>
            <input id={'search'} className={isSearchResultActive? style.active : null} type="search" placeholder={'Поиск'} onChange={changeHandler} value={text}/>
            {isSearchResultActive && isOverlayOpen &&
                <div className={style.result}>
                    {resultProducts.length !== 0 && resultProducts.map((item, index) => <SearchResultItem key={index + ' result'} setIsOverlayOpen={setIsOverlayOpen} setIsActive={setIsSearchResultActive} setText={setText} result={item}/>)}
                    {resultProducts.length !== 0 && resultArticles.length !== 0 && <hr/>}
                    {resultArticles.length !== 0 && resultArticles.map((item, index) => <SearchResultItem key={index + ' result'} setIsOverlayOpen={setIsOverlayOpen} setIsActive={setIsSearchResultActive} setText={setText} result={item}/>)}
                    {resultProducts.length === 0 && resultArticles.length === 0 && <p>Запрос не найден ;(</p>}
                </div>
            }
        </div>
    );
}

export default Search;