import React, { useState } from 'react';

const PrincipalSpeakSection = () => {
  const [showMore, setShowMore] = useState(false);
  const stats = [
    { value: 1000, suffix: "+", title: "Graduates" },
    { title: "INC Approved" },
    { value: 3, suffix: "+", title: "Courses" },
    { value: 5, suffix: "+", title: "Specialisation" }
  ];

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="fact_section pt_80 pb_80" id="principal">
      <div className="container-fluid">
        <div className="row justify-content-evenly">
          <div className="col-lg-5">
            <div className="fact-left">
              <div className="fact-widget-container">
                <div className="fact-image-box-wrapper">
                  <figure className="fact-image-box-img">
                    <img 
                      className="img-fluid" 
                      loading="lazy" 
                      src="/chettinad-react/assets/images/principal.png" 
                      alt="principal" 
                    />
                  </figure>
                  <div className="fact-image-box-content">
                    <h3 className="fact-image-box-title">Dr. Subbulakshmi S</h3>
                    <p className="fact-image-box-description">Principal</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-none d-lg-flex">
              <div className="col-6">
                <div className="fact-detail-left">
                  {stats.slice(0, 2).map((stat, index) => (
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
                  {stats.slice(2).map((stat, index) => (
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
          <div className="col-lg-5 row">
            <div className="fact-content-heading read-more-section">
              <h2 className="mb-3">Principal Speak</h2>
              <p>Welcome to the Chettinad College of Nursing (CCN) at Chettinad Academy of Research and Education (Deemed to be a University).</p>
              <p>Committed to excellence in nursing with a strong clinical environment and academic excellence in mutual partnership with our teaching hospital, we provide robust foundation for the development of students as capable health care professionals both in India and globally.</p>
              
              {showMore && (
                <div className="more-text">
                  <p>Research led teaching, learning and practice in state-of-the-art facilities provide the best learning experience. The wonderful green atmosphere with the central library facilitates students access to study opportunities. Through an interdisciplinary approach, we continuously expand professional boundaries and prepare exceptional graduates.</p>
                  <p>Merit scholarship is offered.</p>
                  <p>Our undergraduate programs are:</p>
                  <ol className="fact-content-list">
                    <li><a href="https://admission.care.edu.in/kelambakkam" target="_blank" rel="noopener noreferrer">BSc Nursing</a>, 4 years (after 10+2)</li>
                    <li><a href="https://admission.care.edu.in/kelambakkam" target="_blank" rel="noopener noreferrer">Post Basic BSc Nursing</a>, 2years (after diploma nursing)</li>
                  </ol>
                  <p>Our postgraduate programs are co-designed with speciality to meet our community needs.</p>
                  <p>Our programs include:</p>
                  <p><a href="https://admission.care.edu.in/kelambakkam" target="_blank" rel="noopener noreferrer">Master of Nursing</a></p>
                  <ol className="fact-content-list">
                    <li>Medical-Surgical Nursing</li>
                    <li>Obstetrics and Gynaecology Nursing</li>
                    <li>Child Health Nursing (Pediatric)</li>
                    <li>Community Health Nursing</li>
                    <li>Mental Health (Psychiatric) Nursing</li>
                  </ol>
                  <p>Incorporating contemporary practice, they are taught by both our academic faculty and experts. Students interested in research can study through a PhD program. Higher degree students undertake a broad range of nursing and healthrelated research.</p>
                  <p>DR.SUBBULAKSHMI.S <br /> Principal <br /> Chettinad College of Nursing</p>
                </div>
              )}
              
              <button className="btn-one btn-smaller read-more mb-3 readmore-mobile" onClick={toggleReadMore}>
                <span className="txt">{showMore ? 'Read Less' : 'Read More'}</span>
              </button>
            </div>
          </div>
          <div className="row d-flex d-lg-none">
            <div className="col-6">
              <div className="fact-detail-left">
                {stats.slice(0, 2).map((stat, index) => (
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
                {stats.slice(2).map((stat, index) => (
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