const Apply = () => {
    const steps = [
        {
            number: 1,
            title: "Choose Your Campus",
            text: "➡️ Select your preferred location: Kelambakkam"
        },
        {
            number: 2,
            title: "Pick Your Course",
            text: "➡️ Explore a wide range of programs and choose the one that suits your career goals."
        },
        {
            number: 3,
            title: "Apply & Get Started!",
            text: "➡️ Your journey begins here – make the right choice today!"
        }
    ];

    return (
        <div className="apply-area py-3">
            <div className="container">
                <div className="row align-items-center wow slideInUp">
                    <div className="col-lg-6 col-md-6 col-12 wow slideInUp">
                        <div className="apply-image">
                            <div className="image">
                                <img src="../assets/images/apply-img.jpg" alt="apply-bg" />
                            </div>
                            {[...Array(6)].map((_, i) => (
                                <span key={i} className={`bubble bubble-${i + 1}`}></span>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 wow slideInUp">
                        <div className="apply-content">
                            <div className="title text-center wow fadeIn" data-wow-duration="2s">
                                <h2>How To Apply At CARE</h2>
                            </div>
                            <div className="apply-roadmap">
                                {steps.map((step, index) => (
                                    <div key={step.number} className="apply-content-card d-flex gap-3 wow fadeIn" 
                                         data-wow-duration="2s" data-wow-delay={`${0.2 * index}s`}>
                                        <div className="roadmap-step d-flex flex-column align-items-center">
                                            <div className="step-number-icon d-flex align-items-center">
                                                <div className="step-number">{step.number}</div>
                                            </div>
                                            {index < steps.length - 1 && <div className="roadmap-line"></div>}
                                        </div>
                                        <div className="content">
                                            <h3>{step.title}</h3>
                                            <p>{step.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <ul className="list-unstyled ps-5 mb-0 apply-btn wow fadeIn" data-wow-duration="2s">
                                <li className="d-inline-block">
                                    <a className="text-decoration-none default-btn" href="https://admission.care.edu.in/" target="_blank" rel="noreferrer">
                                        Apply Now <i className="flaticon-right-arrow"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apply;