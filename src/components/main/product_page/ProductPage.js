import React, {useContext, useEffect, useState} from 'react';
import style from './productPage.module.css';
import {HeaderContext, OverlayContext} from "../../../utils/context";
import Banner from "../banner/Banner";
import BreadCrumbs from "../bread_crumbs/BreadCrumbs";
import {productsArr} from "../../../utils/productsConst";
import {useNavigate, useParams} from "react-router-dom";
import ProductGallery from "./product_gallery/ProductGallery";
import MainBlock from "./main_block/MainBlock";
import AdditionalBlock from "./additional_block/AdditionalBlock";
import ImageViewer from "./image_viewer/ImageViewer";
import ProductsGallery from "../products_gallery/ProductsGallery";

const ProductPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [selectedImage, selectImage] = useState(0);
    const {isImageViewActive, setIsImageViewActive, isOverlayOpen, setIsOverlayOpen} = useContext(OverlayContext);
    const {setHeaderStyle, headerStyle} = useContext(HeaderContext);
    const productObject = productsArr.find(product => product.id === +params.productId);

    useEffect(() => {
        if (!isOverlayOpen){
            setIsImageViewActive(false);
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
                    <ProductGallery product={productObject} setIsViewActive={setIsImageViewActive} setIsOverlayOpen={setIsOverlayOpen} selectImage={selectImage}/>
                    <div className={style.information}>
                        <MainBlock product={productObject}/>
                        <AdditionalBlock/>
                    </div>
                </div>
                <h2>Также могут понравиться</h2>
                <ProductsGallery sorted={`type=${productObject.type}`} count={4} totalCount={8}/>
            </div>
            { isImageViewActive && isOverlayOpen && <ImageViewer images={productObject.imgBig} selectedImage={selectedImage}/>}
            <Banner/>
        </div>
    );
};

export default ProductPage;