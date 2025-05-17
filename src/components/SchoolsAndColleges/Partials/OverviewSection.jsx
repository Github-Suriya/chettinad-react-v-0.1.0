import React, { useState, useEffect } from 'react';
import api from '../../../api';
import { useParams } from 'react-router-dom';

const OverviewSection = () => {
  const { slug } = useParams();
  const [showMore, setShowMore] = useState(false);
  const [overviewData, setOverviewData] = useState({
    content: '',
    extendedContent: '',
    image: '/storage/default-college.jpg'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const response = await api.get(`${process.env.REACT_APP_API_URL}/api/schoolsandcolleges/${slug}`);
        const apiData = response.data;
        
        // Find overview section in the sections array
        const overviewSection = apiData.sections.overview;
        
        setOverviewData({
          content: overviewSection?.overview_content || 'No overview content available',
          extendedContent: overviewSection?.extended_content || '',
          image: overviewSection?.overview_image || '/storage/default-college.jpg'
        });
      } catch (error) {
        console.error('Error fetching overview data:', error);
        setOverviewData({
          content: 'Error loading overview content',
          extendedContent: '',
          image: '/storage/default-college.jpg'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchOverviewData();
  }, [slug]);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  if (loading) {
    return <></>;
  }

  if (overviewData.content === 'No overview content available') {
    return <></>;
  }

  // Function to safely render HTML content
  const createMarkup = (html) => {
    return { __html: html || '' };
  };

  return (
    <section className="overview_section pt_80 pb_80" id="overview">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 wow fadeIn" data-wow-duration="2s">
            <h4 className="theme-heading">Overview</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 read-more-section text-center text-md-start">
            <div 
              className="wow fadeIn" 
              data-wow-duration="2s"
              dangerouslySetInnerHTML={createMarkup(overviewData.content)}
            />
            
            {overviewData.extendedContent && (
              <>
                <div 
                  className="more-text wow fadeIn" 
                  data-wow-duration="2s" 
                  data-wow-delay="0.2s"
                  style={{ display: showMore ? 'block' : 'none' }}
                  dangerouslySetInnerHTML={createMarkup(overviewData.extendedContent)}
                />
                <button className="btn-one btn-smaller read-more mb-3" onClick={toggleReadMore}>
                  <span className="txt">{showMore ? 'Read Less' : 'Read More'}</span>
                </button>
              </>
            )}
          </div>
          <div className="col-lg-5 wow fadeIn" data-wow-duration="2s">
            <img 
              src={`${process.env.REACT_APP_API_URL}/public${overviewData.image}`}
              alt="College overview" 
              className="img-fluid mb-3" 
              onError={(e) => {
                e.target.src = `${process.env.REACT_APP_API_URL}/storage/default-college.jpg`;
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;