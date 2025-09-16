'use client';

import React from 'react';
import Image from 'next/image';
import { Heart, Star, Award, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const highlights = [
    { icon: Star, text: "5-Star Rated Salon" },
    { icon: Award, text: "Certified Professionals" },
    { icon: Users, text: "1000+ Happy Clients" },
    { icon: Heart, text: "Personalized Care" }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-16 lg:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Salon Image */}
          <div className="order-2 lg:order-1 relative  ">
            <div className="relative group bordder-2">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Placeholder for salon interior image */}
                <div className="aspect-[4/3] flex items-center justify-center">
                  {/* Simulated salon interior */}
                  <Image src="/Image/about.jpg"
                   alt="Salon Interior" 
                   fill 
                   className="object-cover" />
                 
                </div>

                
                
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-80 blur-sm"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 text-white">
            {/* Section Title */}
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  About Us Loreal Nails
                </span>
              </h2>
              <div className="w-120 h-1 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full"></div>
            </div>

            {/* Main Description */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-blue-400 font-semibold">Welcome to Loreal Nails,</span> where luxury meets relaxation in the heart of our vibrant community. We are passionate about providing exceptional nail and beauty services that transform not just your appearance, but your entire well-being.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 corsor-pointer">
                  <div className="p-2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full">
                    <highlight.icon className="w-4 h-4 text-white corsor-pointer" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 corsor-pointer">{highlight.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More About Us
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                View Our Team
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">5+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">1000+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">50+</div>
              <div className="text-gray-400 text-sm">Services Offered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">24/7</div>
              <div className="text-gray-400 text-sm">Online Booking</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
            fillOpacity="0.05"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;