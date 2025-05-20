import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../api';

const ProgramsDetails = () => {
  const { collegeSlug, programSlug } = useParams();
  const [programData, setProgramData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching data for:', collegeSlug, programSlug);
    const fetchData = async () => {
        try {
        const url = `${process.env.REACT_APP_API_URL}/api/schoolsandcolleges/${collegeSlug}/programs/${programSlug}`;
        console.log('API URL:', url);
        const response = await api.get(url);
        console.log('API Response:', response.data);
        setProgramData(response.data);
        } catch (err) {
        console.error('API Error:', err);
        setError(err.message);
        }
    };
    fetchData();
    }, [collegeSlug, programSlug]);

  if (error) return <div className="text-center py-5 text-danger">Error: {error}</div>;
  if (!programData) return null;

  return (
    <main>
      {/* Hero Banner Section */}
      <section className="courses-details-section pt_80">
        <div 
          className="inner-heros-warp"
          style={{ 
            backgroundImage: `url(${process.env.REACT_APP_API_URL}/public${programData.hero_image})`
          }}
        >
          <div className="container">
            <div className="inner-hero-content row">
              <div className="col-6 text-start">
                <h3 className="theme-heading text-white text-start">{programData.title}</h3>
              </div>
              <div className="col-6 text-end">
                <img 
                  src="/chettinad-react/assets/images/care-logo-white.png" 
                  alt="care-logo-white" 
                  style={{ width: '200px' }} 
                />
              </div>
            </div>
          </div>
          <div className="all-shapes">
            <img 
              src="/chettinad-react/assets/images/inner-page-shape1.png" 
              className="inner-page-shape1" 
              alt="shapes" 
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section>
        <div className="container">
          <div className="row">
            <div className="text-column col-lg-12 col-md-12 col-sm-12 position-relative">
              <div className="inner-column">
                <div className="row py-5">
                  <div className="col-12">
                    <h4 className="theme-heading">Course Overview</h4>
                  </div>
                </div>
                
                {/* Render overview content - handle both plain text and HTML */}
                {programData.overview.includes('<') ? (
                  <div dangerouslySetInnerHTML={{ __html: programData.overview }} />
                ) : (
                  programData.overview.split('\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes Section */}
      {programData.outcomes && programData.outcomes.length > 0 && (
        <section className="course-outcomes-section">
          <div className="container">
            <div className="row py-5">
              <div className="col-12">
                <h4 className="theme-heading">Course outcomes:</h4>
              </div>
            </div>
            <p className="mb-4">
              On completion of {programData.title} program, the graduates will be able to:
            </p>

            <div className="row row-cols-1 row-cols-md-2 g-4">
              {programData.outcomes.map((outcome, i) => (
                <div key={i} className="d-flex align-items-baseline">
                  <div className="check-icon me-2">
                    <i className="fa fa-check"></i>
                  </div>
                  <div>{outcome}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Syllabus Section */}
      {programData.syllabus?.years && programData.syllabus.years.length > 0 && (
        <section className="course-outcomes-section pt-5">
          <div className="container">
            <div className="row pb-5">
              <div className="col-12">
                <h4 className="theme-heading">Syllabus</h4>
              </div>
            </div>
            
            <div className="row">
              <div className="col-12">
                <div className="faq-wrap pt-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                  <div className="accordion" id="syllabusAccordion">
                    {programData.syllabus.years.map((year, index) => (
                      <div key={index} className="card">
                        <div className="card-header" id={`heading${index}`}>
                          <h2 className="mb-0">
                            <button 
                              className="faq-btn collapsed" 
                              type="button" 
                              data-bs-toggle="collapse" 
                              data-bs-target={`#collapse${index}`}
                            >
                              {year.name}
                            </button>
                          </h2>
                        </div>
                        <div 
                          id={`collapse${index}`} 
                          className="collapse" 
                          data-bs-parent="#syllabusAccordion"
                        >
                          <div className="row p-3 gap-3">
                            {year.core_subjects && year.core_subjects.length > 0 && (
                              <div className="card-body custom-card mb-4 col-md-3">
                                <p className="theme-heading">Core Subjects:</p>
                                <div className="row row-cols-1 row-cols-md-2 g-4">
                                  {year.core_subjects.map((subject, i) => (
                                    <div key={i} className="d-flex align-items-baseline">
                                      <div className="check-icon me-2">
                                        <i className="fa fa-check"></i>
                                      </div>
                                      <div>{subject}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {year.skill_development && year.skill_development.length > 0 && (
                              <div className="card-body custom-card mb-4 col-md-3">
                                <p className="mt-3 theme-heading">Skill Development & Enrichment:</p>
                                <div className="row row-cols-1 g-4">
                                  {year.skill_development.map((skill, i) => (
                                    <div key={i} className="d-flex align-items-baseline">
                                      <div className="check-icon me-2">
                                        <i className="fa fa-check"></i>
                                      </div>
                                      <div>{skill}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {year.value_added && year.value_added.length > 0 && (
                              <div className="card-body custom-card mb-4 col-md-3">
                                <p className="mt-3 theme-heading">Value-Added Course:</p>
                                <div className="row row-cols-1 g-4">
                                  {year.value_added.map((course, i) => (
                                    <div key={i} className="d-flex align-items-baseline">
                                      <div className="check-icon me-2">
                                        <i className="fa fa-check"></i>
                                      </div>
                                      <div>{course}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
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
      )}

      {/* Eligibility Section */}
      {programData.eligibility?.sections && programData.eligibility.sections.length > 0 && (
        <section className="course-outcomes-section py-5">
          <div className="container">
            <div className="row py-5">
              <div className="col-12">
                <h4 className="theme-heading">Eligibility</h4>
              </div>
            </div>
            
            {programData.eligibility.sections.map((section, i) => (
              <div key={i}>
                <p className="mb-0">{section.title}:</p>
                <div className="mb-3">
                  {section.content.includes('<') ? (
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  ) : (
                    <p>{section.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Admissions Section */}
      {programData.admission_link && (
        <section className="admission_section py-5">
          <div className="container">
            <div className="admission-wrapper">
              <h1 className="admission-title">
                Admissions
              </h1>
              <a 
                className="admission-btn" 
                href={programData.admission_link} 
                target="_blank" 
                rel="noopener noreferrer"
               
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProgramsDetails;