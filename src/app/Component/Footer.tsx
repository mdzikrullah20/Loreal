'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Sparkles,
  Heart,
  Star,
  ArrowRight,
  Send
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Appointment', href: '/booking' }
  ];

  const services = [
    { name: 'Nail Art & Design', href: '/services/nail-art' },
    { name: 'Manicure & Pedicure', href: '/services/manicure' },
    { name: 'Facial Treatments', href: '/services/facial' },
    { name: 'Makeup Application', href: '/services/makeup' },
    { name: 'Hair Styling', href: '/services/hair' },
    { name: 'Spa Treatments', href: '/services/spa' }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '11:00 AM - 5:00 PM' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Updated with 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 ml-2">
                Beauty Tips
              </span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, beauty tips, and latest updates from Chill Nails.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex rounded-full bg-white/10 backdrop-blur-sm p-2">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link href="/" className="text-2xl font-bold tracking-wide flex items-center">
                <Sparkles className="w-8 h-8 text-pink-400 mr-2" />
                Chill Nails
              </Link>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mt-3"></div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your premier destination for luxury nail care and beauty treatments. 
              Experience excellence in every service, delivered with passion and precision.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <Star className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-400" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Contact Info
            </h4>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Beauty Street<br />
                    Downtown, City 12345<br />
                    United States
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <Link 
                  href="tel:+1(647)906-1234" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  +1 (647) 906-1234
                </Link>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <Link 
                  href="mailto:info@chillnails.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  info@chillnails.com
                </Link>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-3 pt-2">
                <Clock className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium mb-2">Business Hours:</p>
                  {businessHours.map((schedule, index) => (
                    <p key={index} className="text-gray-400 text-sm">
                      <span className="text-gray-300">{schedule.day}:</span> {schedule.hours}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards/Certifications Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <Star className="w-8 h-8 text-yellow-400 mx-auto" />
              <p className="text-sm text-gray-300">5-Star Rated</p>
            </div>
            <div className="space-y-2">
              <Heart className="w-8 h-8 text-red-400 mx-auto" />
              <p className="text-sm text-gray-300">Certified Professionals</p>
            </div>
            <div className="space-y-2">
              <Sparkles className="w-8 h-8 text-purple-400 mx-auto" />
              <p className="text-sm text-gray-300">Premium Products</p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xs">5Y</span>
              </div>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Chill Nails. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
            
            <div className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> for beauty
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;