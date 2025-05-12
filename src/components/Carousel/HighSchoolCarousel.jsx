import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HighSchoolCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nav: false,
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const items = [
    "/chettinad-react/assets/images/high-school-study-educamb-1.png",
    "/chettinad-react/assets/images/high-school-study-educamb-1.png",
    "/chettinad-react/assets/images/high-school-study-educamb-1.png",
    "/chettinad-react/assets/images/high-school-study-educamb-1.png",
    "/chettinad-react/assets/images/high-school-study-educamb-1.png",
    "/chettinad-react/assets/images/high-school-study-educamb-1.png",
    "/chettinad-react/assets/images/high-school-study-educamb-1.png",
  ];

  return (
    <div className="theme_carousel highschool-carousel">
      <Slider {...settings}>
        {items.map((imgSrc, index) => (
          <div key={index} className="single-high-school-study-educamb-box">
            <div className="img-box">
              <div className="inner">
                <img src={imgSrc} alt={`high-school-study-educamb-${index + 1}`} />
                <div className="btn-box">
                  <a href="#">
                    <span className="icon-right-arrow-1"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HighSchoolCarousel;