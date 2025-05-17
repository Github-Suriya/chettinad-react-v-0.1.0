import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const NewsEventsSection = () => {
  const { slug } = useParams();
  const verticalSwiperRef = useRef(null);
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/schoolsandcolleges/${slug}/news-events`);
        setSectionData(response.data);
        console.log('News and Events Data:', response.data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (verticalSwiperRef.current) {
        verticalSwiperRef.current.slickPause();
      }
    };

    const handleMouseLeave = () => {
      if (verticalSwiperRef.current) {
        verticalSwiperRef.current.slickPlay();
      }
    };

    const swiperContainer = document.querySelector('.myVerticalSwiper');
    if (swiperContainer) {
      swiperContainer.addEventListener('mouseenter', handleMouseEnter);
      swiperContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (swiperContainer) {
        swiperContainer.removeEventListener('mouseenter', handleMouseEnter);
        swiperContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const mainCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
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

  const verticalCarouselSettings = {
    vertical: true,
    verticalSwiping: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false
  };

  if (loading) return <></>;
  if (error) return <div className="text-center py-5 text-danger">Error: {error}</div>;
  if (!sectionData) return null;

  if (sectionData.items.news.length === 0 && sectionData.items.events.length === 0) {
    return <></>;
  }

  const handleNewsClick = (newsItem) => {
    setSelectedNews(newsItem);
  };

  return (
    <section className="shop-area pt_80 pb_80 position-relative" id="news">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12">
            <h4 className="theme-heading">{sectionData.title}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-7 mb-3">
            <Slider {...mainCarouselSettings} className="news-events-carousel">
              {sectionData.items.news.map((news, index) => {
                const dateParts = news.date.split(' ');
                const day = dateParts[0];
                const monthYear = dateParts.slice(1).join(' ');
                
                return (
                  <div key={news.id} className="item px-2">
                    <div 
                      className={`event-item mb-30 hover-zoomin ${index % 2 === 0 ? 'odd-bg' : 'even-bg'}`}
                      onClick={() => handleNewsClick(news)}
                      data-bs-toggle="modal" 
                      data-bs-target="#news-events-modal"
                    >
                      <div className="thumb">
                        <img 
                          src={news.image.startsWith('http') ? `${process.env.REACT_APP_API_URL}/public${news.image}` : `${process.env.REACT_APP_API_URL}/public${news.image}`} 
                          alt="news" 
                          className="img-fluid"
                        />
                      </div>
                      <div className="event-content">
                        <div className="date">
                            <strong>{news.display_date.split(' ')[0]}</strong> 
                            {news.display_date.split(' ').slice(1).join(' ')}
                        </div>
                        <h3>{news.title}</h3>
                        <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                        <div className="time"><strong>Click here</strong></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="col-md-5 mb-3">
            <div className="myVerticalSwiper">
              <Slider {...verticalCarouselSettings} ref={verticalSwiperRef}>
                {sectionData.items.events.map((event, index) => {
                  const dateParts = event.date.split(' ');
                  const day = dateParts[0];
                  const monthYear = dateParts.slice(1).join(' ');
                  
                  return (
                    <div key={event.id} className="swiper-slide">
                      <div className={`single-event-box-style1 ${index % 2 === 1 ? 'single-event-box-style1--style2' : ''}`}>
                        <div className="date-box">
                            <h2>{event.display_date.split(' ')[0]}</h2>
                            <p>{event.display_date.split(' ').slice(1).join(' ')}</p>
                        </div>
                        <div className="title-box">
                          <h3><a href="javascript:void(0);">{event.title}</a></h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedNews && (
        <div className="modal fade" id="news-events-modal" tabIndex="-1" aria-labelledby="news-events-modalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="news-events-modalLabel">{selectedNews.title}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="event-item mb-30 hover-zoomin">
                      <div className="thumb">
                        <img 
                          src={selectedNews.image.startsWith('http') ? `${process.env.REACT_APP_API_URL}/public${selectedNews.image}` : `${process.env.REACT_APP_API_URL}/public${selectedNews.image}`} 
                          alt="news" 
                          className="img-fluid"
                        />
                      </div>
                      <div className="">
                        <div className="date">
                            <strong>{selectedNews.display_date.split(' ')[0]}</strong> 
                            {selectedNews.display_date.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="event-item mb-30 hover-zoomin">
                      <div className="event-content">
                        <h3>{selectedNews.title}</h3>
                        <p>{selectedNews.full_description}</p>
                        <div className="time"><strong>Event Details</strong></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsEventsSection;