import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    text: "Chettinad University has provided me with a perfect blend of academic excellence and practical exposure.",
    img: "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/testimonial-01.png",
    name: "Name",
    role: "Student"
  },
  {
    text: "Chettinad University has provided me with a perfect blend of academic excellence and practical exposure.",
    img: "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/testimonial-01.png",
    name: "Name",
    role: "Student"
  },
  {
    text: "Chettinad University has provided me with a perfect blend of academic excellence and practical exposure.",
    img: "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/testimonial-03.png",
    name: "Name",
    role: "Student"
  },
  {
    text: "Chettinad University has provided me with a perfect blend of academic excellence and practical exposure.",
    img: "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/testimonial-01.png",
    name: "Name",
    role: "Student"
  },
  {
    text: "Chettinad University has provided me with a perfect blend of academic excellence and practical exposure.",
    img: "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/testimonial-03.png",
    name: "Name",
    role: "Student"
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const HomeTestimonial = () => {
  return (
    <div className="theme_carousel slick-theme home-testimonial">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="single-high-school-study-educamb-box" key={index}>
            <div className="img-box" style={{ borderTop: 'none' }}>
              <div className="inner">
                <p>{testimonial.text}</p>
                <div className="rating-icon">
                  {[...Array(5)].map((_, i) => (
                    <i className="fa fa-star" key={i}></i>
                  ))}
                </div>
              </div>
              <div className="author-info">
                <div className="thumb">
                  <img src={testimonial.img} alt="Testimonial" />
                </div>
                <div className="info">
                  <h5 style={{ marginBottom: 0 }}>{testimonial.name}</h5>
                  <span className="subtitle">{testimonial.role}</span>
                </div>
              </div>
              <a className="btn-one btn-smaller mt-3" href="#" style={{ cursor: 'pointer' }}>
                <span className="txt">View More</span>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeTestimonial;