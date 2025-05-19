import { useEffect, useState } from 'react';
import HappeningsAtChettinad from "./Carousel/HappeningsAtChettinad";
import FactCounter from "./Utilities/FactCounter";
import api from '../api';
import DynamicContentSections from './DynamicSections/DynamicContentSections';
import DynamicImgCarousel from './DynamicSections/DynamicImgCarousel';
import DynamicDepartmentsSection from './DynamicSections/DynamicDepartmentsSection';
import DynamicHighlightsSection from './DynamicSections/DynamicHighlightsSection';
import DynamicAlumniStudents from './DynamicSections/DynamicAlumniStudents';
import DynamicEvents from './DynamicSections/DynamicEvents';
import DynamicHomeTestimonial from './DynamicSections/DynamicHomeTestimonial';
import DynamicFromOurStudents from './DynamicSections/DynamicFromOurStudents';
import DynamicFaqSection from './DynamicSections/DynamicFaqSection';

const Home = () => {

    const [bannerData, setBannerData] = useState({
        videoUrl: '',
        title: '',
        buttons: []
      });
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        const fetchBannerData = async () => {
          try {
            const response = await api.get(`${process.env.REACT_APP_API_URL}/api/menus/banner`);
            setBannerData({
              videoUrl: response.data.videoUrl,
              title: response.data.title,
              buttons: response.data.buttons.map(button => ({
                text: button.text,
                link: button.link,
                target: button.target || '_self'
              }))
            });
            setLoading(false);
          } catch (err) {
            setError(err.message);
            setLoading(false);
          }
        };
    
        fetchBannerData();
      }, []);
    
      if (loading) return <div>Loading banner...</div>;
      if (error) return <div>Error loading banner: {error}</div>;

  return (
    <>

      <div className="boxed_wrapper ltr">
          <section className="main-slider style1 nav-style2">
              <div className="slider-box">
                    <div className="banner-carousel active">
                        <div className="slide">
                            <video className="video hide-mobile" autoPlay muted loop playsInline poster="">
                                <source src={bannerData.videoUrl} type="video/mp4" />
                            </video>
                            <div className="auto-container">
                                <div className="content middle text-center">
                                <div className="big-title">
                                    <h2>{bannerData.title}</h2>
                                </div>
                                <div className="text"></div>
                                <div className="btns-box">
                                    {bannerData.buttons.map((button, index) => (
                                    <a key={index} className="btn-one" href={button.link} target={button.target}
                                    rel={button.target === '_blank' ? 'noopener noreferrer' : ''}>
                                        <span className="txt">{button.text}</span>
                                    </a>
                                    ))}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
              </div>
          </section>
          <section className="essentials-area">
              <div className="auto-container">
                  <div className="row">
                      <div className="col-xl-12">
                          <div className="features-style1-content">
                              <h1 style={{ textAlign: 'center', color: '#fff', padding: '16px 0 0 0' }}>Location</h1>
                              <ul>
                                  <li>
                                      <div className="single-features-style1">
                                          <div className="text-box">
                                              <h2><a href="https://admission.care.edu.in/kelambakkam">Kelambakkam Campus</a>
                                              </h2>
                                              <p>CARE has 33.5 Acre green campus Kelambakkam that is in
                                                  OMR, the IT & Educational Corrider that runs from chennai.</p>
                                              <a className="btn-one mt-3 me-1" href="https://admission.care.edu.in/kelambakkam"
                                                  >
                                                  <span className="txt">View More</span>
                                              </a>
                                              <a className="btn-one mt-3" href=" https://maps.app.goo.gl/AcoFkwvQ8AqUjDpFA"
                                                  >
                                                  <span className="txt">Locate Us</span>
                                              </a>
                                          </div>
                                          <div className="img-box">
                                              <img src="/chettinad-react/assets/images/kelambakkam-drawing-image.webp"
                                                  alt="kelambakkam-drawing-image" />
                                              <div className="overlay-content">
                                                  <a href="https://admission.care.edu.in/kelambakkam">
                                                      <span className="icon-top"></span>
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="single-features-style1">
                                          <div className="text-box">
                                              <h2><a href="https://admission.care.edu.in/manamai">Manamai Campus</a></h2>
                                              <p>Achieving milstones has always been defining part of CARE's Jounery, and the
                                                  new campus
                                                  expansion at Manamai.</p>
                                              <a className="btn-one mt-3 me-1" href="https://admission.care.edu.in/manamai"
                                                  >
                                                  <span className="txt">View More</span>
                                              </a>
                                              <a className="btn-one mt-3" href=" https://maps.app.goo.gl/QLQKq6GDnyMnVV6FA"
                                                  >
                                                  <span className="txt">Locate Us</span>
                                              </a>
                                          </div>
                                          <div className="img-box">
                                              <img src="/chettinad-react/assets/images/manamai-drawing-image.webp"
                                                  alt="manamai-drawing-image" />
                                              <div className="overlay-content">
                                                  <a href="https://admission.care.edu.in/manamai">
                                                      <span className="icon-top"></span>
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <DynamicContentSections />
          <section className="high-school-study-educamb-area mt-5 homepage">
              <div className="high-school-study-educamb-area-bg"
                  style={{ backgroundImage: 'url(https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/resources/high-school-study-educamb-area-bg.jpg)' }}>
              </div>
              <div className="container">
                  <div className="sec-title text-center pt-0">
                      <h2>Adwards & Accreditations</h2>
                      <div className="sub-title">
                          <p>Offering the best university experience and providing students with exceptional education
                              from an accredited institution.</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-xl-12">
                            <DynamicImgCarousel groupId={1} />
                      </div>
                  </div>
              </div>
          </section>
          <DynamicDepartmentsSection />
          <DynamicHighlightsSection />
          <section className="research-area">
              <div className="auto-container">
                  <div className="sec-title text-center">
                      <h2>Happenings At Chettinad</h2>
                  </div>
                  <div className="container">
                      <div className="row">
                          <div className="col-xl-12">
                            <HappeningsAtChettinad />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="fact-counter-area">
              <div className="container">
                  <div className="sec-title text-center">
                      <h2>Most Interesting Facts</h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-12">
                        <FactCounter />
                      </div>
                  </div>
              </div>
          </section>
          <DynamicAlumniStudents />
          <section className="event-style1-area">
              <div className="container">
                  <div className="sec-title text-center">
                      <h2>Upcoming Events</h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-6 mb-3">
                        <DynamicImgCarousel groupId={3} />
                      </div>
                      <div className="col-xl-6">
                        <DynamicEvents />
                      </div>
                  </div>
              </div>
          </section>
          <section className="high-school-study-educamb-area" style={{ padding: '0 0 81px 0px' }}>
              <div className="container">
                  <div className="sec-title text-center">
                      <h2 style={{ color: '#004a8e' }}>TESTIMONIALS</h2>
                  </div>
                  <div className="row">
                      <div className="col-xl-12">
                        <DynamicHomeTestimonial />
                      </div>
                  </div>
              </div>
          </section>
          <section className="testimonial-style1-area">
              <div className="container">
                  <div className="row">
                      <div className="col-xl-12">
                          <div className="testimonial-style1__title">
                              <div className="sec-title">
                                  <h2>Hear From Our Students</h2>
                              </div>
                              <div className="btns-box">
                                  <a className="btn-one" href="#">
                                      <span className="txt">More Videos</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-xl-12">
                          <div className="testimonial-style1-content">
                            <DynamicFromOurStudents />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <DynamicFaqSection page="home" />
      </div>

    </>
  );
};

export default Home;