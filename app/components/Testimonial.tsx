'use client'

import { useState } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: 'Happy to write a review for Saurabh Kaushik team for their services. Our house is 100% Vastu compliant and believes me, the results have been phenomenal.',
    name: 'Jyoti Sharma',
    role: 'Banker',
    image: 'https://via.placeholder.com/80x80?text=Jyoti'
  },
  {
    id: 2,
    text: 'I met with Saurabh Kaushik Ji during my challenging time when things weren\'t going right with me. I consulted for my house and shop Vastu rectification. Their guidance has been very helpful. I\'d recommend their services always...Thank you',
    name: 'Tushar Sharma',
    role: 'Marketing Manager',
    image: 'https://via.placeholder.com/80x80?text=Tushar'
  },
  {
    id: 3,
    text: 'Saurabh Kaushik is a very good and nice person. He understands other people\'s feelings and does work from his heart. Very very good by nature work.',
    name: 'Ritu Vashisht',
    role: 'Fashion Designer',
    image: 'https://via.placeholder.com/80x80?text=Ritu'
  }
]

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section className="min-h-screen bg-[#120128] py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%221%22/><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%220.5%22/></svg>')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            WHAT PEOPLE ARE SAYING
          </h2>
          
          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-purple-600"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <div className="h-1 w-12 bg-purple-600"></div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Hear from our satisfied clients and their success stories with Saurabh Kaushik's Vastu services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-12">
          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="border-2 border-dashed border-purple-600 bg-purple-900 bg-opacity-20 backdrop-blur-md p-8 rounded-lg relative group"
              >
                {/* Quote Mark */}
                <Quote size={40} className="text-purple-600 opacity-50 mb-4" />

                {/* Quote Text */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Pointer Arrow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-purple-600 opacity-50"></div>
              </div>
            ))}
          </div>

          {/* Client Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex items-center gap-4 bg-purple-900 bg-opacity-40 border border-purple-600 rounded-full px-6 py-3"
              >
                {/* Avatar */}
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-purple-400"
                />

                {/* Name and Role */}
                <div>
                  <p className="text-white font-bold text-sm">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex
                  ? 'bg-purple-600 w-8'
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}