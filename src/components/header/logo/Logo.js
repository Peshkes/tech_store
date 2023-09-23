import React from 'react';
import logoWhite from '../../../images/header/logos/logo_white.svg';
import logoBlack from '../../../images/header/logos/logo_black.svg';
import {Link} from "react-router-dom";
import style from './logo.module.css';

const Logo = ({headerStyle}) => {
    return (
        <Link className={style.logo} to={'/'}>
            <img src={headerStyle === 'white' ? logoBlack : logoWhite} alt="logo"/>
        </Link>
    );
};

export default Logo;