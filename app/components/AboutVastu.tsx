'use client'

import { useState } from 'react'

const slides = [
  {
    title: 'About Vastu Shastra',
    heading: 'BELIEVE IN THINGS THAT CAN FORTUNATELY CHANGE YOUR LIFE',
    description: 'Vastu Shastra is an ancient Indian science that finds its origins in Bharat. It guides the look and construction of buildings with the assistance of simple and natural laws that govern the universe. The origin of vastu dates back to nearly 7000 years. Primarily, vastu Shastra provides data on what to keep in mind when selecting a piece of land and while constructing buildings. In Indo-Aryan, the word vastu means "site" or "house foundation" and shastra interprets to "science" or "teaching."',
    backgroundImage: 'linear-gradient(135deg, rgba(32, 19, 48, 0.85), rgba(20, 10, 30, 0.85))'
  },
  {
    title: 'The Energy of Spaces',
    heading: 'HARMONY AND BALANCE IN YOUR SURROUNDINGS',
    description: 'Anyone can conform to the fact that we, humans, spend most of our time within a building be it our home, workplace or elsewhere. It is also an undeniable fact that all things within the universe have a level of energy related to them. Vastu Shastra helps harness this positive energy to create spaces that promote health, prosperity, and well-being.',
    backgroundImage: 'linear-gradient(135deg, rgba(32, 19, 48, 0.85), rgba(20, 10, 30, 0.85))'
  }
]

export default function AboutVastu() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="w-full bg-[#160033] py-0 relative overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: slide.backgroundImage
            }}
          >
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
              {/* Subtitle */}
              <p className="text-gray-300 text-sm md:text-base font-light mb-4 italic">
                {slide.title}
              </p>

              {/* Main Heading */}
              <h2 className="text-3xl md:text-5xl font-bold text-white text-center max-w-4xl mb-6 leading-tight">
                {slide.heading}
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base text-center max-w-3xl leading-relaxed mb-8">
                {slide.description}
              </p>

              {/* Read More Button */}
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 rounded-full font-semibold transition">
                READ MORE
              </button>
            </div>
          </div>
        ))}

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide
                  ? 'bg-purple-600 w-8'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center transition"
        >
          ←
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center transition"
        >
          →
        </button>
      </div>

    
    </section>
  )
}