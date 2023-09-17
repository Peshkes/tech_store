import React, {useRef} from 'react';
import style from './pagination.module.css';
import nextButton from '../../../images/nextButton.svg';
import preventButton from '../../../images/preventButton.svg';


const Pagination = ({pageNumber, pagesCount, setPage}) => {

    const isPrevent = useRef();
    const isNext = useRef();

    const pageNumbers = [];

    for (let i = 1; i <= pagesCount; i++) {
        pageNumbers.push(i);
    }

    //arrows right and left
    if (pagesCount === 1) {
        isPrevent.current = false;
        isNext.current = false;
    } else if (pageNumber !== 1 && pageNumber !== pagesCount) {
        isPrevent.current = true;
        isNext.current = true;
    } else if (pageNumber === 1) {
        isPrevent.current = false;
        isNext.current = true;
    } else if (pageNumber === pagesCount) {
        isPrevent.current = true;
        isNext.current = false;
    }

    const prevClickHandler = () => {
        setPage(prevPage => prevPage - 1);
    }

    const nextClickHandler = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <div className={style.paginationWrapper}>
            {pagesCount > 1 &&
                <div className={style.paginationBox}>
                    {!isPrevent.current ? '' :
                        <div onClick={prevClickHandler} className={style.btn + ' ' + style.btnLeft}>
                            <img alt={'prevent'} src={preventButton}/>
                        </div>}

                    {pageNumbers.map(number =>
                        <div onClick={() => setPage(number)} key={number}
                             className={style.numbers + ` ${number === pageNumber && style.active}` +
                                 ` ${number === pageNumber && number === 1 && style.btnLeft}` +
                                 ` ${number === pageNumber && number === pagesCount && style.btnRight}`}>
                            {number}
                        </div>
                    )}

                    {!isNext.current ? '' :
                        <div onClick={nextClickHandler} className={style.btn + ' ' + style.btnRight}>
                            <img alt={'next'} src={nextButton}/>
                        </div>}
                </div>
            }
        </div>
    );
};

export default Pagination;