import React, {useEffect, useState} from 'react';
import style from './slider.module.css';
import {slideList} from "../../../../utils/constants";
import angleLeft from "../../../../images/angle-left.svg";
import angleRight from "../../../../images/angle-right.svg";
import Slide from "./slide/Slide";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    let slides = document.getElementsByClassName("mySlides");

    useEffect(() => {
        showSlides();
    }, [slideIndex])

    function plusSlides(n) {
        let tmp = slideIndex + n;
        if (tmp > slides.length) {
            setSlideIndex(1)
        } else if (tmp < 1) {
            setSlideIndex(slides.length)
        } else
            setSlideIndex(tmp);
    }

    function showSlides() {
        for (let item of slides) {
            item.style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    return (
        <div className={style.slider}>
            {slideList.map((slide, index) => <Slide title={slide.title} subtitle={slide.subtitle} image={slide.image}
                                                 productId={slide.productId} key={index}/>)}
            <img src={angleLeft} alt="angleLeft" className={style.prev} onClick={() => plusSlides(-1)}/>
            <img src={angleRight} alt="angleRight" className={style.next} onClick={() => plusSlides(1)}/>
        </div>
    );

};

export default Slider;