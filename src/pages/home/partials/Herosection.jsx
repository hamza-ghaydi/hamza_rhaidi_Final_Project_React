import React, { useState, useEffect } from 'react';
import images from '../../../constants/images';

const Herosection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: images.carousel1,
      title: "LEATHER BAGS",
      subtitle: "New Collection 2018",
      buttonText: "SHOP NOW"
    },
    {
      id: 2,
      image: images.carousel2,
      title: "LEATHER BAGS",
      subtitle: "New Collection 2018",
      buttonText: "SHOP NOW"
    },
    {
      id: 3,
      image: images.carousel3,
      title: "LEATHER BAGS",
      subtitle: "New Collection 2018",
      buttonText: "SHOP NOW"
    }
  ];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">

      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider">
                  {slide.title}
                </h1>
                <div className="w-20 h-0.5 bg-white mx-auto mb-6"></div>
                <p className="text-lg md:text-xl mb-8 font-light tracking-wide">
                  {slide.subtitle}
                </p>
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold tracking-wider hover:bg-gray-100 transition-colors duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  );
};

export default Herosection;
