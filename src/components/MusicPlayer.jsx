import { useState, useRef } from "react";
import song1 from "../assets/sounds/song1.mp3";
import song1Img from "../assets/sounds/song1.jpg";

const songs = [
  {
    id: 1,
    title: "I Lay My Love on You",
    artist: "Westlife",
    src: song1,
    image: song1Img,
  },
];

export default function MusicPlayer() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    setCurrentSong((prev) => (prev + 1) % songs.length);
  };

  const handlePrev = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 bg-gradient-to-br from-pink-900 via-pink-800 to-pink-700 rounded-3xl shadow-2xl border border-pink-400/30 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-pink-100 mb-4 text-center">Our Special Songs</h1>

        <div className="flex flex-col items-center mb-6 w-full">
          <img
            src={songs[currentSong].image}
            alt={songs[currentSong].title}
            className="w-48 h-48 object-cover rounded-xl shadow-md border border-pink-400 mb-4"
          />
          <h2 className="text-xl font-semibold text-pink-100">{songs[currentSong].title}</h2>
          <p className="text-sm text-pink-300 mb-4">{songs[currentSong].artist}</p>

          <audio
            ref={audioRef}
            src={songs[currentSong].src}
            onEnded={() => setIsPlaying(false)}
          />
        </div>

        <div className="flex items-center justify-center gap-6 mb-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-pink-500 hover:bg-pink-400 rounded-full flex items-center justify-center text-white text-lg shadow-md transition-all"
          >
            ◀
          </button>
          <button
            onClick={togglePlay}
            className="w-14 h-14 bg-pink-500 hover:bg-pink-400 rounded-full flex items-center justify-center text-white text-2xl shadow-md transition-all"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-pink-500 hover:bg-pink-400 rounded-full flex items-center justify-center text-white text-lg shadow-md transition-all"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
