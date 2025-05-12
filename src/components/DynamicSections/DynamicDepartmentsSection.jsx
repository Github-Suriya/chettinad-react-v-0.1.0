import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DynamicDepartmentsSection = () => {
  const [departmentData, setDepartmentData] = useState({
    leftColumn: [],
    rightColumn: [],
    mainImage: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartmentData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/department-items`);
        if (response.data.status) {
          setDepartmentData({
            leftColumn: response.data.data.left_column,
            rightColumn: response.data.data.right_column,
            mainImage: response.data.data.main_image
          });
        } else {
          setError(response.data.message);
          // Fallback data
          setDepartmentData({
            leftColumn: [
              { id: 1, title: 'Medicine', link: '#', order: 1 },
              { id: 2, title: 'Dental', link: '#', order: 2 },
              { id: 3, title: 'Engineering', link: '#', order: 3 },
              { id: 4, title: 'Allied Health Sciences', link: '#', order: 4 },
              { id: 5, title: 'Nursing', link: '#', order: 5 }
            ],
            rightColumn: [
              { id: 6, title: 'Architecture', link: '#', order: 1 },
              { id: 7, title: 'Pharmaceutical Sciences', link: '#', order: 2 },
              { id: 8, title: 'Physiotherapy', link: '#', order: 3 },
              { id: 9, title: 'Occupational Therapy', link: '#', order: 4 },
              { id: 10, title: 'Law', link: '#', order: 5 }
            ],
            mainImage: 'https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/chettinad_1.png'
          });
        }
      } catch (err) {
        setError(err.message);
        // Fallback data
        setDepartmentData({
          leftColumn: [
            { id: 1, title: 'Medicine', link: '#', order: 1 },
            { id: 2, title: 'Dental', link: '#', order: 2 },
            { id: 3, title: 'Engineering', link: '#', order: 3 },
            { id: 4, title: 'Allied Health Sciences', link: '#', order: 4 },
            { id: 5, title: 'Nursing', link: '#', order: 5 }
          ],
          rightColumn: [
            { id: 6, title: 'Architecture', link: '#', order: 1 },
            { id: 7, title: 'Pharmaceutical Sciences', link: '#', order: 2 },
            { id: 8, title: 'Physiotherapy', link: '#', order: 3 },
            { id: 9, title: 'Occupational Therapy', link: '#', order: 4 },
            { id: 10, title: 'Law', link: '#', order: 5 }
          ],
          mainImage: 'https://generalcwdbucket.s3.us-east-1.amazonaws.com/assets/images/chettinad_1.png'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDepartmentData();
  }, []);

  if (loading) return <div>Loading departments...</div>;
  if (error) return <div>Error loading departments: {error}</div>;

  return (
    <section className="departments-area">
      <div className="container">
        <div className="sec-title text-center">
          <h2>What's your Interest</h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-3">
            {departmentData.leftColumn.map((item, index) => (
              <div 
                key={item.id} 
                className={`single-departments-box ${index === 0 ? 'marginbottom' : ''} text-center wow fadeInLeft`}
                data-wow-duration="0.5s"
                data-wow-delay={`${0.1 + (index * 0.1)}s`}
              >
                <div className={`text-holder ${index === 0 ? 'p-0' : ''}`}>
                  <a href={item.link}>
                    {item.title} 
                    <span 
                      className="fa fa-arrow-right" 
                      style={{ float: 'right', margin: '13px 0 0 0' }}
                    ></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="col-xl-4 col-lg-3">
            {departmentData.rightColumn.map((item, index) => (
              <div 
                key={item.id} 
                className={`single-departments-box ${index === 0 ? 'marginbottom' : ''} text-center wow fadeInRight`}
                data-wow-duration="0.5s"
                data-wow-delay={`${0.1 + (index * 0.1)}s`}
              >
                <div className={`text-holder ${index === 0 ? 'p-0' : ''}`}>
                  <a href={item.link}>
                    {item.title} 
                    <span 
                      className="fa fa-arrow-right" 
                      style={{ float: 'right', margin: '13px 0 0 0' }}
                    ></span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="col-xl-4 col-lg-6">
            <div className="departments-img-box">
                <img src={`${process.env.REACT_APP_API_URL}/public${departmentData.mainImage}`} alt="Departments" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicDepartmentsSection;