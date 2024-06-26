import React, { useState, useEffect } from 'react';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (

    
    <div className="relative w-full max-w-3xl mx-auto m-20 ">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ position: index === currentSlide ? 'relative' : 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="p-20 bg-blue-100 rounded-md shadow-md">
            <img src={slide.logo} alt={slide.company} className="h-12 mb-4" />
            <p className="italic text-xl mb-4">{slide.text}</p>
            <p className="text-sm font-semibold">{slide.name}</p>
            <p className="text-sm text-gray-600">{slide.position}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`mx-1 w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 mx-3 py-2 px-5 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 mx-3 py-2 px-5 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
