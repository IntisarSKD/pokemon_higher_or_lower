import React from 'react';
import loadingAnimation from './pikachu.gif';

const LoadingComponent = () => {
  return (
    <div className="loading-overlay">
      <img src={loadingAnimation} alt="Loading Animation" />
    </div>
  );
};

export default LoadingComponent;
