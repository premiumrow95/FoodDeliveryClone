import React from 'react';
import Testimonials from './Testimonials';

const About = () => {
  return (
    <div className="bg-[#1793c4] text-gray-200 min-h-screen mt-3 py-12 border-[5px] border-black ">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-7xl font-serif leading-tight text-center mb-8">
          <span className="text-yellow-300">W</span>elcome to Ratatouille
        </h1>
        
        <div className="text-3xl font-light mb-12">
          <p className="mb-4">At Ratatouille, we're passionate about food and bringing people together through delightful dining experiences. Inspired by the warmth of home-cooked meals and the joy of sharing food with loved ones, we strive to create a welcoming atmosphere that feels like a comforting embrace.</p>
          <p className="mb-4">We believe that food is more than just sustenance—it's a form of art, a source of comfort, and a way to connect with others. Our mission is simple: to delight our customers with exceptional food and service every time. Whether you're ordering your favorite comfort food classics or exploring new culinary adventures, we're here to make every mealtime memorable.</p>
          <p>We're dedicated to serving our community with integrity, honesty, and respect. From supporting local farmers and suppliers to reducing our environmental footprint, we're constantly striving to make a positive impact on the world around us.</p>
        </div>
        
        <div className="mt-12">
          <Testimonials />
        </div>
      </div>
    </div>
  );
}

export default About;
