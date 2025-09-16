"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-indigo-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 bg-pink-300 rounded-full blur-3xl"></div>
      </div>

      {/* <Image
        src="/bgimg.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      /> */}

      <div className="relative max-w-8xl mx-auto px-2 sm:px-0 lg:px-8 py-12 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-0 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            {/* Decorative Element */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="relative">
                <Sparkles className="w-8 h-8 text-pink-400" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6 text-center">
              <span className="block">Loreal Nails & Beauty </span>
              <span className=" block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                Elevate Your Look
              </span>
              <span className=" block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                Head to Toe
              </span>
            </h1>
          </div>

          {/* Image Grid Section */}
          <div className="order-2 h-[420px] sm:h-[300px] md:h-[400px]">
            {/* Mobile/Small Screen Layout (xs to sm) */}
            <div className="sm:hidden">
              <div className="relative bg-[#D38B8B] h-[400px] rounded-2xl overflow-hidden">
                <div className="grid grid-cols-2 gap-2 p-4 h-full">
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image src="/Image/eyedark.png" alt="Makeup" fill className="object-cover" priority />
                    <div className="absolute bottom-2 left-2 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">Makeup</div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image src="/Image/fing.png" alt="Hair Styling" fill className="object-cover" priority />
                    <div className="absolute bottom-2 left-2 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">Hair</div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image src="/Image/foot.png" alt="Nail Art" fill className="object-cover" priority />
                    <div className="absolute bottom-2 left-2 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">Nails</div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image src="/Image/girl.png" alt="Facial" fill className="object-cover" priority />
                    <div className="absolute bottom-2 left-2 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">Facial</div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image src="/Image/girl.png" alt="Facial" fill className="object-cover" priority />
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">Facial</div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image src="/Image/fing.png" alt="Hair Styling" fill className="object-cover" priority />
                    <div className="absolute bottom-2 left-2 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded">Hair</div>
                  </div>
                </div>
                {/* Floating Element for Mobile */}
                <div className="absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center animate-bounce">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                </div>
              </div>
            </div>

            {/* Small to Medium Screen Layout */}
            <div className="hidden sm:block md:hidden">
              <div className="relative bg-[#D38B8B] h-[350px] rounded-2xl overflow-hidden">
                <div className="grid grid-cols-3 gap-3 p-4 h-full">
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image src="/Image/eyedark.png" alt="Makeup" fill className="object-cover" priority />
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">Makeup</div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image src="/Image/fing.png" alt="Hair Styling" fill className="object-cover" priority />
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">Hair</div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image src="/Image/foot.png" alt="Nail Art" fill className="object-cover" priority />
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">Nails</div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg col-span-2">
                    <Image src="/Image/girl.png" alt="Facial" fill className="object-cover" priority />
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">Facial</div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image src="/Image/fienger.png" alt="Finger Art" fill className="object-cover" priority />
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">Art</div>
                  </div>
                </div>
                {/* Floating Element for Tablet */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center animate-bounce">
                  <Sparkles className="w-6 h-6 text-pink-400" />
                </div>
              </div>
            </div>

            {/* Medium and Large Screen Layout - Fixed Grid System */}
            <div className="hidden md:block">
              <div className="relative bg-[#D38B8B] h-[400px] rounded-2xl overflow-hidden">
                {/* Improved CSS Grid Layout */}
                <div className="absolute inset-4 grid grid-cols-4 grid-rows-3 gap-3">
                  {/* Top Left - Makeup */}
                  <div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20">
                    <Image
                      src="/Image/eyedark.png"
                      alt="Makeup Application"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                      Makeup
                    </div>
                  </div>

                  {/* Top Center - Hair Styling (spans 2 columns) */}
                  <div className="relative col-span-2 row-span-1 overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20">
                    <Image
                      src="/Image/fing.png"
                      alt="Hair Styling"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                      Hair Styling
                    </div>
                  </div>

                  {/* Top Right - Nail Art */}
                  <div className="relative col-span-1 row-span-1 overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20">
                    <Image
                      src="/Image/foot.png"
                      alt="Nail Art"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                      Nail Art
                    </div>
                  </div>

                  {/* Middle Left - Facial (spans 2 rows) */}
                  <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20">
                    <Image
                      src="/Image/girl.png"
                      alt="Facial Treatment"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute bottom-3 left-3 text-white text-lg font-medium bg-black/50 px-3 py-2 rounded">
                      Facial Treatment
                    </div>
                  </div>

                  {/* Middle Right - Finger Art */}
                  <div className="relative col-span-2 row-span-1 overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20">
                    <Image
                      src="/Image/fienger.png"
                      alt="Finger Art"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                      Finger Art
                    </div>
                  </div>

                  {/* Bottom Right - Beauty Treatment */}
                  <div className="relative col-span-2 row-span-1 overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20">
                    <Image
                      src="/Image/lgiht.png"
                      alt="Beauty Treatment"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                      Beauty Care
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center animate-bounce">
                  <Sparkles className="w-8 h-8 text-pink-400" />
                </div>

                {/* Additional floating element */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/60 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center animate-pulse">
                  <Sparkles className="w-6 h-6 text-pink-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;