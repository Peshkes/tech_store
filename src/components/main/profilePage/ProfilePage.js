import React, {useContext, useEffect} from 'react';
import style from './profilePage.module.css'
import {HeaderContext} from "../../../utils/context";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";

const ProfilePage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.profilePage}>

            <div className="narrow">
                <BreadCrumbs/>
            </div>
        </div>
    );
};

export default ProfilePage;