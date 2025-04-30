'use client';

import Image from 'next/image'
import { useState } from 'react'
import { StaticImageData } from 'next/image'
import plusEvImg from '@/assets/images/PlusEV001.png'
import Modal from './Modal'

const projects = [
  {
    date: '2025 – present',
    title: 'PlusEV',
    description: (
      <>
        Sources odds across major sportsbooks and displays the best value bets for the user.<br />
        <b>Features coming soon:</b> More sportsbooks, Live updates, arbitrage opportunities and links to betslips.<br />
        <b>Further down the line:</b> Blogs, all sports and configurable discord bot.
      </>
    ),
    link: '#',
    image: plusEvImg,
  },
  {
    date: '2022 – present',
    title: 'Analytics Dashboards',
    description:
      'Interactive Tableau dashboards for business intelligence and customer insights. Focused on user behavior and revenue metrics.',
    link: '#',
    image: '/images/placeholder-project.png',
  },
]

const FeaturedProjects = () => {
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null);

  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          <h2 className="text-2xl font-bold text-black mb-8">Featured Projects</h2>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center md:items-start gap-8"
            >
              <div className="flex-1 pr-8">
                <span className="text-gray-500 text-sm">{project.date}</span>
                <h3 className="text-black text-xl font-bold mt-2">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block mt-4 font-mono text-black underline hover:text-blue-600 transition"
                >
                  Try it out &rarr;
                </a>
              </div>
              <div 
                className="w-[480px] h-[270px] rounded-xl flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={480}
                  height={270}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Project preview"
            width={1200}
            height={675}
            className="max-w-full max-h-[90vh] object-contain"
          />
        )}
      </Modal>
    </>
  )
}

export default FeaturedProjects 