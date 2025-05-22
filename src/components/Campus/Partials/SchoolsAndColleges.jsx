const schools = [
    {
        img: "pharma.webp",
        title: "Chettinad School of Pharmaceutical Sciences"
    },
    {
        img: "physiotherap.jpg",
        title: "Chettinad School of Physiotherapy"
    },
    {
        img: "nursing.webp",
        title: "Chettinad College of Nursing"
    },
    {
        img: "Architecture.webp",
        title: "Chettinad School of Architecture"
    },
    {
        img: "law.webp",
        title: "Chettinad School of Law"
    },
    {
        img: "occu_therapy.jpg",
        title: "Chettinad School of Occupational Therapy"
    },
    {
        img: "medicine.webp",
        title: "Chettinad Faculty of Medicine"
    },
    {
        img: "Allied-Health-Science.webp",
        title: "Chettinad Faculty of Allied Health Sciences"
    }
];

const SchoolsAndColleges = () => {
    return (
        <section>
            <div className="container">
                <div className="mt-3 mb-5 ac-overview pt_80 pb_80">
                    <h3 className="theme-heading-two wow fadeIn" data-wow-duration="2s">Schools & Colleges</h3>
                    <div className="row justify-content-center">
                        {schools.map((school, index) => (
                            <div key={school.img} className="col-lg-4 col-sm-6 col-md-4 mb-4 wow fadeIn" 
                                 data-wow-duration="2s" data-wow-delay={`${0.2 * (index % 3)}s`}>
                                <div className="card facility-card">
                                    <div className="overflow-hidden">
                                        <img src={`/chettinad-react/assets/images/${school.img}`} 
                                             className="card-img-top facility-img" alt="facility" />
                                    </div>
                                    <div className="card-body align-items-center d-flex justify-content-center">
                                        <p className="college_title mb-0">{school.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchoolsAndColleges;