import React from 'react';
import {productsArr} from "../../../../utils/productsConst";
import style from "./cartItem.module.css";
import {Link} from "react-router-dom";

const CartItem = ({cartObject, type}) => {
    const productObject = productsArr.find(item => item.id === cartObject.id);
    return (
        <div className={style.cartItem + " " + style[type]}>
            <Link to={`/product/${productObject.id}`}>
                {
                    productObject.type === 'laptops' ?
                        <div className={style.image}
                             style={{backgroundImage: `url(${productObject.imgSmall[0]})`, backgroundSize: '80%'}}>
                        </div> :
                        <div className={style.image}
                             style={{backgroundImage: `url(${productObject.imgSmall[0]})`, backgroundSize: '60%'}}>
                        </div>
                }
            </Link>
            <div className={style.middle}>
                <p className={style.id}>#{productObject.id}</p>
                <p className={style.name}>{productObject.name}</p>
                <div className={style.count}>
                    <p>Количество</p>
                    <input type="number" value={cartObject.count}/>
                </div>
            </div>
            <div className={style.right}>
                <p>{productObject.price}₽</p>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default CartItem;