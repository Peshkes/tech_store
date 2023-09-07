import style from './search.module.css';
import React from 'react';
import searchWhite from '../../../images/header/searchWhite.svg';
import searchBlack from '../../../images/header/searchBlack.svg';

const Search = ({headerStyle}) => {
    return (
        <div className={style.search + ' ' + style[headerStyle]}>
            <img src={headerStyle === 'white' ? searchBlack : searchWhite} alt="search"/>
            <input type="search" placeholder={'Search'}/>
        </div>
    );
}

export default Search;