import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSortLinkAnalyst} from "../../../../hooks/useSortLinkAnalyst";

const Sorter = () => {

    const navigate = useNavigate();
    const sortLinkAnalyst = useSortLinkAnalyst();

    const sortingOnChangeHandler = (event) => {

       navigate(sortLinkAnalyst.createUrl({
            item: 'other',
            type: 'enumerate',
            data: [event.target.value]
        }));
    }
    return (
            <div>
                <select onChange={sortingOnChangeHandler}>
                    <option value={'all'}>Все товары</option>
                    <option value={'price_up'}>По возрастанию цены</option>
                    <option value={'price_down'}>По убыванию цены</option>
                    <option value={'new'}>По новизне</option>
                </select>
            </div>
    );
};

export default Sorter;