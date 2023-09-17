import React, {useContext, useEffect, useState} from 'react';
import style from './productPage.module.css';
import {CartContext, HeaderContext} from "../../../utils/context";
import Banner from "../banner/Banner";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";
import {productsArr} from "../../../utils/productsConst";
import {useNavigate, useParams} from "react-router-dom";
import ProductGallery from "./product_gallery/ProductGallery";
import MainBlock from "./main_block/MainBlock";
import AdditionalBlock from "./additional_block/AdditionalBlock";
import ImageViewer from "./image_viewer/ImageViewer";

const ProductPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [isViewActive, setIsViewActive] = useState(false);
    const [selectedImage, selectImage] = useState(0);
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);
    const {isOverlayOpen, setIsOverlayOpen} = useContext(CartContext);
    const productObject = productsArr.find(product => product.id === +params.productId);

    useEffect(() => {
        if (!isOverlayOpen){
            setIsViewActive(false);
        }
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
                <div className={style.wrapper}>
                    <ProductGallery product={productObject} setIsViewActive={setIsViewActive} setIsOverlayOpen={setIsOverlayOpen} selectImage={selectImage}/>
                    <div className={style.information}>
                        <MainBlock product={productObject}/>
                        <AdditionalBlock/>
                    </div>
                </div>
            </div>
            { isViewActive && isOverlayOpen && <ImageViewer images={productObject.imgBig} selectedImage={selectedImage}/>}
            <Banner/>
        </div>
    );
};

export default ProductPage;