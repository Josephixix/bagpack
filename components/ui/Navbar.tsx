"use client"; 
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#8B5E3C] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="shrink-0 flex items-center">
             <div>
             <span className="text-lg font-extrabold md:text-lg">Bagpack</span>
             </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="/" className="text-black hover:text-gray-100  px-3 py-2 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="/about" className="text-black hover:text-gray-100 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>

            <a href="/contact" className="text-black hover:text-gray-100 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </a>
          
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black "
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 w-3/4 h-full bg-[#8B5E3C] ">
            <div className="flex flex-col h-full">
              {/* Close button */}
              <div className="flex justify-end p-4 ">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-black"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Menu Items */}
              <div className="flex-1 px-6 py-8 space-y-6">
                <a
                  href="/"
                  className="text-black block text-lg font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-black block text-lg font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </a>
               
                <a
                  href="/contact"
                  className="text-black block text-lg font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
               
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}