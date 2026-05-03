import { useState } from "react";

import january1 from "../assets/images/memories/january1.jpg";
import january2 from "../assets/images/memories/january2.jpg";
import january3 from "../assets/images/memories/january3.jpg";
import january4 from "../assets/images/memories/january4.jpg";
import january5 from "../assets/images/memories/january5.jpg";

import february1 from "../assets/images/memories/february1.jpg";
import february2 from "../assets/images/memories/february2.jpg";
import february3 from "../assets/images/memories/february3.jpg";
import february4 from "../assets/images/memories/february4.jpg";
import february5 from "../assets/images/memories/february5.jpg";

import march1 from "../assets/images/memories/march1.jpg";
import march2 from "../assets/images/memories/march2.jpg";
import march3 from "../assets/images/memories/march3.jpg";
import march4 from "../assets/images/memories/march4.jpg";
import march5 from "../assets/images/memories/march5.jpg";

import april1 from "../assets/images/memories/april1.jpg";
import april2 from "../assets/images/memories/april2.jpg";
import april3 from "../assets/images/memories/april3.jpg";
import april4 from "../assets/images/memories/april4.jpg";
import april5 from "../assets/images/memories/april5.jpg";

import may1 from "../assets/images/memories/may1.jpg";
import may2 from "../assets/images/memories/may2.jpg";
import may3 from "../assets/images/memories/may3.jpg";
import may4 from "../assets/images/memories/may4.jpg";
import may5 from "../assets/images/memories/may5.jpg";

import june1 from "../assets/images/memories/june1.jpg";
import june2 from "../assets/images/memories/june2.jpg";
import june3 from "../assets/images/memories/june3.jpg";
import june4 from "../assets/images/memories/june4.jpg";
import june5 from "../assets/images/memories/june5.jpg";

import july1 from "../assets/images/memories/july1.jpg";
import july2 from "../assets/images/memories/july2.jpg";
import july3 from "../assets/images/memories/july3.jpg";
import july4 from "../assets/images/memories/july4.jpg";
import july5 from "../assets/images/memories/july5.jpg";

import august1 from "../assets/images/memories/august1.jpg";
import august2 from "../assets/images/memories/august2.jpg";
import august3 from "../assets/images/memories/august3.jpg";
import august4 from "../assets/images/memories/august4.jpg";
import august5 from "../assets/images/memories/august5.jpg";

import september1 from "../assets/images/memories/september1.jpg";
import september2 from "../assets/images/memories/september2.jpg";
import september3 from "../assets/images/memories/september3.jpg";
import september4 from "../assets/images/memories/september4.jpg";
import september5 from "../assets/images/memories/september5.jpg";

import october1 from "../assets/images/memories/october1.jpg";
import october2 from "../assets/images/memories/october2.jpg";
import october3 from "../assets/images/memories/october3.jpg";
import october4 from "../assets/images/memories/october4.jpg";
import october5 from "../assets/images/memories/october5.jpg";

import november1 from "../assets/images/memories/november1.jpg";
import november2 from "../assets/images/memories/november2.jpg";
import november3 from "../assets/images/memories/november3.jpg";
import november4 from "../assets/images/memories/november4.jpg";
import november5 from "../assets/images/memories/november5.jpg";

import december1 from "../assets/images/memories/december1.jpg";
import december2 from "../assets/images/memories/december2.jpg";
import december3 from "../assets/images/memories/december3.jpg";
import december4 from "../assets/images/memories/december4.jpg";
import december5 from "../assets/images/memories/december5.jpg";

const monthPhotos = {
  January: [january1, january2, january3, january4, january5],
  February: [february1, february2, february3, february4, february5],
  March: [march1, march2, march3, march4, march5],
  April: [april1, april2, april3, april4, april5],
  May: [may1, may2, may3, may4, may5],
  June: [june1, june2, june3, june4, june5],
  July: [july1, july2, july3, july4, july5],
  August: [august1, august2, august3, august4, august5],
  September: [september1, september2, september3, september4, september5],
  October: [october1, october2, october3, october4, october5],
  November: [november1, november2, november3, november4, november5],
  December: [december1, december2, december3, december4, december5],
};

export default function Gallery() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const monthOrder = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthsWithPhotos = monthOrder
    .filter((month) => monthPhotos[month]?.length > 0)
    .map((month) => ({
      name: month,
      photos: monthPhotos[month].length
    }));

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-pink-200 mb-6 text-center">
        Our Memories Through the Months
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {monthsWithPhotos.map((month) => (
          <div
            key={month.name}
            className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all duration-200"
            onClick={() => setSelectedMonth(month.name)}
          >
            <div className="aspect-square bg-gradient-to-br from-pink-700 to-purple-700 flex flex-col items-center justify-center p-2">
              <span className="text-lg font-semibold text-pink-100 text-center">
                {month.name}
              </span>
              <span className="mt-1 bg-pink-800 text-pink-200 text-xs px-2 py-1 rounded-full">
                {month.photos} {month.photos === 1 ? "photo" : "photos"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedMonth && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-pink-800 bg-black bg-opacity-80">
            <h2 className="text-xl md:text-2xl font-bold text-pink-200">
              {selectedMonth} Memories
            </h2>
            <button
              className="text-pink-300 hover:text-white text-2xl"
              onClick={() => setSelectedMonth(null)}
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2 sm:p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
              {monthPhotos[selectedMonth].map((photo, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedPhoto(index)}
                >
                  <img
                    src={photo}
                    alt={`Memory ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-3xl z-50"
            onClick={() => setSelectedPhoto(null)}
          >
            ✕
          </button>

          <img
            src={monthPhotos[selectedMonth][selectedPhoto]}
            alt={`Memory from ${selectedMonth}`}
            className="w-full h-full object-contain"
          />

          <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-60 px-4 py-2 rounded text-sm z-50">
            {selectedMonth} - Photo {selectedPhoto + 1}
          </div>
        </div>
      )}
    </div>
  );
}
