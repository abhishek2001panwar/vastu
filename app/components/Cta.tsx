'use client'

import { Phone } from 'lucide-react'

export default function Cta() {
  return (
    <section className="w-full bg-[#160033] py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><text x=%2250%22 y=%2250%22 font-size=%2240%22 fill=%22%23696D9F%22 opacity=%220.3%22>♈</text><text x=%22150%22 y=%2250%22 font-size=%2240%22 fill=%22%23696D9F%22 opacity=%220.3%22>♉</text><text x=%2250%22 y=%22150%22 font-size=%2240%22 fill=%22%23696D9F%22 opacity=%220.3%22>♊</text><text x=%22150%22 y=%22150%22 font-size=%2240%22 fill=%22%23696D9F%22 opacity=%220.3%22>♋</text></svg>')] bg-repeat"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Centered Content */}
        <div className="text-center space-y-6">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            BEST VASTU SHASTRA SERVICES <br />
            PROVIDED BY SAURABH KAUSHIK
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            We do Vastu for: Home, Office, Shop, Bedroom, Pooja Room, School, Farm House, Factory, Hotel, etc.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Phone Number */}
            <a
              href="tel:+919870255928"
              className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition text-lg font-semibold"
            >
              <Phone size={24} />
              +91-9870255928
            </a>

            {/* Enquiry Button */}
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-3 rounded-full font-semibold transition">
              Enquiry Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}