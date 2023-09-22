import React, {useEffect} from 'react';
import style from "./filter.module.css";
import {useSortLinkAnalyst} from "../../../../hooks/useSortLinkAnalyst";
import {productsArr} from "../../../../utils/productsConst";
import {useNavigate} from "react-router-dom";
import {typeProductsRu} from "../../../../utils/constants";

const Filter = () => {

    const navigate = useNavigate();
    const sortLinkAnalyst = useSortLinkAnalyst();
    const info = {
        type: [],
        company: [],
        price: {
            min: 0,
            max: 0
        },
        rating: []
    };
    const initial = {
        type: [],
        company: [],
        price: {
            min: 0,
            max: 0
        },
        rating: []
    };


    console.log(JSON.parse(JSON.stringify(info)), 'info')
    console.log(initial, 'initial')

    if (sortLinkAnalyst.sortString) {
        sortLinkAnalyst.filterArray.forEach(object => {
            if (object.item === 'price') {
                initial[object.item].min = +object.data[0];
                initial[object.item].max = +object.data[1];
            } else {
                initial[object.item] = object.data;
            }
        })
    }

    info.type = initial.type;
    Object.keys(info).forEach(key => info[key] = makeFiltering(key, info.type));

    function makeFiltering (filteringBy, type) {

        let allKinds = [];
        if (filteringBy === 'price') {
            if (type.length === 0) {
                return productsArr.reduce((accum, item) => {
                    if (item[filteringBy] > accum.max) {
                        accum.max = item[filteringBy];
                    } else if (item[filteringBy] < accum.min) {
                        accum.min = item[filteringBy];
                    }
                    return accum;
                }, {min: productsArr[0][filteringBy], max: 0})
            } else {
                return productsArr.reduce((accum, item) => {
                    if (type.includes(item.type)) {
                        if (item[filteringBy] > accum.max) {
                            accum.max = item[filteringBy];
                        } else if (item[filteringBy] < accum.min) {
                            accum.min = item[filteringBy];
                        }
                    }
                    return accum;
                }, {min: productsArr[0][filteringBy], max: 0})
            }
        } else if (type.length === 0) {
            productsArr.forEach(item => !allKinds.includes(item[filteringBy]) && allKinds.push(item[filteringBy]))
        } else {
            productsArr.forEach(item => type.includes(item.type) && !allKinds.includes(item[filteringBy]) &&
                allKinds.push(item[filteringBy]))
        }

        return allKinds;

    }

    const enumerationOnChangeHandler = (event) => {

        let currentValue = event.target;
        let itemInit = currentValue.parentElement.parentElement.previousElementSibling.id;

        navigate(sortLinkAnalyst.createUrl({
            item: itemInit,
            type: 'enumeration',
            data: [currentValue.id.toLowerCase()],
            checked: currentValue.checked
        }))
    }

    const rangeOnChangeHandler = (event) => {

        let currentInput = event.target;
        let itemInit = currentInput.parentElement.parentElement.previousElementSibling.id;

        switch (currentInput.id) {
            case 'sliderFirst': {
                navigate(sortLinkAnalyst.createUrl({
                    item: itemInit,
                    type: 'range',
                    data: [currentInput.value, currentInput.nextElementSibling.value],
                    checked: currentInput.checked
                }));
                return;
            }
            case 'sliderSecond': {
                navigate(sortLinkAnalyst.createUrl({
                    item: itemInit,
                    type: 'range',
                    data: [currentInput.previousElementSibling.value, currentInput.value],
                    checked: currentInput.checked
                }));
                return;
            }
        }
    }

    const dropMenu = event => {
        event.currentTarget.parentElement.lastElementChild.classList.toggle(style.show);
        event.currentTarget.lastChild.classList.toggle(style.dropArrow);
    }

    const makeSlide = (event) => {

        const sliderFirst = document.getElementById('sliderFirst');
        const sliderSecond = document.getElementById('sliderSecond');
        const minGap = 1;

        switch (event.target.id) {
            case 'sliderFirst': {
                const displayValOne = document.getElementById('rangeFirst');

                if (parseInt(sliderSecond.value) - parseInt(sliderFirst.value) <= minGap) {
                    sliderFirst.value = parseInt(sliderSecond.value) - minGap;
                }

                displayValOne.textContent = sliderFirst.value;
                return;
            }
            case 'sliderSecond': {
                const displayValTwo = document.getElementById('rangeSecond');

                if (parseInt(sliderSecond.value) - parseInt(sliderFirst.value) <= minGap) {
                    sliderSecond.value = parseInt(sliderFirst.value) + minGap;
                }

                displayValTwo.textContent = sliderSecond.value + ' ₽';
                return;
            }
        }
    }

    useEffect(() => {
        const sliderFirst = document.getElementById('sliderFirst');
        const sliderSecond = document.getElementById('sliderSecond');

        sliderFirst.value = info.price.min;
        sliderSecond.value = info.price.max;

    }, [info.price, info.type]);

    return (
        <div className={style.sorting}>
                <div>
                    <h4 onClick={dropMenu} id={'type'}>
                        Тип
                        <div className={style.arrow}></div>
                    </h4>
                    <div className={style.subMenu}>
                        {typeProductsRu.map(item =>
                            <label key={'label-type' + item}>
                                <input defaultChecked={initial.type.includes(item.typeEn) && true}
                                       onChange={enumerationOnChangeHandler} type={'checkbox'} id={item.typeEn} key={item.typeEn}/>
                                <div key={'type' + item.typeEn} className={style.checkboxCheckmark}></div>
                                <p key={'p-type' + item.typeEn}>{item.typeRu}</p>
                            </label>
                        )}
                    </div>
                </div>

                <div>
                    <h4 onClick={dropMenu} id={'company'}>
                        Производитель
                        <div className={style.arrow}></div>
                    </h4>
                    <div className={style.subMenu}>
                        {info.company.map(item =>
                            <label key={'label-company'+ item}>
                                <input defaultChecked={initial.company.includes(item.toLowerCase()) && true}
                                   onChange={enumerationOnChangeHandler} type={'checkbox'} id={item} key={item}/>
                                <div key={'company' + item} className={style.checkboxCheckmark}></div>
                                <p key={'p-company' + item}>{item}</p>
                            </label>
                        )}
                        </div>
                </div>

                <div>
                    <h4 onClick={dropMenu} id={'price'}>
                        Цена
                        <div className={style.arrow}></div>
                    </h4>
                    <div className={style.rangeWrapper + ' ' + style.subMenu}>
                        <div className={style.values}>
                            <span id={'rangeFirst'}>{info.price.min}</span>
                            <span> - </span>
                            <span id={'rangeSecond'}>{info.price.max} ₽</span>
                        </div>
                        <div className={style.container}>
                            <div id={'slTrack'} className={style.sliderTrack}></div>
                            <input onInput={makeSlide} id={'sliderFirst'} className={style.inputLeft} type={'range'}
                                   min={info.price.min} max={info.price.max} defaultValue={info.price.min} onMouseUp={rangeOnChangeHandler}/>
                            <input onInput={makeSlide} id={'sliderSecond'} className={style.inputRight} type={'range'}
                                   min={info.price.min} max={info.price.max} defaultValue={info.price.max} onMouseUp={rangeOnChangeHandler}/>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 onClick={dropMenu} id={'rating'}>
                        Рейтинг
                        <div className={style.arrow}></div>
                    </h4>
                    <div className={style.subMenu}>
                        {[1, 2, 3, 4, 5].map(item =>
                           <label key={'label' + item}>
                               <input defaultChecked={initial.rating.includes(String(item)) && true}
                                      onChange={enumerationOnChangeHandler} type={'checkbox'} id={String(item)} key={item}/>
                               <div key={'check' + item} className={style.checkboxCheckmark}></div>
                               <div key={'box' + item} className={style.starBox}>
                                   {[1, 2, 3, 4, 5].map(number => {
                                   if (number <= item) {
                                       return <div key={'star' + number} className={style.star}></div>
                                   }
                               })}
                               </div>
                           </label>
                        )}
                    </div>
                </div>

        </div>
    );
};

export default Filter;