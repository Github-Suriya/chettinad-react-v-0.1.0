import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HappeningsAtChettinad = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 0,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="theme_carousel highschool-carousel">
      <Slider {...settings}>
        <div className="single-research-box">
          <div className="img-holder">
            <img
              src="https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/bg-image.jpg"
              alt="Medical Education"
            />
          </div>
          <div className="overlay-content">
            <div className="inner-title">
              <h3><a href="#">Medical Education</a></h3>
            </div>
            <div className="text">
              <p>
                With Chettinad Hospital and Research Institute being South India’s preferred destination for medical education, our focus is on providing learning through state-of-the-art facilities for aspiring medical students and medical researchers.
              </p>
            </div>
          </div>
        </div>

        <div className="single-research-box">
          <div className="img-holder">
            <img
              src="https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/college.png"
              alt="Academics"
            />
          </div>
          <div className="overlay-content">
            <div className="inner-title">
              <h3><a href="#">Academics</a></h3>
            </div>
            <div className="text">
              <p>
                From Architecture and Physiotherapy to Law and Nursing, our range of career-oriented academic programs provide quality education. We prepare students to face real-life challenges and coach them for their respective careers.
              </p>
            </div>
          </div>
        </div>

        <div className="single-research-box">
          <div className="img-holder">
            <img
              src="https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/doctor.jpg"
              alt="Medical Center"
            />
          </div>
          <div className="overlay-content">
            <div className="inner-title">
              <h3><a href="#">Medical Center</a></h3>
            </div>
            <div className="text">
              <p>
                With our expertise in healthcare, our medical specialties focus on providing the best clinical care to society at an affordable cost – all with world-class equipment and facilities, and the finest doctors in the country.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HappeningsAtChettinad;