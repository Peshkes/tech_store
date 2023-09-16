import React, {useContext, useEffect} from 'react';
import style from './cartPage.module.css';
import {CartContext, HeaderContext} from "../../../utils/context";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";
import {Link} from "react-router-dom";
import CartItem from "./cartItem/CartItem";

const CartPage = () => {
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);
    const {cart, setCart, money} = useContext(CartContext);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
        console.log(cart);
    }, []);

    return (
        <div className={style.cartPage}>
            <div className="narrow">
                <BreadCrumbs/>
                <h2>Корзина</h2>
                <div className={style.cartPage}>
                    <div className={style.cartList}>
                        {cart.map((item, index) => <CartItem key={'cartItem ' + index} cartObject={item} type={(index === cart.length - 1) ? 'last' : 'normal'}/>)}
                    </div>
                    <div className={style.summary}>
                        <h3>Итог</h3>
                        <div className={style.promo}>
                            <input type="text" placeholder={'Промокод'}/>
                            <button>Проверить</button>
                        </div>
                        <div className={style.subText}>
                            <p className={style.price}>Цена:</p>
                            <p className={style.price}>{money.preTotal}₽</p>
                        </div>
                        <div className={style.subText}>
                            <p>Скидка:</p>
                            <p>{money.sale}%</p>
                        </div>
                        <hr/>
                        <div className={style.subText}>
                            <p>Итог:</p>
                            <p>{money.total}₽</p>
                        </div>
                        <hr/>
                        <Link to={'/checkout'}>
                            <button>Купить</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;