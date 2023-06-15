import React, { createContext, useState, useEffect } from 'react';
import title from './title.mp3';
export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState(new Audio('./title.mp3'));
  const [audioStarted, setAudioStarted] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     audio.pause();
  //   };
  // }, [audio]);

  const startAudio = () => {
    if (audioStarted) {
      audio.play();
      audio.loop = true;
      setAudioStarted(true);
    }
  };

  return (
    <AudioContext.Provider value={{ startAudio, audio, setAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
