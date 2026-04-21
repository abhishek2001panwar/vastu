'use client'

import { CheckCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

const highlights = [
  '6+ Years of Experience In Vastu Sastra',
  'Amazing Results in Residential, Commercial, Industrial Sector',
  '1500+ Satisfied Clients',
  'Scientific Approach',
  'Ensure Success and Goal Achievement',
  'Quality Services at Pocket Price'
]

const rightSideHighlights = [
  { icon: '⏱️', label: '6+ Years of Experience' },
  { icon: '✨', label: 'Amazing Results' },
  { icon: '👥', label: '1500+ Satisfied Clients' },
  { icon: '🔬', label: 'Scientific Approach' },
  { icon: '🎯', label: 'Goal Achievement' },
  { icon: '💎', label: 'Quality Services' },
  { icon: '🤝', label: 'Understand Your Needs' },
  { icon: '🔧', label: 'Solve Your Problems' }
]

const services = [
  { icon: '🏠', label: 'Residential Vastu' },
  { icon: '🏢', label: 'Commercial Vastu' },
  { icon: '🏭', label: 'Industrial Vastu' },
  { icon: '📋', label: 'Floor Plan Analysis' },
  { icon: '👨‍💼', label: 'Expert Consultation' },
]

export default function Hero() {
  const [sparkles, setSparkles] = useState<Array<{ left: string; top: string; delay: string; opacity: number }>>([])

  useEffect(() => {
    // Generate sparkles only on client side
    const generatedSparkles = [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      opacity: Math.random() * 0.7 + 0.3,
    }))
    setSparkles(generatedSparkles)
  }, [])

  return (
    <section id="home" className="min-h-screen bg-[#1F1133] pt-5 flex items-center relative overflow-hidden">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .sparkle {
          animation: twinkle 2s infinite;
        }
      `}</style>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%221%22/><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%220.5%22/></svg>')]"></div>
      </div>

      {/* Sparkling Stars */}
      <div className="absolute inset-0">
        {sparkles.map((sparkle, i) => (
          <div
            key={i}
            className="sparkle absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animationDelay: sparkle.delay,
              opacity: sparkle.opacity,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 md:col-span-1">
            {/* Welcome Header */}
            <div className="flex items-center gap-2">
              <h3 className="text-gray-300 text-sm font-light">Welcome To</h3>
             
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              SAURABH KAUSHIK<br /><span className="text-white">VASTU CONSULTANT</span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              Get your Residential Vastu, Commercial Vastu, Industrial Vastu with vastu expert Saurabh Kaushik. Submit the floor plan map and you will get vastu assistance.
            </p>

            {/* First 3 Why Choose Us Points */}
            <div className="space-y-3 pt-4">
              <h4 className="text-white font-bold text-sm">WHY CHOOSE US</h4>
              {rightSideHighlights.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-purple-400 text-lg flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full font-bold text-sm transition w-full">
              GET VASTU ASSISTANCE
            </button>
          </div>

          {/* Right Content - Remaining Why Choose Us Points */}
          <div className="space-y-6 md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-8"></h3>
            <div className="space-y-4">
              {rightSideHighlights.slice(3).map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  {/* Circular Icon */}
                 
                  
                  {/* Pill-shaped Label */}
                  <div className="flex-1 bg-purple-900 bg-opacity-40 backdrop-blur-md border border-purple-700 rounded-full px-6 py-3 hover:bg-opacity-60 transition">
                    <span className="text-white font-medium text-sm">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
