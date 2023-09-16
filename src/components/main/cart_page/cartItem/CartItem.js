import React, {useContext, useEffect, useRef} from 'react';
import {productsArr} from "../../../../utils/productsConst";
import style from "./cartItem.module.css";
import {Link} from "react-router-dom";
import {CartContext} from "../../../../utils/context";

const CartItem = ({cartObject, type}) => {
    const {deleteProduct, changeCount} = useContext(CartContext);
    const productObject = productsArr.find(item => item.id === cartObject.id);
    const link = useRef();

    useEffect(()=>{
        link.current.value = cartObject.count;
    },[cartObject])

    const blurHandler = (e) => {
        const value = +e.target.value;
        if (value < 0)
            e.target.value = 1;
        if (value >= 0)
            changeCount(productObject.id, value);
    }

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
                    <input ref={link} type="number" min={0} onBlur={blurHandler}/>
                </div>
            </div>
            <div className={style.right}>
                <p>{productObject.price}₽</p>
                <button onClick={()=>deleteProduct(productObject.id)}>Удалить</button>
            </div>
        </div>
    );
};

export default CartItem;