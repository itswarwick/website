'use client';

import Image from 'next/image'
import { useState } from 'react'
import { StaticImageData } from 'next/image'
import plusEvImg from '@/assets/images/PlusEV001.png'
import starzThumbnail from '@/assets/images/starz-thumbnail.png'
import Modal from './Modal'

// Define media types
type MediaContent = 
  | { type: 'image'; src: string | StaticImageData }
  | { type: 'video'; src: string; thumbnail?: string | StaticImageData };

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
    media: {
      type: 'image' as const,
      src: plusEvImg
    }
  },
  {
    date: 'May  2025',
    title: 'SouthernStarz Website Checker',
    description: (
      <>
        A Python application that processes 3PL inventory PDFs and cross-references with website data to identify:<br />
        • Products in inventory but missing from the website<br />
        • Products on the website but not in inventory<br />
        • Products with missing marketing assets<br />
        <span className="text-sm italic mt-1 block">Click the image to see a demo video</span>
      </>
    ),
    link: '#',
    media: {
      type: 'video' as const,
      src: '/videos/StarzInventoryChecker_050225.mp4',
      thumbnail: starzThumbnail
    }
  },
]

const FeaturedProjects = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaContent | null>(null);

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
                
              </div>
              <div 
                className="w-[480px] h-[270px] rounded-xl flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-90 transition-opacity relative"
                onClick={() => setSelectedMedia(project.media)}
              >
                {project.media.type === 'image' ? (
                  <Image
                    src={project.media.src}
                    alt={project.title}
                    width={480}
                    height={270}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <>
                    <Image
                      src={project.media.thumbnail || '/assets/images/video-placeholder.jpg'}
                      alt={project.title}
                      width={480}
                      height={270}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-black/70 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Modal
        isOpen={!!selectedMedia}
        onClose={() => setSelectedMedia(null)}
      >
        {selectedMedia && (
          selectedMedia.type === 'image' ? (
            <Image
              src={selectedMedia.src}
              alt="Project preview"
              width={1200}
              height={675}
              className="max-w-full max-h-[90vh] object-contain"
            />
          ) : (
            <div className="relative w-full pt-[56.25%]">
              <video
                src={selectedMedia.src}
                controls
                className="absolute top-0 left-0 w-full h-full"
                autoPlay
              />
            </div>
          )
        )}
      </Modal>
    </>
  )
}

export default FeaturedProjects 