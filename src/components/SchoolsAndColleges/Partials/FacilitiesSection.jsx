import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FacilitiesSection = () => {
  const { slug } = useParams();
  const [facilitiesData, setFacilitiesData] = useState({
    title: 'Facilities',
    items: [],
    loading: true
  });

  // Fixed slider settings (not editable from admin)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true
  };

  useEffect(() => {
    const fetchFacilitiesData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/schoolsandcolleges/${slug}/facilities`);
        const data = response.data;
        
        setFacilitiesData({
          title: data.title || 'Facilities',
          items: data.items || [],
          loading: false
        });
      } catch (error) {
        console.error('Error fetching facilities data:', error);
        setFacilitiesData({
          title: 'Facilities',
          items: [],
          loading: false
        });
      }
    };

    fetchFacilitiesData();
  }, [slug]);

  if (facilitiesData.loading) {
    return <></>;
  }

  if (facilitiesData.items.length === 0) {
    return <></>;
  }

  return (
    <section className="highlighted_news_section" id="facilities">
      <div className="container-fluid px-0">
        <h4 className="theme-heading facility_heading">{facilitiesData.title}</h4>
        {facilitiesData.items.length > 0 ? (
          <Slider {...settings} className="highlighted_news_carousel">
            {facilitiesData.items.map((facility, index) => (
              <div className="news_slide position-relative px-5" key={index}>
                <div className="news_image wow fadeIn">
                  {facility.video_link ? (
                    <a href={facility.video_link} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={`${process.env.REACT_APP_API_URL}/public${facility.image}`}
                        alt={facility.title}
                      />
                    </a>
                  ) : (
                    <img 
                      src={`${process.env.REACT_APP_API_URL}/public${facility.image}`}
                      alt={facility.title}
                    />
                  )}
                </div>
                <div className="news_content_card">
                  <h2 className="news_title wow fadeIn">{facility.title}</h2>
                  <p className="news_excerpt wow fadeIn" data-wow-delay="0.2s">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center py-4">No facilities data available</div>
        )}
      </div>
    </section>
  );
};

export default FacilitiesSection;