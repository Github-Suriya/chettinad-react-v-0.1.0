import React, { useEffect } from 'react';
import './KelambakkamCampus.css';
import Banner from './Partials/Banner';
import Overview from './Partials/Overview';
import SchoolsAndColleges from './Partials/SchoolsAndColleges';
import VisionMission from './Partials/VisionMission';
import Facilities from './Partials/Facilities';
import Apply from './Partials/Apply';
import Contact from './Partials/Contact';

const KelambakkamCampus = () => {
    useEffect(() => {
        // Initialize WOW.js if needed
        if (typeof window.WOW !== 'undefined') {
            new window.WOW().init();
        }

        // Initialize counters
        const counters = document.querySelectorAll(".counter");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.textContent, 10);
                    let count = 1;
                    const speed = Math.max(5, 50 / target);
                    
                    const updateCounter = () => {
                        counter.textContent = count;
                        if (count < target) {
                            count++;
                            setTimeout(updateCounter, speed);
                        }
                    };
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="kelambakkam-campus">
            <Banner />
            <Overview />
            <SchoolsAndColleges />
            <VisionMission />
            <Facilities />
            <Apply />
            <Contact />
        </div>
    );
};

export default KelambakkamCampus;