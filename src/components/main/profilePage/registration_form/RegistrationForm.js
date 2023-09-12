import React from 'react';
import style from './registrationForm.module.css';
import {Link} from "react-router-dom";

const RegistrationForm = () => {
    return (
        <form className={style.registrationForm}>
            <div>
                <h3>Регистрация</h3>
                <p>Есть аккаунт?<br/><Link to={'/profile/auth'}>Авторизируйся</Link></p>
            </div>
            <div className={style.inputs}>
                <input type="text" placeholder={'Email'}/>
                <input type="password" placeholder={'Пароль'}/>
                <button onClick={() => alert('Нет соединения')}>Войти</button>
            </div>
        </form>
    );
};

export default RegistrationForm;