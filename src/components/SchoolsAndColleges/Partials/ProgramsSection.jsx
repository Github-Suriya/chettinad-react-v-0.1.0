import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import api from '../../../api';

const ProgramsSection = () => {
  const { slug: collegeSlug } = useParams();
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`${process.env.REACT_APP_API_URL}/api/schoolsandcolleges/${collegeSlug}/programs`);
        setSectionData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collegeSlug]);

  if (loading) return <div className="text-center py-5">Loading...</div>;
  if (error) return <div className="text-center py-5 text-danger">Error: {error}</div>;
  if (!sectionData || !sectionData.programs || sectionData.programs.length === 0) return null;

  return (
    <section className="courses_section pt_80 pb_80" id="programs">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 wow fadeIn" data-wow-duration="2s">
            <h4 className="theme-heading">{sectionData.title}</h4>
          </div>
        </div>
        <div className="row justify-content-center">
          {sectionData.programs.map((program, index) => (
            <div 
              key={index}
              className={`col-lg-4 col-md-6 wow ${index === 0 ? 'slideInLeft' : 'slideInRight'} mb-3 mb-md-0`} 
              data-wow-duration="2s"
            >
              <div className="courses-item mb-30 hover-zoomin">
                <div className="thumb fix">
                  <Link to={`/schoolsandcolleges/${collegeSlug}/programs/${program.link}`}>
                    <img 
                      src={`${process.env.REACT_APP_API_URL}/public${program.image}`} 
                      alt={program.title}
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="courses-content">                                    
                  <div className="cat">
                    <i className="fa fa-graduation-cap"></i> {program.level}
                  </div>
                  <h3>
                    <Link to={`/schoolsandcolleges/${collegeSlug}/programs/${program.link}`}>
                      {program.title}
                    </Link>
                  </h3>
                  <p>{program.description}</p>
                  <Link 
                    to={`/schoolsandcolleges/${collegeSlug}/programs/${program.link}`} 
                    className="readmore"
                  >
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
                <div className="icon">
                  <img src="/chettinad-react/assets/images/cou-icon-thm.png" alt="icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;