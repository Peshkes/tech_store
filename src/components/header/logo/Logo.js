import React from 'react';
import style from './logo.module.css';
import logo from '../../../images/header/logos/logo_white.svg';
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <div className={style.logo}>
            <Link to={'/'}>
                <img src={logo} alt="logo"/>
            </Link>
        </div>
    );
};

export default Logo;