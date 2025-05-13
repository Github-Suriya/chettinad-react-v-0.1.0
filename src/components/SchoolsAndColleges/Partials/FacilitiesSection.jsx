import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FacilitiesSection = () => {
  const facilities = [
    {
      title: "Nursing Laboratories",
      image: "/chettinad-react/assets/images/facility_nursing_1.webp",
      description: "The Nursing Laboratories provides space for students to learn and practice basic skills and more advanced nursing interventions in simulated settings using a mix of Manikins, Anatomical models and High-fidelity Simulators. Learning exercises in the Laboratories include demonstration and redemonstrations of various procedures which help the students to develop the necessary skill and confidence to provide bedside care and carry out nursing procedures in the clinical settings."
    },
    {
      title: "Nursing Foundation Lab",
      image: "/chettinad-react/assets/images/facility_nursing_2.webp",
      description: "The Nursing foundation lab is equipped to provide an imagination of hospital set up where the students can develop their skill in integrating theory and practice in providing bedside care & implement various nursing procedures through demonstration and re-demonstrations of procedures. This helps students to acquire the necessary knowledge, skill and attitude in meeting patient needs in the actual clinical settings."
    },
    {
      title: "Nutrition Lab",
      image: "/chettinad-react/assets/images/facility_nursing_3.webp",
      description: "Nutrition lab facilitates learning by providing the faculty and students with the settings, models, equipment and supplies necessary to develop skills regarding nutritious diet for a patients. Our college has state of art nutrition lab with all modern amenities for teaching therapeutic diet for the patients. Students get excellent training in nutrition and dietetics during their course of studies"
    },
    {
      title: "Community Health Nursing Lab",
      image: "/chettinad-react/assets/images/facility_nursing_4.webp",
      description: "The Community Health Nursing Lab simulates real-life community and home settings, enabling students to develop practical skills before entering fieldwork. It is equipped with community bags, family planning kits, models, charts, and puppets to support training in health assessment, minor treatments, and health education. This hands-on learning helps students confidently meet the diverse needs of urban and rural communities."
    },
    {
      title: "Obstetrics and Gynaecological Nursing Lab",
      image: "/chettinad-react/assets/images/facility_nursing_5.webp",
      description: "Obstetrics and Gynaecological Nursing Lab is well equipped with Birthing simulators, obstetric manikins, pelvis, fetal skull, various obstetrical instruments, different kinds of models etc to help the students acquire knowledge & skill in patient care that are to be practiced in clinical settings."
    },
    {
      title: "Child Health Nursing Lab",
      image: "/chettinad-react/assets/images/facility_nursing_6.webp",
      description: "Child Health Nursing Lab is designed to help the students to develop an understanding of the modern approach to child care, identification, prevention and nursing management of common health problems of newborn and children. This lab provides solid foundation for pediatric nursing i.e. firsthand experience to handling neonates and children with the help of simulated model (manikins) and also performing related nursing procedures, before going to actual clinical settings."
    },
    {
      title: "Advanced Nursing Lab (Skills Lab)",
      image: "/chettinad-react/assets/images/facility_nursing_1.webp",
      description: "Nursing Skills Lab serves an essential bridge between classroom learning and real-world nursing practice. It is equipped with a mix of manikins and high-fidelity simulators to demonstrate newborn, pediatric, adult, gynaec and obstetrical procedures. Thus strengthening the competency based health care training among students and faculty."
    },
    {
      title: "Virtual Tour",
      image: "/chettinad-react/assets/images/facility_nursing_3.webp",
      description: "Explore Chettinad College of Nursing virtually and experience its modern infrastructure. The college boasts specialized labs equipped with simulators, models, mannequins, and AV aids, offering immersive training for future healthcare professionals.",
      videoLink: "https://www.youtube.com/watch?v=VqhWfqQfdn8"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true
  };

  return (
    <section className="highlighted_news_section" id="facilities">
      <div className="container-fluid px-0">
        <h4 className="theme-heading facility_heading">Facilities</h4>
        <Slider {...settings} className="highlighted_news_carousel">
          {facilities.map((facility, index) => (
            <div className="news_slide position-relative px-5" key={index}>
              <div className="news_image wow fadeIn">
                {facility.videoLink ? (
                  <a href={facility.videoLink} target="_blank" rel="noopener noreferrer">
                    <img src={facility.image} alt={facility.title} />
                  </a>
                ) : (
                  <img src={facility.image} alt={facility.title} />
                )}
              </div>
              <div className="news_content_card">
                <h2 className="news_title wow fadeIn">{facility.title}</h2>
                <p className="news_excerpt wow fadeIn" data-wow-delay="0.2s">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FacilitiesSection;