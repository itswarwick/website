'use client';

import Image from 'next/image'
import selfImage from '../assets/images/self.jpg'
import GitHubContributions from './GitHubContributions'
import SocialLinks from './SocialLinks'

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-8">
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={selfImage}
                  alt="Warwick Gorman"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              Hello!
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-2">
              I&apos;m Warwick.
            </h1>
            <SocialLinks />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-black text-lg leading-relaxed font-mono font-[var(--font-roboto-mono)] text-[15px]">
              Data-focused marketer, I&apos;ve spent the last several years building and optimizing CRM and lifecycle strategies that drive meaningful growth. Lately, I&apos;ve been expanding my skill set into data analytics and product development — with a focus on tools that uncover insights, improve decision-making, and align teams around measurable outcomes.
            </p>
            <p className="text-black text-lg leading-relaxed font-mono font-[var(--font-roboto-mono)] text-[15px]">
              Outside of work, I&apos;m developing independent projects that blend data engineering, visualization, and user experience — a natural extension of my ongoing studies in statistics and analytics.
            </p>
          </div>
        </div>
        
        <GitHubContributions />
      </div>
    </section>
  )
}

export default Hero