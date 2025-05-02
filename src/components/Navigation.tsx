'use client';

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import downloadIcon from '../assets/icons/download.svg?url'
import sendIcon from '../assets/icons/send.svg?url'

const Navigation = () => {
  const [showEmailDropdown, setShowEmailDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setShowEmailDropdown(!showEmailDropdown);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText('warwickgorman@gmail.com');
    // Show a temporary copied message (optional)
    alert('Email copied to clipboard!');
    setShowEmailDropdown(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowEmailDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="font-bold text-lg text-black hover:text-gray-600"
            >
              WG
            </button>
          </div>

          {/* Right section: Action buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center px-4 py-2 text-[13px] font-normal tracking-wide rounded-lg text-white bg-gradient-to-b from-[#333333] to-black hover:from-[#222222] hover:to-black shadow-sm transition-all duration-200 space-x-2 group border border-black font-mono font-[var(--font-roboto-mono)] cursor-pointer"
              >
                <span>Contact Me</span>
                <Image 
                  src={sendIcon} 
                  alt="Contact" 
                  width={16} 
                  height={16}
                  className="invert ml-2"
                />
              </button>
              
              {showEmailDropdown && (
                <div className="absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-3 z-10">
                  <div className="py-1">
                    <p className="text-sm text-gray-700 font-medium mb-1">Email me at:</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-900 font-mono">warwickgorman@gmail.com</p>
                      <button 
                        onClick={copyToClipboard}
                        className="text-xs text-gray-600 hover:text-black"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <a
              href="/assets/WarwickResume2025.pdf"
              download="WarwickResume2025.pdf"
              className="inline-flex items-center px-4 py-2 text-[13px] font-normal tracking-wide rounded-lg text-white bg-gradient-to-b from-[#333333] to-black hover:from-[#222222] hover:to-black shadow-sm transition-all duration-200 space-x-2 group border border-black font-mono font-[var(--font-roboto-mono)]"
            >
              <span>Resume</span>
              <Image 
                src={downloadIcon} 
                alt="Download" 
                width={16} 
                height={16}
                className="invert ml-2"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 