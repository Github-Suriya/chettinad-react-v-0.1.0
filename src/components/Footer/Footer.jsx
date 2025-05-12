import React, { useEffect, useState } from "react";
import FooterLinks from "./Footerlinks";

const Footer = () => {

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop >= 350) {
            setShowScrollTop(true);  // Show the button if scrolled down 350px
        } else {
            setShowScrollTop(false); // Hide the button if less than 350px
        }
        };

        window.addEventListener("scroll", handleScroll);

        // Initial check for scroll position
        handleScroll();

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll to the top
        });
    };

    return(
        <>
        
        <div className="sticky-icon">
            <a href="https://www.instagram.com/chettinaduniversityofficial/" className="Instagram"> Instagram <i
                    className="fa fa-instagram"></i> </a>
            <a href="https://www.facebook.com/chettinaduniversityofficial" className="Facebook"> Facebook <i
                    className="fa fa-facebook-f"> </i> </a>
            <a href="https://api.whatsapp.com/send?phone=917358327770&amp;text=Hello,%20I%20need%20admission%20details.%20What%20are%20all%20the%20steps%20involved%20in%20the%20application%20process?"
                target="_blank" className="Google"> Whatsapp <i className="fa fa-whatsapp"> </i> </a>
            <a href="https://www.youtube.com/c/ChettinadAcademyofResearchEducation" className="Youtube"> Youtube <i
                    className="fa fa-youtube"></i> </a>
            <a href="https://twitter.com/chettinad_univ" className="Twitter">Twitter <i className="fa fa-twitter"> </i> </a>
        </div>

        <div className="vertical-tab">
            <a href="https://admission.care.edu.in/kelambakkam" alt="Apply Now">
                <button className="apply-now">
                    <div>
                        <div>
                            <div className="vertical-text">
                                Admission Enquiry
                            </div>
                        </div>
                    </div>
                </button>

            </a>

        </div>

        <div className="bottom-parallax">
            <footer className="footer-area">
                <div className="footer">
                    <div className="container">
                        <div className="row text-right-rtl">

                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="single-footer-widget marbtm50">
                                    <div className="title wow fadeIn" data-wow-duration="2s">
                                        <div className="dotted"></div>
                                        <h3>Campus & Administrative Offices</h3>
                                    </div>
                                    <div className="our-company-info">
                                        <div className="text-box wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                            <p>Chettinad Health City,
                                                Rajiv Gandhi Salai,
                                                Kelambakkam - 603 103,
                                                Chengalpattu District, Chennai,
                                                Tamil Nadu, India.</p>
                                        </div>
                                        <ul>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                                <div className="icon">
                                                    <i className="fa fa-map-o text-white fs-5"></i>
                                                </div>
                                                <div className="text">
                                                    <a href="#">Campus Map</a>
                                                </div>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                                <div className="icon">
                                                    <i class="fa fa-commenting-o text-white fs-5"></i>
                                                </div>
                                                <div className="text">
                                                    <a href="contact.html">Request for Consult</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="single-footer-widget single-footer-widget--link-box marbtm50">
                                    <div className="title wow fadeIn" data-wow-duration="2s">
                                        <div className="dotted"></div>
                                        <h3>Schools and Divisions</h3>
                                    </div>
                                    <div className="footer-widget-links">
                                        <ul>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Faculty of Medicine
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Faculty of Allied Health Sciences
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Chettinad College of Nursing
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>School of Architecture
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>School of Physiotherapy
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1.2s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>School of Pharmaceutical Sciences
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1.4s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>School of Law
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1.6s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>School of Occupational Therapy
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="single-footer-widget single-footer-widget--link-box marbtm50">
                                    <div className="title wow fadeIn" data-wow-duration="2s">
                                        <div className="dotted"></div>
                                        <h3>Campus Life

                                        </h3>
                                    </div>
                                    <div className="footer-widget-links">
                                        <ul>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                                <a href="javascriptvoid:(0)">
                                                    <span className="fa fa-long-arrow-right"></span>About Us
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Our Campuses

                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Common Facilities
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Nomination & Acceptance
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Privacy Policy
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1.2s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Terms and Conditions
                                                </a>
                                            </li>

                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1.4s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Refund Policy
                                                </a>
                                            </li>



                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="single-footer-widget single-footer-widget--link-box">
                                    <div className="title wow fadeIn" data-wow-duration="2s">
                                        <div className="dotted"></div>
                                        <h3>Quick Links

                                        </h3>
                                    </div>
                                    <div className="footer-widget-links">
                                        <ul>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                                <a href="javascriptvoid:(0)">
                                                    <span className="fa fa-long-arrow-right"></span>UGC Mandatory Disclosures
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Research

                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>General Hospital
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Sustainability Practice
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Prospective Student
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1.2s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Alumni
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1.4s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Current Student
                                                </a>
                                            </li>

                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1.6s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Courses Integrate Crosscutting
                                                    Issues
                                                </a>
                                            </li>
                                            <li className="wow fadeIn" data-wow-duration="2s" data-wow-delay="1.8s">
                                                <a href="#">
                                                    <span className="fa fa-long-arrow-right"></span>Contact
                                                </a>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="bottom-inner">
                            <div className="copyright wow fadeIn" data-wow-duration="2s">
                                <p>Copyright &copy; 2025 <a href="#">Chettinad Academy.</a> <br className="d-block d-lg-none" /> All
                                    Rights Reserved.</p>
                            </div>
                            <div className="footer-logo-style1 py-3 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                                <a href="#">
                                    <img src="/chettinad-react/assets/images/care-logo-half-white.png" alt="Awesome Logo" title=""
                                        style={{ width:'200px' }} />
                                </a>
                            </div>
                            <div className="footer-menu wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Term Of Use</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>

        {showScrollTop && (
            <button
            className="scroll-top scroll-to-target"
            onClick={scrollToTop}
            style={{ display: "block" }}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up"
                viewBox="0 0 16 16"
            >
                <path
                fillRule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                />
            </svg>
            </button>
        )}

        <FooterLinks />

        </>
    );
};

export default Footer;