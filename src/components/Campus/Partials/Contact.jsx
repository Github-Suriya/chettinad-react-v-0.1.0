const Contact = () => {
    const contactInfo = [
        {
            icon: "location",
            text: "Chettinad Health City, Kelambakkam, Chennai"
        },
        {
            icon: "mail",
            text: "enquiry@care.edu.in"
        },
        {
            icon: "phone",
            text: "+91 844 789 2022"
        }
    ];

    return (
        <section className="contact_container pt_80 pb_80">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-5 col-12 wow slideInUp mb-3" data-wow-duration="2s">
                        <div className="card contact-card shadow-lg">
                            <div className="contact fw-bold pt_80 p-5">
                                <h3 className="fw-bold d-flex justify-content-center align-items-center text-white mt-4 mb-4">Get in touch</h3>
                                {contactInfo.map((item, index) => (
                                    <div className="d-flex align-items-start mt-4" key={index}>
                                        <img src={`/chettinad-react/assets/images/${item.icon}.png`} alt={item.icon} className="me-3 icon" />
                                        <div>
                                            <p className="mt-1">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-12 mb-3 wow slideInUp" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="contact p-1">
                            <iframe 
                                src="https://www.google.com/maps/d/embed?mid=1SvC_i9HR8u4ihVxEP6kmxEztA2N_7fc&ehbc=2E312F&noprof=1" 
                                height="400" 
                                style={{ width: '100%' }}
                                title="Campus Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;