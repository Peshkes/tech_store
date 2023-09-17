import React from 'react';
import style from './productsGallery.module.css';
import ProductCard from "./product_card/ProductCard";
import {productsArr} from "../../../utils/productsConst";
import Pagination from "../pagination/Pagination";
import {useParams} from "react-router-dom";
import {urlParsing} from "../../../utils/functions";
import product1_1 from "../../../images/products/phones/1/1-1.webp";
import product1_2 from "../../../images/products/phones/1/1-2.webp";
import product1_3 from "../../../images/products/phones/1/1-3.webp";
import product1_4 from "../../../images/products/phones/1/1-4.webp";
import product1_1_x2 from "../../../images/products/phones/1/1-1-x2.webp";
import product1_2_x2 from "../../../images/products/phones/1/1-2-x2.webp";
import product1_3_x2 from "../../../images/products/phones/1/1-3-x2.webp";
import product1_4_x2 from "../../../images/products/phones/1/1-4-x2.webp";
import logo from "../../header/logo/Logo";

const ProductsGallery = ({sorted, count}) => {

    //sorting
    const {sort} = useParams();
    let sortedArr = [];

    let sortObj = {};

    let sortingArr = [];

    let sorting;
    if (!sort) {
        sorting = sorted;
    } else {
        sorting = sort;
    }

    if (sorting.length !== 0) {

        if (sorting.includes('&')) {
            sortingArr = sorting.split('&');
            console.log(sortingArr, '$')
            sortingArr.forEach(item => {
                let temp = item.split('=');

                console.log(temp, '=')

                if (item.includes('+')) {
                    sortObj[temp[0]] = temp[1].split(/\+/);
                } else {
                    sortObj[temp[0]] = temp[1];
                }
            })

                                                                                //['type=phones', 'company=apple']
            // sortingArr = sortingArr.map(item => item.split(/=|\+|\-/));
            // console.log(sortingArr, '==')                                       //[ ['type', 'laptops', 'phones'],
                                                                                //  ['price', '100', '12000']    ]
        } else {
            // sortingArr[0] = sorting.split(/=|\+|\-/)
            let temp = sorting.split('=')
            console.log(temp, 'else')
            if (temp[1].includes('+')) {
                sortObj[temp[0]] = temp[1].split(/\+/);
            } else {
                sortObj[temp[0]] = temp[1];
            }
                                                                                //[['type', 'laptops' 'phones']]
        }

        let res = productsArr;



        let newArr = [];

        let keysArr = Object.keys(sortObj)
        console.log(keysArr)
        console.log(sortObj)

        let resFilt;

        keysArr.forEach(key => {

            if (typeof sortObj[key] !== 'object' && !sortObj[key].includes('-')) {
                res.forEach(item => {
                    if (sortObj[key] !== item[key].toLowerCase()) {

                        resFilt = res.filter(obj => obj.id !== item.id);
                        res = resFilt;
                    }


                })

                console.log(res, 'filter')

            } else  if (sortObj[key].includes('-')) {
                sortObj[key] = sortObj[key].split('-');
                console.log( sortObj[key][0], 'else if')

                res.forEach(item => {
                    if (item[key] < Number(sortObj[key][0]) || item[key] > Number(sortObj[key][1])) {

                        console.log(item[key], 'item', sortObj[key][0])

                        resFilt = res.filter(obj => obj.id !== item.id);
                        res = resFilt;
                    }
                })

                console.log(res, 'filter')

            } else if


            (typeof sortObj[key] === 'object') {


                let ewwww = res;

                let tempArr = Array(sortObj[key].length);
                console.log(tempArr)

                console.log('typeof')
                sortObj[key].forEach((value, index) => {
                    ewwww.forEach(item => {
                        if (item[key].toLowerCase() !== value) {

                            tempArr[index] = ewwww.filter(obj => obj.id !== item.id);
                            console.log(tempArr, 'index', index)
                            ewwww = tempArr[index]
                        }
                        console.log( tempArr[index], 'aft filt')
                    })
                    ewwww = res;
                })

                res = new Array();

                tempArr.forEach(item => {
                    res.push(...item)
                });

                // tempArr = new Array();


                console.log(res, 'filter else')
            }


        })

        sortedArr = res;



        console.log(sortedArr, 'newArr')



    }


    //current page calculation
    const {page_number} = useParams();
    const totalCountProducts = sortedArr.length;
    const pagesCount = Math.ceil(totalCountProducts / count);
    const pageNumber = urlParsing(page_number, pagesCount);

    //constants for pagination
    const lastProductIndex = pageNumber * count;
    const firstProductIndex = lastProductIndex - count;
    const currentProductPage = sortedArr.slice(firstProductIndex, lastProductIndex);

    return (
        <div>
            <div className={style.productsGallery}>
                {currentProductPage.map(item => <ProductCard key={item.id} item={item}/>)}
            </div>
            <Pagination pageNumber={pageNumber} pagesCount={pagesCount}/>
        </div>
    );
};

export default ProductsGallery;

// //sorting
// const {sort} = useParams();
// let sortedArr;
//
// let sortingArr = [];
// let sorting;
// if (!sort) {
//     sorting = sorted;
// } else {
//     sorting = sort;
// }
//
// if (sorting.length !== 0) {
//
//     if (sorting.includes('&')) {
//         sortingArr = sorting.split('&');
//         console.log(sortingArr)                                         //['type=phones', 'company=apple']
//         sortingArr = sortingArr.map(item => item.split(/=|\+|\-/));
//         console.log(sortingArr, '==')                                   //[ ['type', 'laptops', 'phones'],
//                                                                         //  ['price', '100', '12000']    ]
//     } else {
//         sortingArr[0] = sorting.split(/=|\+|\-/)
//         console.log(sortingArr, '=')                                    //[['type', 'laptops' 'phones']]
//     }
//
//     let res = [];
//
//     sortingArr.map(item => {
//
//
//         for (let i = 1; i <= item.length; i++) {
//
//             res.push(productsArr.filter(product => {
//
//                 console.log(item[0])
//
//                 if (item[0] !== 'price') {
//                     return product[item[0]].toLowerCase() === item[i];
//                 } else if (product.price >= item[i] && product.price <= item[i + 1]) {
//                     return true;
//                 }
//             }));
//         }
//         console.log(res, 'all needed elements')
//
//         console.log(res, 'res')
//         return;
//     })
//
//     let newRes = res.flat(1);
//
//     if (sortingArr.length > 1) {
//         sortedArr = newRes.filter((item, index, items) => items.indexOf(item) !== index);
//     }else {
//         sortedArr = newRes;
//     }
//
//     // if (sortingArr.length > 1) {
//     //     sortedArr = newRes.filter((item, index) => {
//     //         return  newRes.indexOf(item) !== index
//     //     });
//     // } else {
//     //     sortedArr = newRes;
//     // }
//     console.log(sortedArr, 'sort')
//
// }