import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FindOutMoreSection = () => {
  const cards = [
    {
      type: 'alumni',
      title: 'View Alumni',
      link: 'https://care.edu.in/wp-content/uploads/2022/06/Nursing_Notifiable_Alumni.pdf'
    },
    {
      type: 'publication',
      title: 'View Publications',
      link: 'https://care.edu.in/wp-content/uploads/2022/06/Nursing_Publications_2012_2022.pdf'
    },
    {
      type: 'activities',
      title: 'View Outreach Activities',
      link: 'https://care.edu.in/school/nursing-outreach-activities/'
    },
    {
      type: 'handbook',
      title: 'View Student Handbook',
      link: 'javascript:void(0);'
    },
    {
      type: 'prospectus',
      title: 'View Prospectus',
      link: 'https://care.edu.in/wp-content/uploads/2024/07/Nursing_Prospectus_2024_2025.pdf'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="find_out_more_section pt_80 pb_80" id="more">
      <div className="container position-relative">
        <div className="row pb-5">
          <div className="col-12 wow fadeIn" data-wow-duration="2s">
            <h4 className="theme-heading">Find Out More</h4>
          </div>
        </div>
        <Slider {...settings} className="find-out-carousel">
          {cards.map((card, index) => (
            <div className="item" key={index}>
              <div className={`find-card ${card.type}-card`}>
                <div className="actions">
                  <a 
                    className="read" 
                    href={card.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {card.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FindOutMoreSection;