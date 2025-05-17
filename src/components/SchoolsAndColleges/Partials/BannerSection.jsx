import './BannerSection.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const BannerSection = () => {
  const { slug } = useParams();
  const [pageConfig, setPageConfig] = useState({
    heading: '',
    firstBtn: '',
    firstLink: '',
    secondBtn: '',
    secondLink: '',
    bannerImages: []
  });
  const [loading, setLoading] = useState(true);

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
    const fetchCollegeData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/schoolsandcolleges/${slug}`);
        const data = response.data;
        
        // Transform the API data to match your component's expected format
        const bannerData = data.banner || {};
        const buttons = bannerData.buttons || [];
        
        setPageConfig({
          heading: data.name || bannerData.heading || 'Chettinad College',
          firstBtn: buttons[0]?.text || '<i className="fa fa-globe"></i> Apply Online',
          firstLink: buttons[0]?.link || 'https://admission.care.edu.in/',
          secondBtn: buttons[1]?.text || '<i className="fa fa-phone"></i> For Admission',
          secondLink: buttons[1]?.link || 'tel:8447892022',
          bannerImages: bannerData.images || []
        });
      } catch (error) {
        console.error('Error fetching college data:', error);
        // Set fallback data
        setPageConfig({
          heading: 'Chettinad College',
          firstBtn: '<i className="fa fa-globe"></i> Apply Online',
          firstLink: 'https://admission.care.edu.in/',
          secondBtn: '<i className="fa fa-phone"></i> For Admission',
          secondLink: 'tel:8447892022',
          bannerImages: ['/storage/default-banner.jpg']
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCollegeData();
  }, [slug]);

  if (loading) {
    return <></>;
  }

  if (pageConfig.bannerImages.length === 0) {
    return <></>;
  }

  return (
    <section className="breadcrump_section">
      <Slider {...sliderSettings} className="banner-slider">
        {pageConfig.bannerImages.map((img, index) => (
          <div key={index} className="banner-slide">
            <img 
              src={process.env.REACT_APP_API_URL + '/public' + img} 
              alt={`Banner ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
      
      <div className="breadcrump-wrapper">
        <h4 className="breadcrump-heading">{pageConfig.heading}</h4>
        
        {(pageConfig.firstLink && pageConfig.secondLink) && (
          <>
            <a 
              href={pageConfig.firstLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn apply-new-btn" 
              dangerouslySetInnerHTML={{ __html: pageConfig.firstBtn }} 
            />
            <a 
              href={pageConfig.secondLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn ms-3 apply-new-btn" 
              dangerouslySetInnerHTML={{ __html: pageConfig.secondBtn }} 
            />
          </>
        )}
      </div>
    </section>
  );
};

export default BannerSection;