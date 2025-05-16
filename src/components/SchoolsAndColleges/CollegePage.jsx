import React from 'react';
import BannerSection from './Partials/BannerSection';
import LatestNewsSection from './Partials/LatestNewsSection';
import OverviewSection from './Partials/OverviewSection';
import './index.css';
import PrincipalSpeakSection from './Partials/PrincipalSpeakSection';
import LogoSection from './Partials/LogoSection';

const CollegePage = () => {
  return (
    <div className="college-page">
        <BannerSection />
        <LatestNewsSection />
        <OverviewSection />
        <PrincipalSpeakSection />
        <LogoSection />
    </div>
  );
};

export default CollegePage;