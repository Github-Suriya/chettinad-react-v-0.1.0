import React from 'react';

const LatestNewsSection = () => {
  const newsItems = [
    { text: "Online Application", link: "https://admission.care.edu.in/" },
    { text: "Latest News", link: "#" },
    { text: "News Options Demo Two", link: "#" },
    { text: "News Options Demo Three", link: "#" }
  ];

  return (
    <section className="latest_news_section py-3">
      {/* Hidden container with owl-carousel (commented out as it was d-none in original) */}
      <div className="container d-none">
        <div className="trending-carousel-container">
          <div className="trending-label">Latest News</div>
          <div className="owl-carousel trending-carousel">
            {newsItems.map((item, index) => (
              <div className="item" key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visible marquee section */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2 col-5 p-0 p-md-auto">
            <img 
              src="/chettinad-react/assets/images/college-of-nursing-logo.png" 
              alt="course-logo" 
              className="img-fluid" 
            />
          </div>
          <div className="col-md-10 col-7 p-0 p-md-auto">
            <div className="trending-carousel-container d-flex align-items-center flex-column flex-md-row p-0 p-md-auto">
              <div className="trending-label me-3 d-block d-md-none">Latest News</div>
              
              {/* React implementation of marquee */}
              <div className="marquee-container">
                <div 
                  className="marquee-content"
                  onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
                  onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
                >
                  {newsItems.map((item, index) => (
                    <span className="me-5" key={index}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.text}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="trending-label me-3 d-none d-md-block">Latest News</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;