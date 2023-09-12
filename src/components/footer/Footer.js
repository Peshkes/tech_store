import React from 'react';
import style from './footer.module.css';
import Logo from "../header/logo/Logo";
import {Link} from "react-router-dom";
import facebook from '../../images/socials/Facebook.svg'
import instagram from '../../images/socials/Instagram.svg'
import twitter from '../../images/socials/Twitter.svg'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="narrow">
                <div className={style.top}>
                    <div className={style.t1}>
                        <Logo/>
                    </div>
                    <div className={style.t2}>
                        <h4><Link to={'products'}>Товары</Link></h4>
                        <Link to={'products/laptops'}>Ноутбуки</Link>
                        <Link to={'products/phones'}>Телефоны</Link>
                        <Link to={'products/headphones'}>Наушники</Link>
                    </div>
                    <div className={style.t3}>
                        <h4>Помощь</h4>
                        <Link to={'return'}>Возврат</Link>
                        <Link to={'payment_methods'}>Способы оплаты</Link>
                    </div>
                    <div className={style.t4}>
                        <h4>Документы</h4>
                        <Link to={'privacy_policy'}>Политика<br/>конфиденциальности</Link>
                        <Link to={'terms_of_services'}>Условия<br/>предоставления услуг</Link>
                    </div>
                    <div className={style.t5}>
                        <h4>Контакты</h4>
                        <p>Email</p>
                        <a href={'mailto:peshkesv@gmail.com'} className={style.email}>peshkesv@gmail.com</a>
                        <p>Телефон</p>
                        <a href={'tel:+79111112000'} className={style.phone}>+7 911 111 20 00</a>
                        <p>Адрес</p>
                        <a href={"https://yandex.ru/maps/-/CDQXfI2d"} className={style.address}>Россия, г. Москва,<br/>Ломоносовский проспект, д. 27</a>
                    </div>
                </div>
                <hr className={style.hr} size={'1'}/>
                <div className={style.bot}>
                    <div className={style.copyright}>
                        <p>Peshkes Valeriy @ 2023</p>
                    </div>
                    <div className={style.socials}>
                        <Link to={'https://ru-ru.facebook.com/'} target={'_blank'}><img src={facebook} alt="facebook"/></Link>
                        <Link to={'https://www.instagram.com/'} target={'_blank'}><img src={instagram} alt="instagram"/></Link>
                        <Link to={'https://twitter.com/?lang=ru'} target={'_blank'} className={style.twitter}><img src={twitter} alt="twitter"/></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;