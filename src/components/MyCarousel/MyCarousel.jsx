import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <Slider {...settings}>
            <div><img src="/img/fullimage1.jpg" alt="The Last of us" /></div>
            <div><img src="/img/fullimage2.jpg" alt="GTA V" /></div>
            <div><img src="/img/fullimage3.jpg" alt="Mirror Edge" /></div>
        </Slider>
    );
};

export default MyCarousel;