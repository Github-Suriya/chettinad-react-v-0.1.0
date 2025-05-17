import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const FindOutMoreSection = () => {
  const { slug } = useParams();
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/schoolsandcolleges/${slug}/find-out-more`);
        setSectionData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const imagesCount = sectionData?.items?.length || 0;
  const imagesCountMin = 3;
  const imagesCountMax = 6;
  const imagesCountToShow = Math.max(imagesCountMin, Math.min(imagesCount, imagesCountMax));

  // Default slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: imagesCountToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
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

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-center py-5 text-danger">Error: {error}</div>;
  if (!sectionData || !sectionData.items || sectionData.items.length === 0) return null;

  return (
    <section className="find_out_more_section pt_80 pb_80" id="more">
      <div className="container position-relative">
        <div className="row pb-5">
          <div className="col-12 wow fadeIn" data-wow-duration="2s">
            <h4 className="theme-heading">{sectionData.title}</h4>
          </div>
        </div>
        <Slider {...settings} className="find-out-carousel">
          {sectionData.items.map((card, index) => (
            <div className="item" key={index}>
              <div className="find-card">
                <div className="card-image-wrapper">
                  <img 
                    src={card.image ? `${process.env.REACT_APP_API_URL}/public${card.image}` : '/default-images/find-out-more.jpg'} 
                    alt={card.title}
                    className="img-fluid"
                  />
                </div>
                <div className="actions">
                  <a 
                    className="read" 
                    href={card.link} 
                    target={card.open_in_new_tab ? '_blank' : '_self'}
                    rel={card.open_in_new_tab ? 'noopener noreferrer' : ''}
                  >
                    {card.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FindOutMoreSection;