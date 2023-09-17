import React, {useState} from 'react';
import angleLeft from "../../../../images/angle-left.svg";
import angleRight from "../../../../images/angle-right.svg";
import style from './imageViewer.module.css';

const ImageViewer = ({images, selectedImage}) => {
    const [imageIndex, setImageIndex] = useState(+selectedImage);

    function plusImage(n) {
        let tmp = imageIndex + n;
        if (tmp > images.length - 1) {
            setImageIndex(0)
        } else if (tmp < 0) {
            setImageIndex(images.length - 1)
        } else
            setImageIndex(tmp);
    }

    return (
        <div className={style.imageViewer}>
            <img src={angleLeft} alt="angleLeft" className={style.prev} onClick={() => plusImage(-1)}/>
            <img className={style.image} src={images[imageIndex]} alt={images[imageIndex]}/>
            <img src={angleRight} alt="angleRight" className={style.next} onClick={() => plusImage(1)}/>
        </div>
    );

};

export default ImageViewer;