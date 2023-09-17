import React from 'react';
import style from './productGallery.module.css';

const ProductGallery = ({product, setIsOverlayOpen, setIsViewActive, selectImage}) => {
    const clickHandler = (e) => {
        selectImage(e.target.dataset.index);
        setIsViewActive(true);
        setIsOverlayOpen(true);
    }
    return (
        <div className={style.productGallery}>
            {product.imgSmall.map((item, index) => (
                <div key={index + ' image'} style={{backgroundImage: `url(${item})`}} onClick={clickHandler} data-index={index}></div>
            ))}
        </div>
    );
};

export default ProductGallery;