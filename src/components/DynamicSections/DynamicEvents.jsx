import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DynamicEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/events`);
        if (response.data.status) {
          // Ensure we have exactly 3 events
          const eventsData = response.data.data;
          if (eventsData.length >= 3) {
            setEvents(eventsData.slice(0, 3));
          } else {
            // If not enough events, fill with placeholders
            const placeholdersNeeded = 3 - eventsData.length;
            const placeholders = Array(placeholdersNeeded).fill().map((_, index) => ({
              id: `placeholder-${index}`,
              title: 'Upcoming Event',
              date: new Date(),
              start_time: '00:00',
              end_time: '00:00',
              link: '#',
              style_class: ''
            }));
            setEvents([...eventsData, ...placeholders]);
          }
        } else {
          setError(response.data.message || 'Failed to load events');
          setEvents([]);
        }
      } catch (err) {
        setError(err.message);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="event-style1-content-box">
        <div className="text-center py-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="event-style1-content-box">
        <div className="alert alert-danger text-center">
          {error}
        </div>
      </div>
    );
  }

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'pm' : 'am';
    const hour12 = hour % 12 || 12;
    return `${hour12}.${minutes} ${ampm}`;
  };

  return (
    <div className="event-style1-content-box">
      <ul>
        {events.map((event, index) => (
          <li key={event.id}>
            <div className="overlay-icon">
              <span className="icon-play-button-1"></span>
            </div>
            <div className={`single-event-box-style1 ${event.style_class || ''}`}>
              <div className="date-box">
                <h2>{new Date(event.date).getDate()}</h2>
                <p>
                  {new Date(event.date).toLocaleString('default', { month: 'short' })}, 
                  {new Date(event.date).getFullYear()}
                </p>
              </div>
              <div className="title-box">
                <div className="event-time">
                  <span className="icon-clock"></span>
                  <p>
                    {formatTime(event.start_time)} - {formatTime(event.end_time)}
                  </p>
                </div>
                <h3>
                  <a href={event.link}>
                    {event.title}
                  </a>
                </h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicEvents;