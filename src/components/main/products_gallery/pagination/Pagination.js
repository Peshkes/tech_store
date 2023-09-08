import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {PagesContext} from "../../../../utils/PagesContext";

const Pagination = ({whereAmI, count, totalCountProducts, paginate}) => {

    const {page} = useContext(PagesContext);

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCountProducts / count); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul>
                {pageNumbers.map(number => <li key={number}>
                    <Link to={`${page}/${number}`} onClick={() => paginate(number)}>{number}</Link>
                </li>)}
            </ul>
        </div>
    );
};

export default Pagination;