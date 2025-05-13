import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FacultyMembers = () => {
  const [activeTab, setActiveTab] = useState('keyadmin');

  const facultyGroups = {
    keyadmin: {
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
    advisory: {
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
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="faculty_section pb_80" id="faculty">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 wow fadeIn" data-wow-duration="2s">
            <h4 className="theme-heading">Faculty Members</h4>
          </div>
        </div>
        
        <div className="faculty-tabs mb-4">
          <button 
            className={`faculty-tab ${activeTab === 'keyadmin' ? 'active' : ''}`}
            onClick={() => setActiveTab('keyadmin')}
          >
            Key Administrators
          </button>
          <button 
            className={`faculty-tab ${activeTab === 'advisory' ? 'active' : ''}`}
            onClick={() => setActiveTab('advisory')}
          >
            Advisory Board
          </button>
        </div>

        <Slider {...sliderSettings} className="faculty-slider">
          {facultyGroups[activeTab].members.map((member, index) => (
            <div key={index} className="faculty-slide">
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
        </Slider>
      </div>
    </section>
  );
};

export default FacultyMembers;