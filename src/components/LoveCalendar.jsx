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

const favoritePhotos = [
  { 
    month: "January", 
    image: januaryImg, 
    description: "Dimataku kamu tetap ganteng, in every position. Blue colors always fits on you. Jangan pernah ngerasa jelek ya." 
  },
  { 
    month: "February", 
    image: februaryImg, 
    description: "Apapun yang kamu lakukan, selalu berhasil mengambil perhatianku. Jarang aku merasa harus mengangkat kamera untuk mengabadikan momen, tapi ngga buat kamu... aku selalu ingin mengingat seluruh momennya." 
  },
  { 
    month: "March", 
    image: marchImg, 
    description: "Tiap dekat kamu, aku ngerasa nyaman-aman-lembut yang jarang aku dapatkan dari siapapun." 
  },
  { 
    month: "April", 
    image: aprilImg, 
    description: "Bareng kamu aku ngerasa diutamakan. Dirayakan. Dianggap. Didengar. Dan itu bikin aku ga bisa lepas. Gamau lepas!" 
  },
  { 
    month: "May", 
    image: mayImg, 
    description: "Makasih sayang udah mau ngajarin dan bikin aku suka sama ayam. I will never forget you even 2 minutes before i die." 
  },
  { 
    month: "June", 
    image: juneImg, 
    description: "Pundakmu lebar, perutmu empuk. Bahagia terus ya selama sama aku." 
  },
  { 
    month: "July", 
    image: julyImg, 
    description: "Walaupun banyak luka, kamu tetap mencoba buat menyembuhkanku. Itu yang bikin aku berpikir 1000x buat pergi." 
  },
  { 
    month: "August", 
    image: augustImg, 
    description: "Sumpah ini keren banget. Aku yakin kamu bisa jadi dokter yang hebat." 
  },
  { 
    month: "September", 
    image: septemberImg, 
    description: "Walaupun kamu suka ngantuk, tapi aku menikmati wajah tenangmu pas tidur." 
  },
  { 
    month: "October", 
    image: octoberImg, 
    description: "Gaya khas kita. Udah kaya love languages sendiri." 
  },
  { 
    month: "November", 
    image: novemberImg, 
    description: "Tiap sama kamu, aku selalu pengen habisin duitku buat kamu walaupun kehadiran kamu ga akan bisa dihargain dengan apapun. Aku benar-benar bahagia kamu tetap milih aku in every condition." 
  },
  { 
    month: "December", 
    image: decemberImg, 
    description: "Teruslah berkembang ya sayang, aku bakal terus dorong kamu menjadi lebih baik. Jangan pernah ngerasa sendiri. Aku disini. Always. Forever." 
  }
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
            onClick={() => handleToggle(index)}
          >
            <div className="aspect-[4/3] relative">
              <img 
                src={photo.image} 
                alt={photo.month} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient and description */}
              <div className={`
                absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent 
                flex items-end p-4
                transition-opacity duration-300
                ${activeIndex === index ? 'opacity-100' : 'opacity-0'} 
                group-hover:opacity-100
              `}>
                <p className={`text-white transition-transform duration-300 ${activeIndex === index ? 'translate-y-0' : 'translate-y-4'} group-hover:translate-y-0`}>
                  {photo.description}
                </p>
              </div>

              {/* Month label */}
              <div className="absolute top-0 left-0 bg-pink-700 text-pink-100 px-3 py-1 rounded-br-lg text-sm">
                {photo.month}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

