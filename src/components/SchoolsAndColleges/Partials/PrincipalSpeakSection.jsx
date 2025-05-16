import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PrincipalSpeakSection = () => {
  const { slug } = useParams();
  const [showMore, setShowMore] = useState(false);
  const [principalData, setPrincipalData] = useState({
    name: 'Loading...',
    designation: 'Principal',
    image: '/storage/default-principal.png',
    content: 'Loading principal message...',
    extendedContent: '',
    stats: [],
    position: 'left' // 'left' or 'right'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrincipalData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/schoolsandcolleges/${slug}/principal`);
        const data = response.data;
        
        setPrincipalData({
          name: data.name || 'Principal Name',
          designation: data.designation || 'Principal',
          image: data.image || '/storage/default-principal.png',
          content: data.content || 'Principal message content',
          extendedContent: data.extended_content || '',
          stats: data.stats || [],
          position: data.position || 'left'
        });
      } catch (error) {
        console.error('Error fetching principal data:', error);
        setPrincipalData({
          name: 'Dr. Subbulakshmi S',
          designation: 'Principal',
          image: '/storage/default-principal.png',
          content: 'Welcome to our college...',
          extendedContent: '',
          stats: [
            { value: 1000, suffix: "+", title: "Graduates" },
            { title: "INC Approved" },
            { value: 3, suffix: "+", title: "Courses" },
            { value: 5, suffix: "+", title: "Specialisation" }
          ],
          position: 'left'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPrincipalData();
  }, [slug]);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  if (loading) {
    return <div className="text-center py-5">Loading principal section...</div>;
  }

  // Function to safely render HTML content
  const createMarkup = (html) => {
    return { __html: html || '' };
  };

  return (
    <section className="fact_section pt_80 pb_80" id="principal">
      <div className="container-fluid">
        <div className="row justify-content-evenly">
          {/* Principal Column - position changes based on data */}
          <div className={`col-lg-5 order-lg-${principalData.position === 'left' ? '1' : '2'}`}>
            <div className="fact-left">
              <div className="fact-widget-container">
                <div className="fact-image-box-wrapper">
                  <figure className="fact-image-box-img">
                    <img 
                      className="img-fluid" 
                      loading="lazy" 
                      src={`${process.env.REACT_APP_API_URL}/public${principalData.image}`}
                      alt={principalData.name}
                    />
                  </figure>
                  <div className="fact-image-box-content">
                    <h3 className="fact-image-box-title">{principalData.name}</h3>
                    <p className="fact-image-box-description">{principalData.designation}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-none d-lg-flex">
              <div className="col-6">
                <div className="fact-detail-left">
                  {principalData.stats.slice(0, 2).map((stat, index) => (
                    <div className="fact-single-item" key={index}>
                      <div className="fact-single-wrapper">
                        <div className="fact-counter">
                          {stat.value && (
                            <div className="fact-counter-number-wrapper">
                              <span className="fact-counter-number-prefix"></span>
                              <span className="fact-counter-number">{stat.value}</span>
                              <span className="fact-counter-number-suffix">{stat.suffix}</span>
                            </div>
                          )}
                          <div className="fact-counter-title">{stat.title}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-6">
                <div className="fact-detail-right">
                  {principalData.stats.slice(2).map((stat, index) => (
                    <div className="fact-single-item" key={index}>
                      <div className="fact-single-wrapper">
                        <div className="fact-counter">
                          {stat.value && (
                            <div className="fact-counter-number-wrapper">
                              <span className="fact-counter-number-prefix"></span>
                              <span className="fact-counter-number">{stat.value}</span>
                              <span className="fact-counter-number-suffix">{stat.suffix}</span>
                            </div>
                          )}
                          <div className="fact-counter-title">{stat.title}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className={`col-lg-5 order-lg-${principalData.position === 'left' ? '2' : '1'} row`}>
            <div className="fact-content-heading read-more-section">
              <h2 className="mb-3">Principal Speak</h2>
              <div dangerouslySetInnerHTML={createMarkup(principalData.content)} />
              <div dangerouslySetInnerHTML={createMarkup(principalData.extendedContent)}></div>
              {principalData.extendedContent && (
                <>
                  {showMore && (
                    <div className="more-text" dangerouslySetInnerHTML={createMarkup(principalData.extendedContent)} />
                  )}
                  <button className="btn-one btn-smaller read-more mb-3 readmore-mobile" onClick={toggleReadMore}>
                    <span className="txt">{showMore ? 'Read Less' : 'Read More'}</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="row d-flex d-lg-none order-lg-3">
            <div className="col-6">
              <div className="fact-detail-left">
                {principalData.stats.slice(0, 2).map((stat, index) => (
                  <div className="fact-single-item" key={index}>
                    <div className="fact-single-wrapper">
                      <div className="fact-counter">
                        {stat.value && (
                          <div className="fact-counter-number-wrapper">
                              <span className="fact-counter-number-prefix"></span>
                            <span className="fact-counter-number">{stat.value}</span>
                            <span className="fact-counter-number-suffix">{stat.suffix}</span>
                          </div>
                        )}
                        <div className="fact-counter-title">{stat.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-6">
              <div className="fact-detail-right">
                {principalData.stats.slice(2).map((stat, index) => (
                  <div className="fact-single-item" key={index}>
                    <div className="fact-single-wrapper">
                      <div className="fact-counter">
                        {stat.value && (
                          <div className="fact-counter-number-wrapper">
                              <span className="fact-counter-number-prefix"></span>
                            <span className="fact-counter-number">{stat.value}</span>
                            <span className="fact-counter-number-suffix">{stat.suffix}</span>
                          </div>
                        )}
                        <div className="fact-counter-title">{stat.title}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalSpeakSection;