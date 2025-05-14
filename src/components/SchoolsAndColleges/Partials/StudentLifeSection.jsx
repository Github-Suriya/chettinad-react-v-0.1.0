import React from 'react';

const StudentLifeSection = () => {
  return (
    <section className="student_life_section pt_80 pb_80" id="student-life">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 wow fadeIn" data-wow-duration="2s">
            <h4 className="theme-heading">Student life</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="student-life-gallery">
              <div className="position-relative">
                <div className="position-relative first-img-wrapper">
                  <img 
                    src="/chettinad-react/assets/images/student-life-2.webp" 
                    alt="Students at Chettinad College of Nursing" 
                    className="img-fluid"
                  />
                </div>
                <div className="second-img">
                  <div className="icon-wrapper">
                    <a 
                      href="/chettinad-react/college/college-of-nursing/student-life.php" 
                      className="btn-primary"
                      aria-label="View more student life photos"
                    >
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="second-img-wrapper">
                    <img 
                      src="https://care.edu.in/wp-content/uploads/2020/05/images_0015_green-zone-01-3.jpg" 
                      alt="Campus green zone at Chettinad" 
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <div className="student-life-content">
              <p>The School offers the students a unique experience as they pursue their degrees.</p>
              <p>The combination of creative thought and technical analysis is the key part of being a successful architect. In this impetus, curriculum at Chettinad School of Architecture has been developed in a way that enables the architecture theory and culture and also allows the students to understand exactly how these forces help them work in the built environment.</p>
              <p>Besides they have a free hand to work together in a fluid, non-hierarchical manner to re-think assumptions, create, explore, and test the limits of architecture</p>
              <div className="mt-3">
                <a 
                  href="/chettinad-react/college/college-of-nursing/student-life.php" 
                  className="btn-one"
                >
                  <span className="txt">
                    Learn More <i className="ms-2 fa fa-caret-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;