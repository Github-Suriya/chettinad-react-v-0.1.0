import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpcomingEventsHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const images = [
    "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/resources/sp.png",
    "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/resources/lib.png",
    "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/resources/student1.png",
    "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/resources/college.png"
  ];

  return (
    <div className="theme_carousel highschool-carousel">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div className="single-high-school-study-educamb-box" key={index}>
            <div className="img-box">
              <div className="inner">
                <img src={src} alt={`slide-${index}`} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UpcomingEventsHome;