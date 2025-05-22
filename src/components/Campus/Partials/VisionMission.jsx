import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const galleryImages = [
    "4Z9A8631", "4Z9A8703", "4Z9A8794", "Chettinad_.0027", 
    "DSC2935", "DSC04650", "DSC05034"
];

const VisionMission = () => {
    const swiperSettings = {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        modules: [Autoplay],
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    };

    return (
        <section className="parralex_section explore-full-image">
            <div className="explore-text">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-12 d-flex align-items-center justify-content-center wow fadeIn" data-wow-duration="2s">
                            <h3 className="block-title bt-left-aligned py-5 mobile-star-background position-relative">Step into CARE</h3>
                        </div>
                        <div className="col-md-6 star-background">
                            <p className="wow fadeIn fw-bold" data-wow-duration="2s" data-wow-delay="0.2s">
                                Discover a campus where learning meets innovation. Spread across 100 acres of greenery, CARE
                                offers a modern, student-friendly environment with world-class infrastructure, advanced
                                research facilities, and sustainable initiatives.
                            </p>
                            <p className="wow fadeIn fw-bold" data-wow-duration="2s" data-wow-delay="0.4s">
                                Whether it's cutting-edge technology, interactive learning spaces, or a vibrant student
                                life, CARE provides the perfect foundation for academic and personal growth. Experience
                                excellence at CARE!
                            </p>
                        </div>
                    </div>
                    <div className="row wow fadeIn" data-wow-duration="2s">
                        <div className="ac-overview p-0">
                            <div className="pera-dec">
                                <Swiper {...swiperSettings} className="gallery-images-carousel">
                                    {galleryImages.map(img => (
                                        <SwiperSlide key={img}>
                                            <div className="gallery_single_item">
                                                <img 
                                                    src={`/chettinad-react/assets/images/${img}.webp`} 
                                                    alt="gallery_image" 
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;