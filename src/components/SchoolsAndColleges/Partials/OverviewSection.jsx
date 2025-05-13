import React, { useState } from 'react';

const OverviewSection = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
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
            <p className="wow fadeIn" data-wow-duration="2s">
              Chettinad College of Nursing is a constituent college of Chettinad Academy of Research and Education (Deemed to be University under section 3 of the UGC Act 1956) recognized by the Indian Nursing Council, Delhi and Tamil Nadu Nurses and Midwives Council, Chennai.
            </p>
            <p className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
              Chettinad College of Nursing was established with the mission to prepare nurses with global standards for local and global placements. The Nursing programs offered to implement a curriculum based on the syllabus provided by the Indian Nursing Council to establish uniform standards of Nursing Education. The standardized curriculum provides a broad-based education within the academic framework intended for the development of critical thinking skills, competencies, and standards required for the practice of professional nursing and midwifery as envisaged in National Health Policy.
            </p>
            <div className="more-text" style={{ display: showMore ? 'block' : 'none' }}>
              <p>The curriculum is further enriched with value-added courses to prepare our graduates to become exemplary citizens by adhering to the code of ethics and professional conduct at all times in fulfilling personal, social and professional obligations so as to respond to national aspirations.</p>
              <p>The placement and career counseling cell, Chettinad Academy of Research and Education ensures 100% assistance for employment through career counseling, in-house interviews and campus interviews.</p>
            </div>
            <button className="btn-one btn-smaller read-more mb-3" onClick={toggleReadMore}>
              <span className="txt">{showMore ? 'Read Less' : 'Read More'}</span>
            </button>
          </div>
          <div className="col-lg-5 wow fadeIn" data-wow-duration="2s">
            <img 
              src="/chettinad-react/assets/images/nursing/nursing-new-02.webp" 
              alt="over-view-img" 
              className="img-fluid mb-3" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;