import React from 'react';

const ProgramsSection = () => {
  const programs = [
    {
      title: "B.Sc. Nursing",
      level: "UG",
      image: "/chettinad-react/assets/images/nursing/nursing-new-01.webp",
      description: "This course consists of a four-year undergraduate program focused on developing critical thinking skills and proficiency.",
      link: "/chettinad-react/pages/courses/bsc-nursing-courses-details.php"
    },
    {
      title: "M.Sc. Nursing",
      level: "PG",
      image: "/chettinad-react/assets/images/nursing/nursing-new-04.webp",
      description: "This course is designed to assist students in developing expertise and advance competence in practice nursing.",
      link: "/chettinad-react/pages/courses/msc-nursing-courses-details.php"
    }
  ];

  return (
    <section className="courses_section pt_80 pb_80" id="programs">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 wow fadeIn" data-wow-duration="2s">
            <h4 className="theme-heading">Programs</h4>
          </div>
        </div>
        <div className="row justify-content-center">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`col-lg-4 col-md-6 wow ${index === 0 ? 'slideInLeft' : 'slideInRight'} mb-3 mb-md-0`} 
              data-wow-duration="2s"
            >
              <div className="courses-item mb-30 hover-zoomin">
                <div className="thumb fix">
                  <a href={program.link}>
                    <img src={program.image} alt={program.title} />
                  </a>
                </div>
                <div className="courses-content">                                    
                  <div className="cat">
                    <i className="fa fa-graduation-cap"></i> {program.level}
                  </div>
                  <h3>
                    <a href={program.link}>{program.title}</a>
                  </h3>
                  <p>{program.description}</p>
                  <a href={program.link} className="readmore">
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </a>
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