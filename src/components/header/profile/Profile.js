import style from './prodile.module.css';
import React, {Component} from 'react';
import profile from "../../../images/header/profile.svg";
import {Link} from "react-router-dom";

class Profile extends Component {
    render() {
        return (
            <div>
                <Link className={style.profile} to={'profile/auth'}>
                    <img src={profile} alt="profile"/>
                </Link>
            </div>
        );
    }
}

export default Profile;