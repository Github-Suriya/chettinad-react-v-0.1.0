import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const facilities = [
    {
        img: "eco-friendly.webp",
        title: "Eco-friendly Campus",
        text: "The campus promotes sustainability with battery-operated vehicles, bicycles, and water management. Extensive green spaces and solar-powered infrastructure enhance its eco-friendly environment."
    },
    {
        img: "prac-lab.webp",
        title: "Practical Laboratory",
        text: "Departments feature well-equipped, ventilated labs providing students with hands-on training in their specialties. These facilities ensure practical exposure and skill development."
    },
    {
        img: "lecture.webp",
        title: "Lecture Theatre",
        text: "Eleven modern gallery-style lecture theatres equipped with advanced audio-visual aids enhance the learning experience. These theatres accommodate various academic events and lectures."
    },
    {
        img: "auditorium.webp",
        title: "Auditorium",
        text: "The air-conditioned auditorium, with international-standard acoustics, seats over 1,500, hosting major university functions. A mini auditorium for smaller events accommodates about 400 attendees."
    },
    {
        img: "library.webp",
        title: "Library",
        text: "The 40,000 sq. ft. central library accommodates 500 readers and houses over 52,264 books, magazines, and journals. It offers extensive resources for academic research and study."
    },
    {
        img: "hostel.webp",
        title: "Hostel",
        text: "CARE provides comfortable, secure hostels with spacious, well-ventilated rooms. The mess offers hygienic multi-cuisine meals catering to diverse tastes."
    },
    {
        img: "transport.jpg",
        title: "Transport",
        text: "Air-conditioned buses provide comfortable transportation for students residing in and around Chennai. This ensures easy commuting to the institute and back."
    },
    {
        img: "food-court.webp",
        title: "Food Court",
        text: "The campus food court serves a variety of hygienic, quality food for students and staff. Amenities include a bakery, ice cream parlor, fruit juice shop, and Café Coffee Day."
    },
    {
        img: "moot-court.webp",
        title: "Moot Court",
        text: "Moot Court basically means a replica of a real court where legal proceedings, trials take place and act as professionals and take up all the responsibilities."
    },
    {
        img: "arch_studio.webp",
        title: "Architecture Studio",
        text: "Architecture studio provides students with a preliminary understanding of architecture design and introduces them to key issues that underpin the social and physical construction of the built environment."
    },
    {
        img: "atm.webp",
        title: "Banks & ATM.webp",
        text: "The campus offers comprehensive banking facilities, including an AXIS Bank extension counter. ATMs from AXIS, ICICI, and HDFC banks ensure convenient financial services."
    },
    {
        img: "facilities_10.jpg",
        title: "Attendance Monitoring",
        text: "A biometric and RFID based Attendance Management System with fingerprint recognition is installed in all lecture halls. This ensures accurate tracking of student attendance across various facilities."
    }
];

const Facilities = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
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
        <section className="facility_detail_section pt_80 pb_80">
            <div className="container mt-5">
                <h3 className="mb-4 wow fadeIn theme-heading-two" data-wow-duration="2s">Explore Our Campus</h3>
                
                <Slider {...settings} className="facility-carousel">
                    {facilities.map((facility, index) => (
                        <div key={facility.img} className="px-2">
                            <div className="card card_fac wow fadeIn" data-wow-duration="2s" data-wow-delay={`${0.2 * (index % 3)}s`}>
                                <img src={`/chettinad-react/assets/images/${facility.img}`} alt={facility.title} />
                                <div className="card-body card_fac_body">
                                    <h5 className="card-title card_fac_title">{facility.title}</h5>
                                    <p className="card-text card_fac_text">
                                        {facility.text}
                                        <a href="#" className="view-button align-items-center d-flex justify-content-center mt-3">View More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Facilities;