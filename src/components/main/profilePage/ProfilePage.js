import React, {useContext, useEffect} from 'react';
import style from './profilePage.module.css'
import {HeaderContext} from "../../../utils/context";

const ProfilePage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.profilePage}>
            Профиль
        </div>
    );
};

export default ProfilePage;