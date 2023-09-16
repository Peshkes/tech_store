import React, {useContext, useEffect} from 'react';
import style from './productPage.module.css';
import {HeaderContext} from "../../../utils/context";
import Banner from "../banner/Banner";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";
import {productsArr} from "../../../utils/productsConst";
import {useNavigate, useParams} from "react-router-dom";

const ProductPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);
    const productObject = productsArr.find(product => product.id === +params.productId);

    useEffect(() => {
        if ('white' !== headerStyle)
            setHeaderStyle('white');
        window.scrollTo(0, 0);
        if (!productObject) {
            navigate('/products');
        }
    }, []);

    return (
        <div className={style.productPage}>

            <div className="narrow">
                <BreadCrumbs/>
            </div>
            <Banner/>
        </div>
    );
};

export default ProductPage;