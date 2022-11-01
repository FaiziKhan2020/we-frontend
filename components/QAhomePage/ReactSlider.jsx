import React from 'react';
import Slider from 'react-slick';
import style from './style.module.css';
export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div className={style.bgImg}>1</div>
            <div className={style.bgImg}>2</div>
            <div className={style.bgImg}>3</div>
        </Slider>
    );
}
