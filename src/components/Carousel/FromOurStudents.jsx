import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FromOurStudents = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const testimonials = [
    {
      name: "Silverster Scott",
      course: "B.Tech-IT , 2017-2022",
      image: "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/screen1.png",
      videoLink: "",
    },
    {
      name: "Arlo Sebastian",
      course: "B.Tech-Civil , 2017-2022",
      image: "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/screen2.png",
      videoLink: "https://www.youtube.com/embed/VqhWfqQfdn8?si=mkT182w8Cl59bGX7",
    },
    {
      name: "Silverster Scott",
      course: "B.Tech-IT , 2017-2022",
      image: "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/screen3.png",
      videoLink: "https://www.youtube.com/embed/NRcTOeK0go8?si=JGSDNGMOnpDJz6MQ",
    },
    {
      name: "Arlo Sebastian",
      course: "B.Tech-Civil , 2017-2022",
      image: "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/screen1.png",
      videoLink: "https://www.youtube.com/embed/NRcTOeK0go8?si=JGSDNGMOnpDJz6MQ",
    },
  ];

  return (
    <div className="from-our-students-section">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="single-testimonial-style1">
            <div className="border-box"></div>
            <div className="position-relative">
              <a href={item.videoLink || "#"} target="_blank" rel="noreferrer">
                <img src={item.image} alt={item.name} />
              </a>
            </div>
            <div className="client-name">
              <h3>{item.name}</h3>
              <span>{item.course}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FromOurStudents;