import Link from 'next/link'
import Image from 'next/image'
import selfImage from '../assets/images/self.jpg'

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
              I'm Warwick.
            </h1>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p className="text-black text-lg leading-relaxed font-mono font-[var(--font-roboto-mono)] text-[15px]">
              Data-focused marketer and aspiring product analyst, I've spent the last several years building and optimizing CRM and lifecycle strategies that drive meaningful growth. Lately, I've been expanding my skill set into data analytics and product development — with a focus on tools that uncover insights, improve decision-making, and align teams around measurable outcomes.
            </p>
            <p className="text-black text-lg leading-relaxed font-mono font-[var(--font-roboto-mono)] text-[15px]">
              Outside of work, I'm developing independent projects that blend data engineering, visualization, and user experience — a natural extension of my ongoing studies in statistics and analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 