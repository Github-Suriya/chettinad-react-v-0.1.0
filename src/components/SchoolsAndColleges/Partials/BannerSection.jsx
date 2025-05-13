import './BannerSection.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSection = () => {
  const location = useLocation();
  const [pageConfig, setPageConfig] = useState({
    heading: 'Chettinad College of Nursing',
    firstBtn: '<i class="fa fa-globe"></i> Apply Online',
    firstLink: 'https://admission.care.edu.in/',
    secondBtn: '<i class="fa fa-phone"></i> For Admission',
    secondLink: 'tel:8447892022',
    bannerImages: [
      '/chettinad-react/assets/images/nursing/nursing-new-01.webp',
      '/chettinad-react/assets/images/nursing/nursing-new-02.webp',
      '/chettinad-react/assets/images/nursing/nursing-new-03.webp',
      '/chettinad-react/assets/images/nursing/nursing-new-04.webp',
      '/chettinad-react/assets/images/nursing/nursing-new-05.webp',
      '/chettinad-react/assets/images/nursing/nursing-new-06.webp',
      '/chettinad-react/assets/images/nursing/nursing-new-07.webp',
    ]
  });

  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  useEffect(() => {
    const pathname = location.pathname;
    const pathParts = pathname.split('/').filter(part => part !== '');
    const lastTwo = pathParts.slice(-2).join('/');
    
    let config = {
      heading: 'Chettinad College of Nursing',
      firstBtn: '<i class="fa fa-globe"></i> Apply Online',
      firstLink: 'https://admission.care.edu.in/',
      secondBtn: '<i class="fa fa-phone"></i> For Admission',
      secondLink: 'tel:8447892022',
      bannerImages: [
        '/chettinad-react/assets/images/nursing/nursing-new-01.webp',
        '/chettinad-react/assets/images/nursing/nursing-new-02.webp',
        '/chettinad-react/assets/images/nursing/nursing-new-03.webp',
        '/chettinad-react/assets/images/nursing/nursing-new-04.webp',
        '/chettinad-react/assets/images/nursing/nursing-new-05.webp',
        '/chettinad-react/assets/images/nursing/nursing-new-06.webp',
        '/chettinad-react/assets/images/nursing/nursing-new-07.webp',
      ]
    };

    switch (lastTwo) {
      case 'alumini/about':
        config = {
          heading: 'ALASCA (Alumni Association of CARE)',
          firstBtn: 'Register Now',
          firstLink: '/chettinad-react/alumini/registration',
          secondBtn: 'Feedback Form',
          secondLink: '/chettinad-react/alumini/feedback',
          bannerImages: [
            '/chettinad-react/assets/images/graduation-new.webp',
            '/chettinad-react/assets/images/graduation-new2.png',
          ]
        };
        break;
      case 'pharma_science/about':
      case 'pharma_science/student-life':
        config = {
          ...config,
          heading: 'School of Pharmaceutical Sciences',
          bannerImages: ['/chettinad-react/assets/images/pharma-banner.jpg']
        };
        break;
      case 'physiotherapy/about':
      case 'physiotherapy/student-life':
        config = {
          ...config,
          heading: 'School of Physiotherapy',
          bannerImages: ['/chettinad-react/assets/images/pysio-banner.jpg']
        };
        break;
      case 'about-us/library':
      case 'about-us/policy':
      case 'about-us/collection':
      case 'about-us/e-resources':
      case 'about-us/open_access':
        config = {
          ...config,
          heading: 'Central Library',
          bannerImages: ['/chettinad-react/assets/images/lib-ban.jpg']
        };
        break;
      default:
        break;
    }

    setPageConfig(config);
  }, [location.pathname]);

  const shouldShowButtons = ![
    'about-us/library',
    'about-us/policy',
    'about-us/collection',
    'about-us/e-resources',
    'about-us/open_access',
    'alumini/about'
  ].some(path => location.pathname.includes(path));

  const shouldShowHoursCard = [
    'about-us/library',
    'about-us/policy'
  ].some(path => location.pathname.includes(path));

  return (
    <section className="breadcrump_section">
      <Slider {...sliderSettings} className="banner-slider">
        {pageConfig.bannerImages.map((img, index) => (
          <div key={index} className="banner-slide">
            <img src={img} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>
      
      <div className="breadcrump-wrapper">
        <h4 className="breadcrump-heading">{pageConfig.heading}</h4>
        
        {shouldShowButtons && (
          <>
            <a href={pageConfig.firstLink} target="_blank" rel="noopener noreferrer" className="btn apply-new-btn" dangerouslySetInnerHTML={{ __html: pageConfig.firstBtn }} />
            <a href={pageConfig.secondLink} target="_blank" rel="noopener noreferrer" className="btn ms-3 apply-new-btn" dangerouslySetInnerHTML={{ __html: pageConfig.secondBtn }} />
          </>
        )}
      </div>

      {shouldShowHoursCard && (
        <div className="card hours-card animate__animated animate__fadeInUp position-absolute">
          <div className="card-header">
            <i className="fa fa-clock-o me-2"></i> Working Hours
          </div>
          <div className="card-body p-0">
            <div className="hours-item animate__animated animate__fadeIn animate__delay-1s">
              <div className="hours-icon">
                <i className="fa fa-calendar"></i>
              </div>
              <div className="hours-content">
                <div className="hours-day">All working days</div>
                <div className="hours-time">8:00 AM to 10:00 PM</div>
              </div>
            </div>
            
            <div className="hours-item animate__animated animate__fadeIn animate__delay-2s">
              <div className="hours-icon">
                <i className="fa fa-cog"></i>
              </div>
              <div className="hours-content">
                <div className="hours-day">Sunday</div>
                <div className="hours-time">9:00 AM to 4:00 PM</div>
              </div>
            </div>
            
            <div className="hours-item closed-item animate__animated animate__fadeIn animate__delay-3s">
              <div className="hours-icon">
                <i className="fa fa-calendar-times-o"></i>
              </div>
              <div className="hours-content">
                <div className="hours-day">Public & Institution holidays</div>
                <div className="hours-time">Closed</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BannerSection;