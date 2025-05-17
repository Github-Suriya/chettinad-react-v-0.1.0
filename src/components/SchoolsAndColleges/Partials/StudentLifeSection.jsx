import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StudentLifeSection = () => {
    const { slug } = useParams();
    const [sectionData, setSectionData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/schoolsandcolleges/${slug}/student-life`);
                setSectionData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    if (loading) return <></>;
    if (error) return <div className="text-center py-5 text-danger">Error: {error}</div>;
    if (sectionData.content.length === 0) {
        return <></>;
    }

    return (
        <section className="student_life_section pt_80 pb_80" id="student-life">
            <div className="container">
                <div className="row pb-5">
                    <div className="col-12 wow fadeIn" data-wow-duration="2s">
                        <h4 className="theme-heading">{sectionData.title}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <div className="student-life-gallery">
                            <div className="position-relative">
                                <div className="position-relative first-img-wrapper">
                                    <img 
                                        src={`${process.env.REACT_APP_API_URL}/public${sectionData.primary_image}` || '/default-images/student-life-1.webp'} 
                                        alt="Student life at campus" 
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="second-img">
                                    <div className="icon-wrapper">
                                        <a 
                                            href={sectionData.additional_data?.button_link || '#'} 
                                            className="btn-primary"
                                            aria-label="View more student life photos"
                                        >
                                            <i className="fa fa-link"></i>
                                        </a>
                                    </div>
                                    <div className="second-img-wrapper">
                                        <img 
                                            src={`${process.env.REACT_APP_API_URL}/public${sectionData.additional_data.secondary_image}` || '/default-images/student-life-2.webp'} 
                                            alt="Campus activities" 
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0">
                        <div className="student-life-content">
                            <div dangerouslySetInnerHTML={{ __html: sectionData.content }} />
                            <div className="mt-3">
                                <a 
                                    href={sectionData.additional_data?.button_link || '#'} 
                                    className="btn-one"
                                >
                                    <span className="txt">
                                        {sectionData.additional_data?.button_text || 'Learn More'} 
                                        <i className="ms-2 fa fa-caret-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentLifeSection;