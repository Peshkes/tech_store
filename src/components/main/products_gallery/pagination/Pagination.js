import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import style from './pagination.module.css';
import nextButton from '../../../../images/nextButton.svg';
import preventButton from '../../../../images/preventButton.svg';


const Pagination = ({pageNumber, count, totalCountProducts, pagesCount}) => {

    const isPrevent = useRef();
    const isNext = useRef();

    const pageNumbers = [];

    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i);
    }

    if (pageNumber !== 1 && pageNumber !== Math.ceil(totalCountProducts / count)) {
        isPrevent.current = true;
        isNext.current = true
    } else if (pageNumber === 1) {
        isPrevent.current = false;
        isNext.current = true;
    } else if (pageNumber === Math.ceil(totalCountProducts / count)) {
        isPrevent.current = true;
        isNext.current =  false;
    }

    return (
        <div className={style.numbersBox}>

            {!isPrevent.current ? '' :
                <Link className={style.btn} to={`p=${pageNumber - 1}`}>
                    <img alt={'prevent'} src={preventButton}/>
                </Link>}

            {pageNumbers.map(number =>
                    <Link className={style.numbers + ` ${number === pageNumber ? style.active : ''}`}
                              to={`p=${number}`}>
                        <div key={number}>{number}</div>
                    </Link>
            )}

            {!isNext.current ? '' :
                <Link className={style.btn} to={`p=${pageNumber + 1}`}>
                    <img alt={'next'} src={nextButton}/>
                </Link>}

        </div>
    );
};

export default Pagination;