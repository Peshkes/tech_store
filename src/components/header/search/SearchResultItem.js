import React from 'react';
import style from './search.module.css';
import {Link} from "react-router-dom";

const SearchResultItem = ({result, setIsActive}) => {
    return (
        <Link to={ result.name ? `/product/${result.id}` :  `/blog/${result.id}`} onClick={()=>setIsActive(false)}>
            <div className={style.resultItem}>
                {result.name ?
                    result.type === 'laptops' ?
                        <div style={{backgroundImage: `url(${result.imgSmall[0]})`, backgroundSize: 'contain'}}></div> :
                        <div style={{backgroundImage: `url(${result.imgSmall[0]})`, backgroundSize: '60%'}}></div> :
                    <div className={style.article}
                         style={{backgroundImage: `url(${result.image})`, backgroundSize: 'contain'}}></div>}
                {result.name ? <p>{result.name}</p> : <p>{result.title}</p>}
            </div>
        </Link>
    );
}
export default SearchResultItem;