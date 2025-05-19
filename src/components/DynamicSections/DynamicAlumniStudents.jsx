import React, { useState, useEffect } from 'react';
import api from '../../api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DynamicAlumniStudents = () => {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Slick carousel settings for mobile
  const mobileCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await api.get(`${process.env.REACT_APP_API_URL}/api/alumni-students`);
        if (response.data.status) {
          setAlumni(response.data.data || []);
        } else {
          setError(response.data.message || 'Failed to load data');
          setAlumni([]);
        }
      } catch (err) {
        setError(err.message);
        setAlumni([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  if (loading) {
    return (
      <section className="alumni-section pt-5">
        <div className="container">
          <div className="row">
            <div className="sec-title text-center">
              <h2>Our Notable Alumni</h2>
            </div>
            <div className="col-md-12 text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="alumni-section pt-5">
        <div className="container">
          <div className="row">
            <div className="sec-title text-center">
              <h2>Our Notable Alumni</h2>
            </div>
            <div className="col-md-12 text-center text-danger">
              {error}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (alumni.length === 0) {
    return (
        <></>
    );
  }

  return (
    <section className="alumni-section pt-5">
      <div className="container">
        <div className="row">
          <div className="sec-title text-center">
            <h2>Our Notable Alumni</h2>
          </div>
          
          {/* Desktop View - Grid Layout */}
          <div className="col-md-12 desktop-view">
            <div className="row mb-3 justify-content-center">
              {alumni.slice(0, 5).map((alumnus) => (
                <div key={alumnus.id} className="col-md-2">
                  <div className="single-img">
                    <img src={alumnus.image_url} alt={alumnus.name} className="image" style={{ width: '350px', height: '200px', objectFit: 'cover' }} />
                    <div className="img-overlay">
                      <div className="signle-text">
                        {alumnus.name}<br /><span>{alumnus.city}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {alumni.length > 5 && (
              <div className="row justify-content-center">
                {alumni.slice(5, 10).map((alumnus) => (
                  <div key={alumnus.id} className="col-md-2">
                    <div className="single-img">
                      <img src={alumnus.image_url} alt={alumnus.name} className="image"  style={{ width: '350px', height: '200px', objectFit: 'cover' }} />
                      <div className="img-overlay">
                        <div className="signle-text">
                          {alumnus.name}<br /><span>{alumnus.city}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Mobile View - React Slick Carousel */}
          <div className="col-md-12 mobile-view">
            <Slider {...mobileCarouselSettings}>
              {alumni.map((alumnus) => (
                <div key={alumnus.id} className="px-2"> {/* Add padding between slides */}
                  <div className="single-img">
                    <img 
                      src={alumnus.image_url} 
                      alt={alumnus.name} 
                      className="image w-100" 
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="img-overlay">
                      <div className="signle-text">
                        {alumnus.name}<br /><span>{alumnus.city}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicAlumniStudents;