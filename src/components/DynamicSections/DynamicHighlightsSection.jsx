import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DynamicHighlightsSection = () => {
  const [highlightsData, setHighlightsData] = useState({
    highlights: [],
    mainImage: '',
    imagePosition: 'right'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHighlightsData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/home-highlights`);
        if (response.data.status) {
          setHighlightsData({
            highlights: response.data.data.highlights,
            mainImage: response.data.data.main_image,
            imagePosition: response.data.data.image_position
          });
        } else {
          setError(response.data.message);
          // Fallback data
          setHighlightsData({
            highlights: [
              {
                id: 1,
                title: '12',
                subtitle: 'Libraries including one central library',
                bg_class: 'bg1'
              },
              // Add more fallback highlights
            ],
            mainImage: 'https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/resources/student.webp',
            imagePosition: 'right'
          });
        }
      } catch (err) {
        setError(err.message);
        // Fallback data
        setHighlightsData({
          highlights: [
            {
              id: 1,
              title: '12',
              subtitle: 'Libraries including one central library',
              bg_class: 'bg1'
            },
            // Add more fallback highlights
          ],
          mainImage: 'https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/resources/student.webp',
          imagePosition: 'right'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHighlightsData();
  }, []);

  if (loading) return <div>Loading highlights...</div>;
  if (error) return <div>Error loading highlights: {error}</div>;

  const leftColumn = highlightsData.imagePosition === 'left' ? 'order-2' : 'order-1';
  const rightColumn = highlightsData.imagePosition === 'left' ? 'order-1' : 'order-2';

  return (
    <section className="social-activity-area">
      <div className="sec-title text-center">
        <h2>Highlights of Chettinad</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className={`col-xl-7 ${leftColumn}`}>
            <div className="row">
              {highlightsData.highlights.map((highlight) => (
                <div key={highlight.id} className="col-xl-4">
                  <div className={`choose-style4__single ${highlight.bg_class}`}>
                    <div className="content-box text-center">
                      <h3><a href="#">{highlight.title}</a></h3>
                      <p>{highlight.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`col-xl-5 ${rightColumn}`}>
            <div className="faculty-members-content-box">
              <img src={highlightsData.mainImage} alt="Highlights of Chettinad" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicHighlightsSection;