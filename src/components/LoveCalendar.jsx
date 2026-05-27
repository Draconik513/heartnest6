import { useState } from 'react';
import januaryImg from '../assets/images/calendar/january.jpg';
import februaryImg from '../assets/images/calendar/february.jpg';
import marchImg from '../assets/images/calendar/march.jpg';
import aprilImg from '../assets/images/calendar/april.jpg';
import mayImg from '../assets/images/calendar/may.jpg';
import juneImg from '../assets/images/calendar/june.jpg';
import julyImg from '../assets/images/calendar/july.jpg';
import augustImg from '../assets/images/calendar/august.jpg';
import septemberImg from '../assets/images/calendar/september.jpg';
import octoberImg from '../assets/images/calendar/october.jpg';
import novemberImg from '../assets/images/calendar/november.jpg';
import decemberImg from '../assets/images/calendar/december.jpg';

export default function LoveCalendar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

const favoritePhotos = [
  { month: "January", image: januaryImg },
  { month: "February", image: februaryImg },
  { month: "March", image: marchImg },
  { month: "April", image: aprilImg },
  { month: "May", image: mayImg },
  { month: "June", image: juneImg },
  { month: "July", image: julyImg },
  { month: "August", image: augustImg },
  { month: "September", image: septemberImg },
  { month: "October", image: octoberImg },
  { month: "November", image: novemberImg },
  { month: "December", image: decemberImg },
];
  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Toggle off
    } else {
      setActiveIndex(index); // Set as active
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl font-bold text-pink-200 mb-8 text-center">Our Love Calendar</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoritePhotos.map((photo, index) => (
          <div 
            key={index}
            className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-pink-500/30 transition-all duration-300 cursor-pointer`}
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="aspect-[4/3] relative">
              <img 
                src={photo.image} 
                alt={photo.month} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 left-0 bg-pink-700 text-pink-100 px-3 py-1 rounded-br-lg text-sm">
                {photo.month}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative flex items-center justify-center">
            {/* Blurred background */}
            <img
              src={selectedPhoto.image}
              alt="blur"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
              style={{ filter: 'blur(16px)', transform: 'scale(1.05)', zIndex: 0 }}
            />
            {/* Full photo */}
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.month}
              className="relative z-10 max-h-[95vh] max-w-[95vw] w-auto h-auto object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            className="absolute top-4 right-4 z-20 text-white text-3xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition"
            onClick={() => setSelectedPhoto(null)}
          >
            ✕
          </button>
          <div className="absolute bottom-6 z-20 bg-pink-700 text-pink-100 px-4 py-2 rounded-full text-sm font-semibold">
            {selectedPhoto.month}
          </div>
        </div>
      )}
    </div>
  );
}

