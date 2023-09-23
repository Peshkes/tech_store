import React from 'react';
import style from './profileCap.module.css'
import {Link} from "react-router-dom";

const ProfileCap = () => {
    return (
        <div className={style.profileCap}>
            <h4>Для получения доступа к профилю<br/>нужно сначала авторизироваться</h4>
            <Link to={'auth'}>Авторизироваться</Link>
        </div>
    );
};

export default ProfileCap;