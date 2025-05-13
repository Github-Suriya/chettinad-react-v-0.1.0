import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoSection = () => {
  const logos = [
    {
      image: "/chettinad-react/assets/images/nursing-bottom-logo-1.jpg",
      alt: "Tamilnadu Nurses and Midwives Council",
      link: "https://care.edu.in/tamilnadu-nurses-and-midwives-council/"
    },
    {
      image: "/chettinad-react/assets/images/nursing-bottom-logo-2.png",
      alt: "Indian Nursing Council",
      link: "https://care.edu.in/indian-nursing-council/"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="logos_section py-4">
      <div className="container">
        <div className="row">
          <Slider {...settings} className="logos-carousel">
            {logos.map((logo, index) => (
              <div className="item" key={index}>
                <a href={logo.link} target="_blank" rel="noopener noreferrer">
                  <img src={logo.image} alt={logo.alt} className="img-fluid" />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;