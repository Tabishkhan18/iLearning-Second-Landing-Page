import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Stats from './components/Stats';
import Carousel from './components/Carousel';
import CompaniesCarousel from './components/CompaniesCarousel';
import Footer from './components/Footer';

const slides = [
  {
    logo: 'accenture.png',
    text: 'Everyone loves it; it has democratized our finance function. In some ways Trello shattered hierarchy.',
    name: 'THOR',
    position: 'Founder, Accenture',
  },
  {
    logo: 'amazon.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eveniet distinctio earum ullam.',
    name: 'STEVE ROGERS',
    position: 'Finance, Amazon',
  },
  {
    logo: 'americanexpress.png',
    text: 'Everyone loves it; it has democratized our finance function. In some ways Trello shattered hierarchy.',
    name: 'BRUCE BANNER',
    position: 'CEO, American Express',
  },
  {
    logo: 'microsoft.png',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eveniet distinctio earum ullam.',
    name: 'TONY STARK',
    position: 'Director, Microsoft',
  },
  
];

const App = () => {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <Header />
      <CompaniesCarousel />
      <Stats />
      <Carousel slides={slides} />
      <Footer />
    </div>
  );
};

export default App;
