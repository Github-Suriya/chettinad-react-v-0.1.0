import React, { useState, useEffect } from 'react';
import api from '../../api';

const DynamicContentSections = () => {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSections = async () => {
            try {
                const response = await api.get(`${process.env.REACT_APP_API_URL}/api/content-sections`);
                setSections(response.data.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
                // Fallback data
                setSections([
                    {
                        id: 1,
                        title: "Who We Are",
                        subtitle: null,
                        content: [
                            "Chettinad Academy of Research and Education (CARE) was conferred the status of Deemed to be University u/s 3 of the UGC Act 1956 in the year 2008 and since then, it has been contributing significantly to the society as an Institute for higher learning and research in the field of Medicine, Allied Health Sciences and Nursing.",
                            "CARE has been approved by MCI, INC, TNNMC, AICTE, COA, BCI and PCI, accredited with grade 'A++' by NAAC, conferred with 12B status by UGC, accorded SIRO status by DSIR, awarded a star by MHRD's Innovation Cell, appreciated by AICTE for Clean & Smart Campus and ranks 9th in the Country according to UI Green Metric."
                        ],
                        image_url: "https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/bg-image.jpg",
                        layout_type: "image_left",
                        section_class: "living-on-campus-area",
                        order: 1,
                        is_active: true
                    }
                ]);
            }
        };

        fetchSections();
    }, []);

    if (loading) return <div>Loading content sections...</div>;
    if (error) return <div>Error loading sections: {error}</div>;

    return (
        <>
            {sections.map((section) => (
                <section key={section.id} className={section.section_class || 'living-on-campus-area'}>
                    <div className="container">
                        <div className="row">
                            {section.layout_type === 'image_left' && (
                                <>
                                    <div className="col-xl-6">
                                        {section.title && (
                                            <div className="sec-title about-h2">
                                                <h2 className="text-center">{section.title}</h2>
                                            </div>
                                        )}
                                        {section.image_url && (
                                            <div className="living-on-campus-img-box">
                                                <div className="inner">
                                                    <img src={section.image_url} alt={section.title} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="living-on-campus-content-box">
                                            {section.title && (
                                                <div className="sec-title about-h3">
                                                    <h3>{section.title}</h3>
                                                </div>
                                            )}
                                            <div className="text">
                                                {section.content.map((paragraph, index) => (
                                                    <p key={index}>{paragraph}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {section.layout_type === 'image_right' && (
                                <>
                                    <div className="col-xl-6">
                                        <div className="living-on-campus-content-box">
                                            {section.title && (
                                                <div className="sec-title about-h3">
                                                    <h3>{section.title}</h3>
                                                </div>
                                            )}
                                            <div className="text">
                                                {section.content.map((paragraph, index) => (
                                                    <p key={index}>{paragraph}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        {section.title && (
                                            <div className="sec-title about-h2">
                                                <h2 className="text-center">{section.title}</h2>
                                            </div>
                                        )}
                                        {section.image_url && (
                                            <div className="living-on-campus-img-box">
                                                <div className="inner">
                                                    <img src={section.image_url} alt={section.title} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}

                            {section.layout_type === 'full_width' && (
                                <div className="col-12">
                                    {section.title && (
                                        <div className="sec-title">
                                            <h2 className="text-center">{section.title}</h2>
                                        </div>
                                    )}
                                    {section.image_url && (
                                        <div className="text-center mb-4">
                                            <img src={section.image_url} alt={section.title} className="img-fluid" />
                                        </div>
                                    )}
                                    <div className="content">
                                        {section.content.map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
};

export default DynamicContentSections;