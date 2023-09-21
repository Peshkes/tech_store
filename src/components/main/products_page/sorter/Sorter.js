import React from 'react';
import {useNavigate} from "react-router-dom";

const Sorter = () => {

    const navigate = useNavigate();

    const sortingOnChangeHandler = () => {

        navigate('/blog')
    }
    return (
            <div>
                <select onChange={sortingOnChangeHandler}>
                    <option>Все товары</option>
                    <option>По возрастанию цены</option>
                    <option>По убыванию цены</option>
                    <option>По новизне</option>
                </select>
            </div>
    );
};

export default Sorter;