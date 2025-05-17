import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FacultyMembers = () => {
  const { slug } = useParams();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [facultyData, setFacultyData] = useState({
    title: 'Faculty Members',
    groups: [],
    itemsPerRow: 4, // Default to 4 items per row
    loading: true
  });

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/schoolsandcolleges/${slug}/faculty`);
        const data = response.data;
        
        setFacultyData({
          title: data.title || 'Faculty Members',
          groups: data.groups || [],
          itemsPerRow: data.items_per_row || 4,
          loading: false
        });
        
        // Set first group as active by default if exists
        if (data.groups?.length > 0) {
          setActiveAccordion(data.groups[0].id);
        }
      } catch (error) {
        console.error('Error fetching faculty data:', error);
        setFacultyData({
          title: 'Faculty Members',
          groups: [],
          itemsPerRow: 4,
          loading: false
        });
      }
    };

    fetchFacultyData();
  }, [slug]);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  if (facultyData.loading) {
    return <></>;
  }

  if (facultyData.groups.length === 0) {
    return <></>;
  }

  // Calculate column class based on items per row
  const getColumnClass = () => {
    const cols = 12 / facultyData.itemsPerRow;
    return `col-md-${cols} mb-4 col-10`;
  };

  return (
    <section className="faculty_section pb_80" id="faculty">
      <div className="container">
        <div className="row pb-5">
          <div className="col-12 wow fadeIn" data-wow-duration="2s">
            <h4 className="theme-heading">{facultyData.title}</h4>
          </div>
        </div>
        
        <div className="faculty-accordion">
          {facultyData.groups.map((group) => (
            <div className="accordion-item" key={group.id}>
              <h2 className="accordion-header">
                <button 
                  className={`accordion-button ${activeAccordion === group.id ? '' : 'collapsed'}`}
                  onClick={() => toggleAccordion(group.id)}
                  aria-expanded={activeAccordion === group.id}
                  aria-controls={`collapse-${group.id}`}
                >
                  {group.title}
                </button>
              </h2>
              <div 
                id={`collapse-${group.id}`} 
                className={`accordion-collapse collapse ${activeAccordion === group.id ? 'show' : ''}`}
              >
                <div className="accordion-body">
                  <div className="row justify-content-center">
                    {group.members.map((member, index) => (
                      <div className={getColumnClass()} key={index}>
                        <div className="single-faculty-item">
                          <img 
                            className="img-fluid facluty-main-image" 
                            loading="lazy" 
                            src={`${process.env.REACT_APP_API_URL}/public${member.image}`}
                            alt={member.name}
                          />
                          <h3 className="faculty-title">{member.name}</h3>
                          <p className="faculty-designation">{member.designation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyMembers;