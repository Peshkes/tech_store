import React from 'react';
import style from './menu.module.css';
import {menuList} from "../../../utils/constants";
import MenuItem from "./menu_item/MenuItem";

const Menu = ({headerStyle}) => {
    return (
        <nav className={style.menu + ' ' + style[headerStyle]}>
            {menuList.map((item, index) => <MenuItem name={item.name} route={item.route} key={item.route + ' ' + index} headerStyle={headerStyle}/>)}
        </nav>
    );
};

export default Menu;