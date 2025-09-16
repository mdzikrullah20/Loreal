'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Booking', href: '/booking' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const phoneNumber = '+1(647)906-1';

  const handleBookingClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-black tracking-wide">
              LORÉAL
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone Number - Desktop */}
          <div className="hidden lg:flex items-center bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium">
            <Phone className="w-4 h-4 mr-2" />
            {phoneNumber}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Phone Number - Mobile (Icon only) */}
            <Link
              href={`tel:${phoneNumber}`}
              className="bg-amber-700 text-white p-2 rounded-md"
            >
              <Phone className="w-4 h-4" />
            </Link>
            
            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 p-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Phone Number - Mobile Menu */}
            <Link
              href={`tel:${phoneNumber}`}
              className="flex items-center text-white bg-amber-700 hover:bg-amber-800 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="w-4 h-4 mr-2" />
              {phoneNumber}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;