import React from 'react';
import style from './header.module.css';
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import EmptyBlock from "./empty_block/EmptyBlock";
import Search from "./search/Search";
import Cart from "./cart/Cart";
import Profile from "./profile/Profile";

const Header = () => {
    return (
        <header className={style.header}>
            <Logo/>
            <Menu/>
            <EmptyBlock/>
            <Search/>
            <Cart/>
            <Profile/>
        </header>
    );
};

export default Header;