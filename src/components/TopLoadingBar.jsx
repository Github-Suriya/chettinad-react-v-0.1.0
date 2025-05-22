import React from 'react';
import './TopLoadingBar.css';

const TopLoadingBar = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="top-loading-bar">
      <div className="loading-progress"></div>
    </div>
  );
};

export default TopLoadingBar;