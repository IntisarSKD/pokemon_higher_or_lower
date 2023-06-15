// import React from 'react';
// import loadingAnimation from '../images/pikachu.gif';

// const LoadingComponent = () => {
//   return (
//     <div className="loading-overlay">
//       <img src={loadingAnimation} alt="Loading Animation" />
//     </div>
//   );
// };

// export default LoadingComponent;

import React, { useEffect, useState } from 'react';
import loadingAnimation from '../images/pikachu.gif';

const LoadingComponent = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-overlay">
        <img src={loadingAnimation} alt="Loading Animation" className="loading-animation" />
      </div>
    );
  }

  return null;
};

export default LoadingComponent;

