import React, { useState, useEffect } from 'react';
import api from '../../api';

const DynamicFaqSection = ({ page = 'home' }) => {
  const [faqs, setFaqs] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [faqRes, imageRes] = await Promise.all([
          api.get(`${process.env.REACT_APP_API_URL}/api/faqs/page/${page}`),
          api.get(`${process.env.REACT_APP_API_URL}/api/main-image/faq-section`)
        ]);
        
        setFaqs(faqRes.data.data);
        setMainImage(imageRes.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  if (loading) return <div>Loading FAQs...</div>;

  return (
    <div className="edu-faq-area faq-style-12 section-gap-equal pb-5">
      <div className="container">
        <div className="row g-5 row--45">
          {/* FAQ Content */}
          <div className={`col-lg-6 order-lg-${mainImage?.image_position === 'left' ? 2 : 1}`}>
            <div className="edu-faq-content">
              <div className="sec-title">
                <h2 className="text-center">FAQ</h2>
              </div>
              <div className="faq-accordion" id="faq-accordion">
                <div className="accordion">
                  {faqs.map((category) => (
                    <React.Fragment key={category.id}>
                      {category.items.map((item, index) => (
                        <div className="accordion-item" key={item.id}>
                          <h5 className="accordion-header">
                            <button 
                              className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                              type="button" 
                              data-bs-toggle="collapse"
                              data-bs-target={`#faq-${item.id}`}
                              aria-expanded={index === 0 ? 'true' : 'false'}
                            >
                              {item.question}
                            </button>
                          </h5>
                          <div 
                            id={`faq-${item.id}`} 
                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                            data-bs-parent="#faq-accordion"
                          >
                            <div className="accordion-body">
                              <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Image */}
          <div className={`col-lg-6 order-lg-${mainImage?.image_position === 'left' ? 1 : 2}`}>
            <div className="edu-faq-gallery">
              <div className="faq-thumbnail thumbnail-1">
                {mainImage ? (
                  <img 
                    src={mainImage.image_url} 
                    alt="FAQ Section" 
                    className="img-fluid"
                  />
                ) : (
                  <div className="alert alert-info">No image configured for this section</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicFaqSection;