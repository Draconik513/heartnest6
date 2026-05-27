

import { useState, useEffect, useRef } from 'react';
import birthdaySound from '../assets/sounds/birthday.mp3';
import countdownSound from '../assets/sounds/countdown.mp3';

export default function Countdown() {
  const [count, setCount] = useState(3);
  const countdownAudioRef = useRef(null);
  const birthdayAudioRef = useRef(null);

  useEffect(() => {
    countdownAudioRef.current = new Audio(countdownSound);
    countdownAudioRef.current.volume = 0.7;
    birthdayAudioRef.current = new Audio(birthdaySound);
    birthdayAudioRef.current.volume = 0.5;
  }, []);

  useEffect(() => {
    let timer;
    if (count > 0) {
      countdownAudioRef.current?.play().catch(() => {});
      timer = setTimeout(() => {
        countdownAudioRef.current?.pause();
        countdownAudioRef.current.currentTime = 0;
        setCount(count - 1);
      }, 1000);
    } else if (count === 0) {
      countdownAudioRef.current?.pause();
      birthdayAudioRef.current?.play().catch(() => {});
    }
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl font-bold text-pink-300 animate-pulse">
          {count > 0 ? count : '🎉'}
        </div>
      </div>
    </div>
  );
}
