import React from 'react';
import {NavLink} from "react-router-dom";
import style from './menuItem.module.css';

const MenuItem = ({name, route}) => {
    return (
        <NavLink to={route} className={({isActive}) =>
            isActive ? style["active"] : ""
        }>
            {name}
        </NavLink>
    );
};

export default MenuItem;