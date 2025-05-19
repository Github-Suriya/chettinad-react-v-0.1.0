import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import api from '../../api';

const DynamicImgCarousel = ({ groupId = null }) => {
  const [carouselData, setCarouselData] = useState({
    items: [],
    settings: {
      autoplay: true,
      slidesToShow: 3,
      speed: 300,
      infinite: true
    },
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const endpoint = groupId 
          ? `${process.env.REACT_APP_API_URL}/api/img-carousel-items/${groupId}`
          : `${process.env.REACT_APP_API_URL}/api/img-carousel-items`;
        
        const response = await api.get(endpoint);
        
        if (response.data.status) {
          setCarouselData({
            items: response.data.data.items || [],
            settings: {
              autoplay: response.data.data.settings?.autoplay ?? true,
              slidesToShow: response.data.data.settings?.slides_to_show ?? 3,
              speed: response.data.data.settings?.speed ?? 300,
              infinite: response.data.data.settings?.infinite ?? true
            },
            loading: false,
            error: null
          });
        } else {
          throw new Error(response.data.message || 'Failed to load carousel data');
        }
      } catch (err) {
        setCarouselData(prev => ({
          ...prev,
          error: err.message,
          loading: false,
          items: getFallbackItems(),
          settings: getFallbackSettings()
        }));
      }
    };

    fetchCarouselData();
  }, [groupId]);

  const getFallbackItems = () => [
    {
      id: 1,
      image_path: "/chettinad-react/assets/images/high-school-study-educamb-1.png",
      alt_text: "High School Study",
      link: "#",
      order: 1,
      is_active: true
    },
    // Add more fallback items as needed
  ];

  const getFallbackSettings = () => ({
    autoplay: true,
    slidesToShow: 3,
    speed: 300,
    infinite: true
  });

  if (carouselData.loading) return <div>Loading carousel...</div>;
  if (carouselData.error) return <div>Error loading carousel: {carouselData.error}</div>;

  const slidesToShow = Math.min(
    carouselData.items.length,
    carouselData.settings.slidesToShow,
    6 // Maximum slides to show
  );

  const settings = {
    dots: true,
    infinite: carouselData.settings.infinite,
    speed: carouselData.settings.speed,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: carouselData.settings.autoplay,
    autoplaySpeed: 2500,
    nav: false,
    lazyLoad: "ondemand",
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: Math.min(4, slidesToShow) },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: Math.min(3, slidesToShow) },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: Math.min(2, slidesToShow) },
      },
    ],
  };

  return (
    <div className="theme_carousel highschool-carousel">
      {carouselData.items.length > 0 ? (
        <Slider {...settings}>
          {carouselData.items.map((item) => (
            <div key={item.id} className="single-high-school-study-educamb-box">
              <div className="img-box">
                <a href={item.link || '#'}>
                  <div className="inner">
                    <img 
                      src={item.image_path} 
                      alt={item.alt_text} 
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "/chettinad-react/assets/images/placeholder.png";
                      }} 
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="no-items-message">No items available in this carousel</div>
      )}
    </div>
  );
};

export default DynamicImgCarousel;