import { useEffect } from 'react';
import Swiper from 'swiper';

const Overview = () => {
    useEffect(() => {
        new Swiper(".campusSwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 30,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: false,
            },
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
        });
    }, []);

    const toggleReadMore = () => {
        const readMoreContent = document.getElementById('read_more_content');
        const readMoreBtn = document.getElementById('read_more_btn');
        if (readMoreContent.style.display === 'none') {
            readMoreContent.style.display = 'block';
            readMoreBtn.style.display = 'none';
        } else {
            readMoreContent.style.display = 'none';
            readMoreBtn.style.display = 'inline-block';
        }
    };

    return (
        <section className="overview_section pt_80 pb_80">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ac-overview">
                            <div className="pera-dec">
                                <h3 className="wow fadeIn" data-wow-duration="2s">Campus at a Glance</h3>
                                <div className="row d-flex justify-content-center align-items-center gap-5">
                                    <div className="col-md-6 col-lg-5 col-12 wow slideInUp" data-wow-duration="2s">
                                        <p>
                                            <span style={{ fontSize: 'var(--thm-para-font-size)' }}>
                                                Chettinad Academy of Research and Education
                                            </span> has a 100 acre lush green campus at Kelambakkam on Old Mahabalipuram Road
                                            (OMR), popularly called the IT corridor of Chennai. Situated around 30 kms away
                                            from Chennai Raj Bhavan, the campus is serene and tranquil sans the hustle and
                                            bustle of the city and yet having access to all the modern day amenities.
                                            Sustainable future being the ultimate goal, all efforts go in to recycle water
                                            and to utilize rainwater through recharge wells and ponds, use of renewable
                                            energy sources is maximized through deployment of solar power panels, exclusive
                                            vehicle-free green zones are earmarked and are provided with bicycles for
                                            mobility.
                                        </p>
                                        <div className="my-3 text-lg-start text-center">
                                            <button id="read_more_btn" onClick={toggleReadMore} className="text-decoration-underline">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-5 col-12 wow slideInUp" data-wow-duration="2s">
                                        <div className="university-life">
                                            <div className="image diagonal-stripes">
                                                <div className="swiper campusSwiper">
                                                    <div className="swiper-wrapper">
                                                        {['atrium', 'auditorium', 'food-court', 'sports', 'hostel', 'gym', 'library', 'classroom'].map((img) => (
                                                            <div className="swiper-slide" key={img}>
                                                                <img src={`/chettinad-react/assets/images/${img}.webp`} alt={`${img} slide`} />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;