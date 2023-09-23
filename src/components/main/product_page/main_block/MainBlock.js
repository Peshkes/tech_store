import React, {useContext} from 'react';
import style from './mainBlock.module.css';
import {CartContext} from "../../../../utils/context";

const MainBlock = ({product}) => {
    const {addToCart} = useContext(CartContext);
    const clickHandler = (e) => {
        addToCart({id: product.id, count: +e.target.previousSibling.value});
    }
    const changeHandler = (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    }
    return (
        <div className={style.mainBlock}>
            <h3>{product.name}</h3>
            <p>Забыл сделать описание товаров Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet culpa harum id magnam nihil officiis quas repudiandae sequi tempora!</p>
            <h4>{product.price}₽</h4>
            <p>Количество</p>
            <input type="number" min={1} defaultValue={1} onChange={changeHandler}/>
            <button onClick={clickHandler}>Купить</button>
        </div>
    );
};

export default MainBlock;