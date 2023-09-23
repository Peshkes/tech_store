import style from './prodile.module.css';
import React from 'react';
import profileBlack from "../../../images/header/profileBlack.svg";
import profileWhite from "../../../images/header/profileWhite.svg";
import {NavLink} from "react-router-dom";

const Profile = ({headerStyle}) => {
    return (
        <NavLink to={'profile/auth'} className={({isActive}) => isActive ? style["active"] + ' ' + style.profile : style.profile}>
            {headerStyle === 'white' ? <img src={profileBlack} alt="profile"/> : <img src={profileWhite} alt="profile"/>}
        </NavLink>
    );
}

export default Profile;