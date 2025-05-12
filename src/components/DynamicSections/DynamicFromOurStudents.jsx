import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DynamicFromOurStudents = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch testimonials
        const testimonialsRes = await fetch(`${process.env.REACT_APP_API_URL}/api/student-testimonials`);
        const testimonialsData = await testimonialsRes.json();
        
        // Fetch slider settings
        const settingsRes = await fetch(`${process.env.REACT_APP_API_URL}/api/slider-settings/student_testimonials`);
        const settingsData = await settingsRes.json();
        
        // Transform settings to match react-slick's expected format
        const transformedSettings = {
          dots: settingsData.dots || false,
          infinite: settingsData.infinite || true,
          speed: settingsData.speed || 500,
          autoplay: settingsData.autoplay || false,
          autoplaySpeed: settingsData.autoplay_speed || 5000, // Note property name change
          slidesToShow: settingsData.slides_to_show || 3,     // Note property name change
          slidesToScroll: settingsData.slides_to_scroll || 1, // Note property name change
          responsive: settingsData.responsive ? 
            settingsData.responsive.map(item => ({
              breakpoint: item.breakpoint,
              settings: {
                slidesToShow: item.settings.slidesToShow,
                slidesToScroll: item.settings.slidesToScroll || 1
              }
            })) : []
        };

        setSliderSettings(transformedSettings);

        // Handle testimonials data
        if (testimonialsData.length >= 3) {
          setTestimonials(testimonialsData);
        } else {
          const fallback = [...testimonialsData];
          while (fallback.length < 3) {
            fallback.push({
              name: "Sample Student",
              course: "Sample Course",
              image_path: "/placeholder.jpg",
              video_link: ""
            });
          }
          setTestimonials(fallback);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="from-our-students-section">
      {testimonials.length >= 3 ? (
        <Slider {...sliderSettings}>
          {testimonials.map((item, index) => (
            <div key={index} className="single-testimonial-style1">
              <div className="border-box"></div>
              <div className="position-relative" style={{ height: '400px'}}>
                <iframe src={item.video_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: '100%', height: '100%' }}></iframe>
              </div>
              <div className="client-name">
                <h3>{item.name}</h3>
                <span>{item.course}</span>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="alert alert-warning">
          Minimum 3 testimonials required to display the slider
        </div>
      )}
    </div>
  );
};

export default DynamicFromOurStudents;