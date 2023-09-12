import React, {useContext, useEffect} from 'react';
import style from './profilePage.module.css'
import {HeaderContext} from "../../../utils/context";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";
import {useNavigate, useParams} from "react-router-dom";
import RegistrationForm from "./registration_form/RegistrationForm";
import AuthorizationForm from "./authorization_form/AuthorizationForm";
import {profileTypes} from "../../../utils/constants";
import ProfileCap from "./profile_cap/ProfileCap";

const ProfilePage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.action && !profileTypes.includes(params.action))
            navigate('/error');
        if ('white' !== headerStyle)
            setHeaderStyle('white');
    }, []);

    return (
        <div className={style.profilePage}>
            <div className="narrow">
                <BreadCrumbs/>
                <div className={style.wrapper}>
                    {
                        (!params.action) ? (<ProfileCap/>) :
                            (params.action === 'reg') ? <RegistrationForm/> :
                                (params.action === 'auth') ? <AuthorizationForm/> :
                                    null
                    }
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;