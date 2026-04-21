'use client'

import { Phone } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[#120128] py-10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%221%22/><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%220.5%22/></svg>')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ABOUT <span className="text-white">SAURABH KAUSHIK</span>
          </h2>
          
          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-purple-600"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <div className="h-1 w-12 bg-purple-600"></div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm max-w-3xl mx-auto leading-relaxed">
            Specialized Vastu Consultant in Delhi NCR with 5+ years of experience helping homes, businesses, offices, factories, and industrial spaces.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Image Container with Border */}
              <div className="border-l-4 border-t-4 border-purple-600 pt-4 pl-4">
                <div className="bg-gradient-to-b from-red-600 to-red-900 rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="https://vastusaurabh.in/vastu/imgs/about.png" 
                    alt="Saurabh Kaushik - Vastu Consultant"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* Heading */}
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              EXPERT VASTU<br />CONSULTANT
            </h3>

            {/* About Content */}
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                Saurabh Kaushik is a specialized Vastu Consultant in Delhi NCR with 5+ years of experience serving Homes, Business Offices, Factories, Residential Lands, and Industrial spaces. He provides expert analysis and guidance in various stages of vastu consultation.
              </p>

              <p>
                Saurabh Kaushik helps resolve specific problems in households, offices, and factories by suggesting reliable solutions. Our expert vastu services help improve efficiency, enhance productivity, and minimize downtime in your spaces.
              </p>

              <p>
                As one of the Best Vastu Shastra Experts in Delhi NCR, Saurabh specializes in analyzing your existing house or office plan to predict and improve different aspects of your life. With expertise in activating and balancing energy in industries, houses, and commercial companies without demolition, we provide comprehensive vastu solutions across Delhi and all over India.
              </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-4 pt-4 border-t border-purple-600">
              <h4 className="text-white font-bold text-lg pt-2">Contact Us</h4>
              
              {/* Phone Number */}
              

              {/* Read More Button */}
              <button className="bg-[#160033] hover:bg-purple-900 text-white px-8 py-3 rounded-full font-bold text-sm transition border border-purple-600">
                GET CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}