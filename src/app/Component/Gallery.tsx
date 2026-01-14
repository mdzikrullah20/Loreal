'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, X, ZoomIn, Heart, Star } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'nails' | 'facial' | 'makeup' | 'hair' | 'hands' | 'spa';
  aspectRatio: 'square' | 'portrait' | 'landscape';
  image: string; // Added image path
  description: string;
}

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Flawless Foundation',
      category: 'makeup',
      aspectRatio: 'portrait',
      image: '/Image/fienger.png', // Replace with your actual image paths
      description: 'Professional makeup application with natural glow'
    },
    {
      id: '1',
      title: 'Flawless Foundation',
      category: 'makeup',
      aspectRatio: 'portrait',
      image: '/Image/eyedark.png', // Replace with your actual image paths
      description: 'Professional makeup application with natural glow'
    },
    {
      id: '2',
      title: 'Nail Art Design',
      category: 'nails',
      aspectRatio: 'landscape',
      image: '/Image/fing.png',
      description: 'Intricate nail art with golden accents'
    },
    {
      id: '3',
      title: 'Radiant Beauty',
      category: 'makeup',
      aspectRatio: 'square',
      image: '/Image/girl.png',
      description: 'Natural beauty enhancement and skincare'
    },
    {
      id: '4',
      title: 'Manicure Excellence',
      category: 'nails',
      aspectRatio: 'square',
      image: '/Image/foot.png',
      description: 'Perfect manicure with gel finish'
    },
    {
      id: '5',
      title: 'Hand Care',
      category: 'hands',
      aspectRatio: 'landscape',
      image: '/Image/fienger.png',
      description: 'Luxurious hand treatment and moisturizing'
    },
    {
      id: '6',
      title: 'Spa Treatment',
      category: 'spa',
      aspectRatio: 'portrait',
      image: '/Image/lgiht.png',
      description: 'Relaxing spa experience with aromatherapy'
    },
    {
      id: '7',
      title: 'Eye Makeup',
      category: 'makeup',
      aspectRatio: 'square',
      image: '/Image/eyedark.png',
      description: 'Dramatic eye makeup with precision application'
    },
    {
      id: '8',
      title: 'Beauty Portrait',
      category: 'makeup',
      aspectRatio: 'portrait',
      image: '/Image/girl.png',
      description: 'Complete beauty transformation'
    },
    {
      id: '9',
      title: 'French Manicure',
      category: 'nails',
      aspectRatio: 'square',
      image: '/Image/fing.png',
      description: 'Classic French manicure with modern twist'
    },
    {
      id: '10',
      title: 'Nail Polish Art',
      category: 'nails',
      aspectRatio: 'landscape',
      image: '/Image/foot.png',
      description: 'Creative nail designs and color combinations'
    },
    {
      id: '11',
      title: 'Skincare Glow',
      category: 'facial',
      aspectRatio: 'square',
      image: '/Image/lgiht.png',
      description: 'Glowing skin after facial treatment'
    },
    {
      id: '12',
      title: 'Hand Massage',
      category: 'hands',
      aspectRatio: 'portrait',
      image: '/Image/fienger.png',
      description: 'Therapeutic hand massage and care'
    },
    {
      id: '11',
      title: 'Skincare Glow',
      category: 'facial',
      aspectRatio: 'square',
      image: '/Image/eyedark.png',
      description: 'Glowing skin after facial treatment'
    },

  ];

  const getGridClass = (aspectRatio: string, index: number) => {
    switch (aspectRatio) {
      case 'landscape':
        return 'col-span-2 row-span-1';
      case 'portrait':
        return 'col-span-1 row-span-2';
      case 'square':
      default:
        return 'col-span-1 row-span-1';
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Decorative Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-pink-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of beautiful transformations and artistic creations. Each image tells a story of excellence and attention to detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[200px] lg:auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`} // Ensures uniqueness
              className={`${getGridClass(item.aspectRatio, index)} group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
              onClick={() => setSelectedImage(item)}
            >
              {/* Main Image */}
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  priority={index < 4} // Prioritize first 4 images
                />
  
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <ZoomIn className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold mb-1 text-center">{item.title}</h3>
                  <p className="text-sm opacity-90 text-center line-clamp-2">{item.description}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.category}
              </div>

              {/* Favorite Button */}
              <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                <Heart className="w-4 h-4 text-pink-500" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View Full Portfolio
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Modal Content */}
            <div className="p-6">
              {/* Large Image in Modal */}
              <div className="relative w-full h-96 rounded-xl overflow-hidden mb-6">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                {/* Overlay for modal image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* High Resolution Badge */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  High Resolution
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    Premium Work
                  </span>
                  <span className="capitalize">{selectedImage.category} Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;