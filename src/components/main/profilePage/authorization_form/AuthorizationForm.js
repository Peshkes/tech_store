import React from 'react';
import style from './authorizationForm.module.css';
import {Link} from "react-router-dom";

const AuthorizationForm = () => {
    return (
        <form className={style.authorizationForm}>
            <div>
                <h3>Войти</h3>
                <p>Нет аккаунта?<br/><Link to={'/profile/reg'}>Зарегистрируйтесь</Link></p>
            </div>
            <div className={style.inputs}>
                <input type="text" placeholder={'Email'}/>
                <input type="password" placeholder={'Пароль'}/>
                <button onClick={() => alert('Нет соединения')}>Войти</button>
                <Link to={'#'}>Забыли пароль?</Link>
            </div>
        </form>
    );
};

export default AuthorizationForm;