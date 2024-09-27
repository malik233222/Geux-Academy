'use client';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../public/images/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-custom relative z-50">
      <div className="max-w-7xl mx-auto h-20 text-white flex justify-between items-center px-4 md:px-6 lg:px-8 transition-all duration-500 ease-in-out relative z-50">
        {/* Logo */}
        <div className="logo transform hover:scale-105 transition-transform duration-300 ease-in-out z-50">
          <Image
            src={logo}
            alt="GEUX Design Academy Logo"
            width={180}
            height={24}
          />
        </div>

        {/* Hamburger Icon (Mobile View) */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none transition-transform transform duration-300 ease-in-out"
          >
            {isMenuOpen ? (
              <Image
                src="/images/linkedin.svg"
                alt="Close Icon"
                width={24}
                height={24}
                className="animate-pulse"
              />
            ) : (
              <Image
                src="/images/facebook.svg"
                alt="Menu Icon"
                width={24}
                height={24}
                className="animate-bounce"
              />
            )}
          </button>
        </div>

        {/* Nav Links (Desktop View) */}
        <div className="hidden md:flex font-normal justify-between w-1/3">
          <span className="hover:text-yellow-custom cursor-pointer hover:underline transition-all duration-300 ease-in-out">
            Təhsil sahələri
          </span>
          <span className="hover:text-yellow-custom cursor-pointer hover:underline transition-all duration-300 ease-in-out">
            Haqqımızda
          </span>
          <span className="hover:text-yellow-custom cursor-pointer hover:underline transition-all duration-300 ease-in-out">
            Əlaqə
          </span>
        </div>

        {/* Join Classes and Language Switcher (Desktop View) */}
        <div className="hidden md:flex items-center justify-end gap-6">
          <button className="font-bold hover:text-yellow-custom transition-colors duration-300 ease-in-out">
            AZE
          </button>
          <div className="bg-yellow-custom rounded-md transform hover:scale-110 transition-transform duration-300 ease-in-out">
            <button
              type="button"
              className="rounded-md text-black px-3 py-2 font-medium shadow-lg hover:bg-indigo-500 transition-colors duration-300 ease-in-out"
            >
              Dərslərə yazıl
            </button>
          </div>
        </div>

        {/* Mobile Menu (Only visible on mobile, with creative animations) */}
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-blue-custom text-white p-6 transition-all transform ${
            isMenuOpen
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 -translate-y-full scale-90'
          } duration-500 ease-in-out origin-top z-40`}
        >
          <div className="flex flex-col items-center space-y-6">
            <span className="hover:text-yellow-custom cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out">
              Təhsil sahələri
            </span>
            <span className="hover:text-yellow-custom cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out">
              Haqqımızda
            </span>
            <span className="hover:text-yellow-custom cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out">
              Əlaqə
            </span>
            <div className="flex flex-col items-center space-y-4 mt-6">
              <button className="font-bold hover:text-yellow-custom transition-transform transform hover:scale-105 duration-300 ease-in-out">
                AZE
              </button>
              <div className="bg-yellow-custom rounded-md transform hover:scale-110 transition-transform duration-300 ease-in-out">
                <button
                  type="button"
                  className="rounded-md text-black px-3 py-2 font-medium shadow-lg hover:bg-indigo-500 transition-colors duration-300 ease-in-out"
                >
                  Dərslərə yazıl
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
