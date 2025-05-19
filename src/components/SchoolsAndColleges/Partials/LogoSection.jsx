import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoSection = () => {
  const { slug } = useParams();
  const [logos, setLogos] = useState([]);
  const [sliderSettings, setSliderSettings] = useState({
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
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogoData = async () => {
      try {
        const response = await api.get(`${process.env.REACT_APP_API_URL}/api/schoolsandcolleges/${slug}/logos`);
        const data = response.data;

        setLogos(data.logos || []);

        if (data.settings) {
          // Convert string values to proper types
          const {
            dots,
            speed,
            arrows,
            autoplay,
            infinite,
            slidesToShow,
            autoplaySpeed,
            slidesToScroll,
            responsive
          } = data.settings;

          const convertedSettings = {
            dots: dots === '1',
            speed: Number(speed),
            arrows: arrows === '1',
            autoplay: autoplay === '1',
            infinite: infinite === '1',
            slidesToShow: Number(slidesToShow),
            autoplaySpeed: Number(autoplaySpeed),
            slidesToScroll: Number(slidesToScroll),
            responsive: Array.isArray(responsive)
              ? responsive.map(r => ({
                  breakpoint: Number(r.breakpoint),
                  settings: {
                    slidesToShow: Number(r.settings.slidesToShow),
                    slidesToScroll: Number(r.settings.slidesToScroll)
                  }
                }))
              : []
          };

          setSliderSettings(prev => ({
            ...prev,
            ...convertedSettings
          }));
        }

        console.log('Slider settings:', sliderSettings);

      } catch (error) {
        console.error('Error fetching logo data:', error);
        setLogos([
          {
            image: "/storage/default-logo-1.png",
            alt: "Default Logo 1",
            link: "#"
          },
          {
            image: "/storage/default-logo-2.png",
            alt: "Default Logo 2",
            link: "#"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchLogoData();
  }, [slug]);

  if (loading) {
    return <></>;
  }

  if (logos.length === 0) {
    return <></>;
  }

  return (
    <section className="logos_section py-4">
      <div className="container">
        <div className="row">
          <Slider {...sliderSettings} className="logos-carousel">
            {logos.map((logo, index) => (
              <div className="item" key={index}>
                <a href={logo.link} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={`${process.env.REACT_APP_API_URL}/public${logo.image}`}
                    alt={logo.alt} 
                    className="img-fluid"
                  />
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