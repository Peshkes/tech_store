import React from 'react';
import style from './menu.module.css';
import {menuList} from "../../../utils/constants";
import MenuItem from "./menu_item/MenuItem";

const Menu = () => {
    return (
        <nav className={style.menu}>
            {menuList.map((item, index) => <MenuItem name={item.name} route={item.route} key={item.route + ' ' + index}/>)}
        </nav>
    );
};

export default Menu;