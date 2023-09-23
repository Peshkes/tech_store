import React from 'react';
import style from './header.module.css';
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import EmptyBlock from "./empty_block/EmptyBlock";
import Search from "./search/Search";
import Cart from "./cart/Cart";
import Profile from "./profile/Profile";

const Header = ({headerStyle}) => {
    return (
        <header className={style.header +' '+ style[headerStyle]}>
            <Logo headerStyle={headerStyle} />
            <Menu headerStyle={headerStyle}/>
            <EmptyBlock/>
            <Search headerStyle={headerStyle}/>
            <Cart headerStyle={headerStyle}/>
            <Profile headerStyle={headerStyle}/>
        </header>
    );
};

export default Header;