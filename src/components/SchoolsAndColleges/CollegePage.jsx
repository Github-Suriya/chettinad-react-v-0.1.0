import React from 'react';
import BannerSection from './Partials/BannerSection';
import LatestNewsSection from './Partials/LatestNewsSection';
import OverviewSection from './Partials/OverviewSection';
import './index.css';
import DynamicFaqSection from '../DynamicSections/DynamicFaqSection';

const CollegePage = () => {
  return (
    <div className="college-page">
        <BannerSection />
        <LatestNewsSection />
        <OverviewSection />
    </div>
  );
};

export default CollegePage;