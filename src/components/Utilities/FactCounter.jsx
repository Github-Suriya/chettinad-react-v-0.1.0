import React, { useState, useEffect } from 'react';
import api from '../../api';
import Counter from "./Counter";

const FactCounter = () => {
  const [counters, setCounters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCounters = async () => {
      try {
        const response = await api.get(`${process.env.REACT_APP_API_URL}/api/fact-counters`);
        if (response.data.status) {
          setCounters(response.data.data);
        } else {
          setError(response.data.message);
          // Fallback data
          setCounters([
            {
              id: 1,
              title: 'History of High Achievers',
              end_value: 2500,
              duration: 3000,
              order: 1,
              is_active: true
            },
            // Add more fallback counters as needed
          ]);
        }
      } catch (err) {
        setError(err.message);
        // Fallback data
        setCounters([
          {
            id: 1,
            title: 'History of High Achievers',
            end_value: 2500,
            duration: 3000,
            order: 1,
            is_active: true
          },
          // Add more fallback counters as needed
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCounters();
  }, []);

  if (loading) return <div>Loading counters...</div>;
  if (error) return <div>Error loading counters: {error}</div>;

  return (
    <ul className="fact-counter-box">
      {counters.map((counter) => (
        <li key={counter.id} className="single-fact-counter">
          <div className="title-holder">
            <div className="count-outer count-box">
              <Counter 
                end={counter.end_value} 
                duration={counter.duration} 
              />
            </div>
            <h3>{counter.title}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FactCounter;