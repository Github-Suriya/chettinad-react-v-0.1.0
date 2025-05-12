import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DynamicHomeTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/testimonials`);
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: testimonials.length >= 3 ? 3 : testimonials.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: testimonials.length >= 2 ? 2 : testimonials.length
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

  if (loading) return <div>Loading testimonials...</div>;
  if (error) return <div>Error: {error}</div>;
  if (testimonials.length === 0) return <div>No testimonials available</div>;

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
                  <img src={`${process.env.REACT_APP_API_URL}/public/storage/${testimonial.image_path}`} alt={testimonial.name} style={{width: '50px', height: '50px', objectFit: 'cover'}} />
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

export default DynamicHomeTestimonial;