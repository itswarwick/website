import Link from 'next/link'
import Image from 'next/image'
import downloadIcon from '../assets/icons/download.svg'
import sendIcon from '../assets/icons/send.svg'

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Logo and main navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="font-bold text-lg text-black">
              WG
            </Link>
            <div className="hidden sm:flex space-x-8">
              <Link href="/projects" className="text-black hover:text-gray-600 text-[15px]">
                Projects
              </Link>
              <Link href="/certifications" className="text-black hover:text-gray-600 text-[15px]">
                Certifications
              </Link>
              <Link href="/insights" className="text-black hover:text-gray-600 text-[15px]">
                Insights
              </Link>
            </div>
          </div>

          {/* Right section: Action buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 text-[13px] font-normal tracking-wide rounded-lg text-white bg-gradient-to-b from-[#333333] to-black hover:from-[#222222] hover:to-black shadow-sm transition-all duration-200 space-x-2 group border border-black font-mono font-[var(--font-roboto-mono)]"
            >
              <span>Contact Me</span>
              <Image 
                src={sendIcon} 
                alt="Contact" 
                width={16} 
                height={16}
                className="invert"
              />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 text-[13px] font-normal tracking-wide rounded-lg text-white bg-gradient-to-b from-[#333333] to-black hover:from-[#222222] hover:to-black shadow-sm transition-all duration-200 space-x-2 group border border-black font-mono font-[var(--font-roboto-mono)]"
            >
              <span>Resume</span>
              <Image 
                src={downloadIcon} 
                alt="Download" 
                width={16} 
                height={16}
                className="invert"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 