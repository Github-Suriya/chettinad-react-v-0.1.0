import React from 'react';
import BannerSection from './Partials/BannerSection';
import LatestNewsSection from './Partials/LatestNewsSection';
import OverviewSection from './Partials/OverviewSection';
import './index.css';
import PrincipalSpeakSection from './Partials/PrincipalSpeakSection';
import LogoSection from './Partials/LogoSection';
import FacultyMembers from './Partials/FacultyMembers';
import FacilitiesSection from './Partials/FacilitiesSection';
import StudentLifeSection from './Partials/StudentLifeSection';
import FindOutMoreSection from './Partials/FindOutMoreSection';
import NewsEventsSection from './Partials/NewsEventsSection';

const CollegePage = () => {
  return (
    <div className="college-page">
        <BannerSection />
        <LatestNewsSection />
        <OverviewSection />
        <PrincipalSpeakSection />
        <LogoSection />
        <FacultyMembers />
        <FacilitiesSection />
        <StudentLifeSection />
        <NewsEventsSection />
        <FindOutMoreSection />
    </div>
  );
};

export default CollegePage;