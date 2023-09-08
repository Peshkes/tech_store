import React from 'react';
import {Link} from "react-router-dom";

const Pagination = ({count, totalCountProducts, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCountProducts / count); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul>
                {pageNumbers.map(number => <li key={number}>
                    <Link to={`?p=${number}`} onClick={() => paginate(number)}>{number}</Link>
                </li>)}
            </ul>
        </div>
    );
};

export default Pagination;