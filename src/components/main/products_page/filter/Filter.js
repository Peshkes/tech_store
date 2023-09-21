import React, {useEffect} from 'react';
import style from "./filter.module.css";
import {useSortLinkAnalyst} from "../../../../hooks/useSortLinkAnalyst";
import {productsArr} from "../../../../utils/productsConst";
import {useNavigate} from "react-router-dom";
import {categoriesRu, typeProductsRu} from "../../../../utils/constants";
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
    }
    const initial = {
        type: [],
        company: [],
        price: {
            min: 0,
            max: 0
        },
        rating: []
    }

    if (sortLinkAnalyst.sortString) {
        sortLinkAnalyst.filterArray.forEach(object => {
            if (object.item === 'price') {
                initial[object.item].min = +object.data[0];
                initial[object.item].max = +object.data[1];
            } else {
                initial[object.item] = object.data;
            }
        })
        console.log(initial, '====')
    }
    console.log(sortLinkAnalyst)

    Object.keys(info).forEach(key => info[key] = makeFiltering(key, info.type));
    console.log(info)

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
        let itemInit;
        categoriesRu.forEach(item => {
            if (item.categoryRu === currentValue.parentElement.parentElement.previousElementSibling.textContent) {
                itemInit = item.categoryEn;
            }
        })
        navigate(sortLinkAnalyst.createUrl({
            item: itemInit,
            type: 'enumeration',
            data: [currentValue.id.toLowerCase()],
            checked: currentValue.checked
        }))
    }

    const rangeOnChangeHandler = (event) => {
        console.log(event.target.value)

        let currentInput = event.target;
        let itemInit;
        categoriesRu.forEach(item => {
            if (item.categoryRu === currentInput.parentElement.parentElement.previousElementSibling.textContent) {
                itemInit = item.categoryEn;
            }
        })
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

        // navigate(sortLinkAnalyst.createUrl({item: 'price', type: 'range', data: ['711', '50000']}))
    }

    const dropMenu = event => {
        let menu = event.target.parentElement.lastElementChild;
        menu.classList.toggle(style.show);
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
                break;
            }
            case 'sliderSecond': {
                const displayValTwo = document.getElementById('rangeSecond');

                if (parseInt(sliderSecond.value) - parseInt(sliderFirst.value) <= minGap) {
                    sliderSecond.value = parseInt(sliderFirst.value) + minGap;
                }

                displayValTwo.textContent = sliderSecond.value;
                break;
            }
        }
    }


    useEffect(() => {
        const sliderFirst = document.getElementById('sliderFirst');
        const sliderSecond = document.getElementById('sliderSecond');

        sliderFirst.value = info.price.min;
        sliderSecond.value = info.price.max;

    }, [])

    return (
        <div className={style.sorting}>

                <div>
                    <h4 onClick={dropMenu}>Тип</h4>
                    <div className={style.subMenu}>
                        {info.type.map(item =>
                            <label key={'label' + item}>
                                <input defaultChecked={initial.type.includes(item) && true}
                                       onChange={enumerationOnChangeHandler} type={'checkbox'} id={item} key={item}/>
                                {typeProductsRu.map(element => element.typeEn === item && element.typeRu)}
                            </label>
                        )}
                    </div>
                </div>

                <div>
                    <h4 onClick={dropMenu}>Производитель</h4>
                    <div className={style.subMenu}>
                        {info.company.map(item =>
                            <label key={'label'+ item}>
                                <input defaultChecked={initial.company.includes(item.toLowerCase()) && true}
                                   onChange={enumerationOnChangeHandler} type={'checkbox'} id={item} key={item}/>
                                {item}
                            </label>
                        )}
                        </div>
                </div>

                <div>
                    <h4 onClick={dropMenu}>Цена</h4>
                    <div className={style.rangeWrapper + ' ' + style.subMenu}>
                        <div className={style.values}>
                            <span id={'rangeFirst'}>{info.price.min}</span>
                            <span> - </span>
                            <span id={'rangeSecond'}>{info.price.max}</span>
                        </div>
                        <div className={style.container}>
                            <div id={'slTrack'} className={style.sliderTrack}></div>
                            <input onInput={makeSlide} id={'sliderFirst'} className={style.inputLeft} type={'range'}
                                   min={info.price.min} max={info.price.max} onMouseUp={rangeOnChangeHandler}/>
                            <input onInput={makeSlide} id={'sliderSecond'} className={style.inputRight} type={'range'}
                                   min={info.price.min} max={info.price.max} onMouseUp={rangeOnChangeHandler}/>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 onClick={dropMenu}>Рейтинг</h4>
                    <div className={style.subMenu}>
                        {[1, 2, 3, 4, 5].map(item =>
                           <label key={'label' + item}>
                               <input defaultChecked={initial.rating.includes(String(item)) && true}
                                      onChange={enumerationOnChangeHandler} type={'checkbox'} id={String(item)} key={item}/>
                               {item}
                           </label>
                        )}
                    </div>
                </div>

        </div>
    );
};

export default Filter;