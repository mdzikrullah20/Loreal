'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  service: string;
  location: string;
  avatar: string;
  bgColor: string;
  textColor: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      review: 'My favorite nail salon! I have been working for 3 years and they always do a great job. Great quiet environment and super friendly staff. I was pampered and my nails were beautiful. My nails have never looked 10/10 would recommend, my friends and I come here often.',
      rating: 5,
      service: 'Nail Art & Manicure',
      location: 'Regular Client',
      avatar: 'from-pink-200 to-rose-300',
      bgColor: 'from-pink-100 to-rose-200',
      textColor: 'text-pink-900'
    },
    {
      id: '2',
      name: 'Emily Davis',
      review: 'My favorite nail salon! I have been working for 3 years and they always do a great job. Great quiet environment and super friendly staff. I was pampered and my nails were beautiful. My nails have never looked 10/10 would recommend, my friends and I come here often.',
      rating: 5,
      service: 'Facial Treatment',
      location: 'VIP Member',
      avatar: 'from-purple-200 to-pink-300',
      bgColor: 'from-purple-100 to-pink-200',
      textColor: 'text-purple-900'
    },
    {
      id: '3',
      name: 'Jessica Martinez',
      review: 'Amazing experience every time! The staff is incredibly professional and the atmosphere is so relaxing. I always leave feeling refreshed and beautiful. The attention to detail is outstanding and I would not go anywhere else.',
      rating: 5,
      service: 'Full Beauty Package',
      location: 'Loyal Customer',
      avatar: 'from-blue-200 to-purple-300',
      bgColor: 'from-blue-100 to-purple-200',
      textColor: 'text-blue-900'
    },
    {
      id: '4',
      name: 'Amanda Wilson',
      review: 'Exceptional service and results! The team at Chill Nails truly understands beauty and wellness. Every visit is a treat and I always receive compliments on my nails. Highly recommend to anyone looking for quality.',
      rating: 5,
      service: 'Spa Manicure',
      location: 'Monthly Visitor',
      avatar: 'from-green-200 to-teal-300',
      bgColor: 'from-green-100 to-teal-200',
      textColor: 'text-green-900'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Decorative Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-pink-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm font-medium text-gray-500 tracking-wider uppercase mb-2">Chill Nails</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
              What They're Talking About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mt-2">
                us
              </span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 -ml-6"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-110 -mr-6"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${testimonial.bgColor} rounded-3xl p-8 lg:p-12 mx-4 shadow-lg`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      
                      {/* Content Side */}
                      <div className={`${testimonial.textColor} ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                        {/* Quote Icon */}
                        <Quote className="w-12 h-12 text-pink-400 mb-6 opacity-60" />
                        
                        {/* Rating Stars */}
                        <div className="flex items-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                          ))}
                        </div>

                        {/* Review Text */}
                        <blockquote className="text-lg lg:text-xl leading-relaxed mb-8 font-medium">
                          "{testimonial.review}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="space-y-2">
                          <h4 className="text-xl font-bold">{testimonial.name}</h4>
                          <p className="text-sm opacity-80">{testimonial.service}</p>
                          <p className="text-sm opacity-70">{testimonial.location}</p>
                        </div>
                      </div>

                      {/* Avatar Side */}
                      <div className={`flex justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                        <div className="relative">
                          {/* Main Avatar */}
                          <div className={`w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br ${testimonial.avatar} rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden group`}>
                            {/* Avatar Placeholder */}
                            <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/50 rounded-full"></div>
                            </div>
                            
                            {/* Overlay Pattern */}
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>

                          {/* Floating Elements */}
                          {index % 2 === 0 && (
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
                              <Star className="w-8 h-8 text-yellow-500 fill-current" />
                            </div>
                          )}

                          {index % 2 === 1 && (
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl shadow-lg flex items-center justify-center">
                              <Sparkles className="w-10 h-10 text-white" />
                            </div>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-gradient-to-r from-pink-400 to-purple-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">500+</div>
            <div className="text-gray-600 text-sm">Happy Clients</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">4.9★</div>
            <div className="text-gray-600 text-sm">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">100%</div>
            <div className="text-gray-600 text-sm">Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-pink-500">5</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;