import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filecontext } from '../reactrouter/FileContext';
import { Link } from 'react-router-dom';
import { AudioContext } from '../AudioContext';
import './../LoadingPage.css';

const LoadingPage = () => {
  const navigate = useNavigate();
  const [loadingComplete, setLoadingComplete] = useState(false);
  const { startAudio, audioStarted } = useContext(AudioContext);

  useEffect(() => {
    setTimeout(() => {
      setLoadingComplete(true);
    }, 2000); 
  }, []);

  const handlePokeballClick = () => {
    console.log('Pokeball clicked!');
    if (!audioStarted) {
      startAudio();
    }
    navigate('/login');
  };

  return (
    <div className="loading-page">
      {!loadingComplete ? (
        <div className="progress-bar" />
      ) : (
        <button className="pokeball" onClick={handlePokeballClick} />
      )}
    </div>
  );
};

export default LoadingPage;

