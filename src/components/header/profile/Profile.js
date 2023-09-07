import style from './prodile.module.css';
import React from 'react';
import profileBlack from "../../../images/header/profileBlack.svg";
import profileWhite from "../../../images/header/profileWhite.svg";
import {Link} from "react-router-dom";

const Profile = ({headerStyle}) => {
    return (
        <Link className={style.profile} to={'profile/auth'}>
            {headerStyle === 'white' ? <img src={profileBlack} alt="profile"/> : <img src={profileWhite} alt="profile"/>}
        </Link>
    );
}

export default Profile;