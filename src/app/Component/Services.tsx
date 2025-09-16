/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Droplets, 
  Scissors, 
  Eye, 
  Heart, 
  Palette, 
  Crown,
  ArrowRight
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  link: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 'facial-cleansing',
      title: 'Facial Cleansing',
      description: 'Expert facial cleansing to leave your skin feeling refreshed and revitalized. Our gentle yet effective cleansing removes impurities and restores natural radiance.',
      icon: Sparkles,
      link: '#facial-cleansing'
    },
    {
      id: 'foot-treatment',
      title: 'Foot Treatment',
      description: 'Luxurious pampering that will rejuvenate your tired feet. Our comprehensive foot care includes exfoliation, massage, and moisturizing for ultimate comfort.',
      icon: Droplets,
      link: '#foot-treatment'
    },
    {
      id: 'hair-cut',
      title: 'Hair Cut',
      description: 'Professional hair cutting and styling services. Let our skilled stylists create the perfect look that complements your features and personal style.',
      icon: Scissors,
      link: '#hair-cut'
    },
    {
      id: 'barber',
      title: 'Barber',
      description: 'Classic barbering services with modern techniques. From precision cuts to traditional hot towel shaves, we provide the ultimate gentleman\'s experience.',
      icon: Crown,
      link: '#barber'
    },
    {
      id: 'threading',
      title: 'Threading',
      description: 'Precise eyebrow shaping and facial hair removal using traditional threading techniques. Achieve perfectly sculpted brows that frame your face beautifully.',
      icon: Eye,
      link: '#threading'
    },
    {
      id: 'bleach-detan',
      title: 'Bleach And De-tan',
      description: 'Brighten and even your skin tone with our professional bleaching and de-tanning treatments. Remove sun damage and reveal your natural glow.',
      icon: Heart,
      link: '#bleach-detan'
    },
    {
      id: 'makeup',
      title: 'Makeup',
      description: 'Professional makeup application for any occasion. From everyday looks to special events, our artists will enhance your natural beauty perfectly.',
      icon: Palette,
      link: '#makeup'
    },
    {
      id: 'facial-cleansing-deluxe',
      title: 'Facial Cleansing',
      description: 'Advanced facial treatments using premium products and techniques. Deep cleansing, hydration, and anti-aging solutions for radiant skin.',
      icon: Sparkles,
      link: '#facial-cleansing-deluxe'
    }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of beauty and wellness services, each designed to help you look and feel your absolute best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center group-hover:from-pink-200 group-hover:to-purple-200 transition-all duration-300">
                  <service.icon className="w-10 h-10 text-gray-700 group-hover:text-gray-800 transition-colors duration-300" />
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Book Now Link */}
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-pink-500 hover:text-pink-600 font-medium text-sm group-hover:gap-2 transition-all duration-300"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all duration-300" />
                </Link>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-pink-200 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Transform Your Look?
              </h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Book your appointment today and experience the difference our expert services can make. Your journey to beauty and wellness starts here.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Book All Services
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-md">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-pink-500" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Beauty Services</h4>
            <p className="text-gray-600 text-sm">Facial treatments, makeup, and skincare solutions</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-md">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scissors className="w-8 h-8 text-purple-500" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Hair Services</h4>
            <p className="text-gray-600 text-sm">Professional cuts, styling, and hair treatments</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-md">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-indigo-500" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Wellness Services</h4>
            <p className="text-gray-600 text-sm">Relaxation treatments and therapeutic services</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;