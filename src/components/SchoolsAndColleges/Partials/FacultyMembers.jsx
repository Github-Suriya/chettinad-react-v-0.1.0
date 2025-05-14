import React, { useState } from 'react';

const FacultyMembers = () => {
  const [activeAccordion, setActiveAccordion] = useState('keyadmin');

  const facultyGroups = [
    {
      id: 'keyadmin',
      title: "Key Administrators",
      members: [
        {
          name: "Dr. Subbulakshmi S",
          designation: "Principal",
          image: "/chettinad-react/assets/images/principal.png"
        },
        {
          name: "Prof. Yagajeyanthi M",
          designation: "Vice Principal",
          image: "/chettinad-react/assets/images/Prof-Yagajeyanthi-M.JPG"
        }
      ]
    },
    {
      id: 'advisory',
      title: "Advisory Board",
      members: [
        {
          name: "Ar. Manit Rastogi",
          designation: "Principal Architect",
          image: "https://care.edu.in/wp-content/uploads/2020/07/Ar.-Manit-Rastogi.png"
        },
        {
          name: "Ar. Peter Stutchbury",
          designation: "Principal Architect",
          image: "https://care.edu.in/wp-content/uploads/2020/07/Ar.-Peter-Stutchbury.png"
        },
        {
          name: "Ar. SaroshPradhan",
          designation: "Principal Architect",
          image: "https://care.edu.in/wp-content/uploads/2020/07/Ar.-SaroshPradhan.png"
        },
        {
          name: "Ar. Andy Rahman",
          designation: "Principal Architect",
          image: "https://care.edu.in/wp-content/uploads/2020/07/Ar.-Andy-Rahman.png"
        },
        {
          name: "Ar. Sridhar",
          designation: "Managing Director",
          image: "https://care.edu.in/wp-content/uploads/2020/07/Ar.-Sridhar.png"
        },
        {
          name: "Ar. Cheralathan K",
          designation: "Principal Architect",
          image: "https://care.edu.in/wp-content/uploads/2020/07/Ar.-Cheralathan-K.png"
        },
        {
          name: "System Admin",
          designation: "IT",
          image: "/chettinad-react/assets/images/faculty-male-memberss-default.png"
        }
      ]
    }
  ];

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="faculty_section pb_80" id="faculty">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 wow fadeIn" data-wow-duration="2s">
            <h4 className="theme-heading">Faculty Members</h4>
          </div>
        </div>
        
        <div className="faculty-accordion">
          {facultyGroups.map((group) => (
            <div className="accordion-item" key={group.id}>
              <h2 className="accordion-header">
                <button 
                  className={`accordion-button ${activeAccordion === group.id ? '' : 'collapsed'}`}
                  onClick={() => toggleAccordion(group.id)}
                >
                  {group.title}
                </button>
              </h2>
              <div 
                className={`accordion-collapse ${activeAccordion === group.id ? 'show' : ''}`}
              >
                <div className="accordion-body">
                  <div className="row justify-content-center">
                    {group.members.map((member, index) => (
                      <div className="col-md-3 mb-3 col-10" key={index}>
                        <div className="single-faculty-item">
                          <img 
                            className="img-fluid facluty-main-image" 
                            loading="lazy" 
                            src={member.image} 
                            alt={member.name}
                          />
                          <h3 className="faculty-title">{member.name}</h3>
                          <p className="faculty-designation">{member.designation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyMembers;