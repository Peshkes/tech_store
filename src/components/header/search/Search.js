import style from './search.module.css';
import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div className={style.search}>
                <input type="search" placeholder={'Search..'}/>
            </div>
        );
    }
}

export default Search;