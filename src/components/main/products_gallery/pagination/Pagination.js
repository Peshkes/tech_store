import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import style from './pagination.module.css';
import nextButton from '../../../../images/nextButton.svg';
import preventButton from '../../../../images/preventButton.svg';


const Pagination = ({pageNumber, count, totalCountProducts, pagesCount}) => {

    const isPrevent = useRef();
    const isNext = useRef();
    const isDotsFirst = useRef();
    const isDotsMedium = useRef();
    const isDotsLast = useRef();

    const pageNumbers = [];

    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i);
    }



    //arrows right and left
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
        <div className={style.paginationWrapper}>
            <div className={style.paginationBox}>
                    {!isPrevent.current ? '' :
                        <Link className={style.btn + ' ' + style.btnLeft} to={`p=${pageNumber - 1}`}>
                            <img alt={'prevent'} src={preventButton}/>
                        </Link>}

                    {pageNumbers.map(number =>
                        <Link key={'link' + number} className={style.numbers + ` ${number === pageNumber ? style.active : ''}` +
                        ` ${number === pageNumber && number === 1 ? style.btnLeft : ''}` +
                        ` ${number === pageNumber && number === pagesCount ? style.btnRight: ''}`}
                              to={`p=${number}`}>
                            <div key={number}>{number}</div>
                        </Link>
                    )}

                    {!isNext.current ? '' :
                        <Link className={style.btn + ' ' + style.btnRight} to={`p=${pageNumber + 1}`}>
                            <img alt={'next'} src={nextButton}/>
                        </Link>}
            </div>
        </div>
    );
};

export default Pagination;