import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const companyLogos = [
  { name: 'Myntra', logo: 'myntra.png' },
  { name: 'Tech Mahindra', logo: 'techmahindra.png' },
  { name: 'Accenture', logo: 'accenture.png' },
  { name: 'Amazon', logo: 'amazon.png' },
  { name: 'American Express', logo: 'americanexpress.png' },
  { name: 'Microsoft', logo: 'microsoft.png' },
  
];

const CompaniesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 2000, // Adjust as needed for the delay
    pauseOnHover: true,
    arrows: false,
    cssEase: "linear", // Ensures smooth animation
  };

  return (
    <div className="carousel-container mx-10 md:mx-20 py-20">
      <div className="container mx-auto">
        <Slider {...settings}>
          {companyLogos.map((company, index) => (
            <div key={index} className="flex justify-center">
              <img src={company.logo} alt={company.name} className="md:h-24 px-3 md:px-10 md:py-4" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CompaniesCarousel;