import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LatestNewsSection = () => {
  const { slug } = useParams();
  const [newsData, setNewsData] = useState({
    title: 'Latest News',
    logo: '/storage/default-logo.png',
    items: [],
    loading: true
  });

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/schoolsandcolleges/${slug}/news`);
        const data = response.data;
        
        setNewsData({
          title: data.title || 'Latest News',
          logo: data.logo || '/storage/default-logo.png',
          items: data.items || [],
          loading: false
        });
      } catch (error) {
        console.error('Error fetching news data:', error);
        setNewsData({
          title: 'Latest News',
          logo: '/storage/default-logo.png',
          items: [
            { text: "Online Application", link: "https://admission.care.edu.in/", target: "_blank" },
            { text: "Latest News", link: "#", target: "_self" }
          ],
          loading: false
        });
      }
    };

    fetchNewsData();
  }, [slug]);

  if (newsData.loading) {
    return <></>;
  }

  if (newsData.items.length === 0) {
    return <></>;
  }

  return (
    <section className="latest_news_section py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 col-5 p-0 p-md-auto">
            <img 
              src={`${process.env.REACT_APP_API_URL}/public${newsData.logo}`}
              alt="College logo" 
              className="img-fluid"
            />
          </div>
          <div className="col-md-10 col-7 p-0 p-md-auto">
            <div className="trending-carousel-container d-flex align-items-center flex-column flex-md-row p-0 p-md-auto">
              <div className="trending-label me-3 d-block d-md-none">{newsData.title}</div>
              
              <div className="marquee-container">
                <div 
                  className="marquee-content"
                  onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
                  onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
                >
                  {newsData.items.map((item, index) => (
                    <span className="me-5" key={index}>
                      <a href={item.link} target={item.target || "_blank"} rel="noopener noreferrer">
                        {item.text}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="trending-label me-3 d-none d-md-block">{newsData.title}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;