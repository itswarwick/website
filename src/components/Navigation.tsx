'use client';

import Image from 'next/image'

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-4 py-2 text-[13px] font-normal tracking-wide rounded-lg text-white bg-gradient-to-b from-[#333333] to-black hover:from-[#222222] hover:to-black shadow-sm transition-all duration-200 space-x-2 group border border-black font-mono font-[var(--font-roboto-mono)]"
            >
              <span>Contact Me</span>
              <svg 
                className="w-4 h-4 ml-2 invert" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 20V4H20V20H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 4L12 12L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 20L12 12L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 text-[13px] font-normal tracking-wide rounded-lg text-white bg-gradient-to-b from-[#333333] to-black hover:from-[#222222] hover:to-black shadow-sm transition-all duration-200 space-x-2 group border border-black font-mono font-[var(--font-roboto-mono)]"
            >
              <span>Resume</span>
              <svg 
                className="w-4 h-4 ml-2 invert" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 4V16M12 16L8 12M12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 