'use client'

import { Phone, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#160033] py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%221%22/><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%220.5%22/></svg>')]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SPEAK TO OUR EXPERT!
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-12 bg-purple-600"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <div className="h-1 w-12 bg-purple-600"></div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            वास्तु शास्त्र की सेवाएं लेने के लिए फ़ोन, व्हॉट्स-एप या ईमेल से संपर्क करें
          </p>

          <p className="text-gray-300 text-base leading-relaxed">
            We do Vastu for: Home, Office, Shop, Bedroom, Pooja Room, School, Farm House, Factory, Hotel, etc.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div className="border border-purple-600  bg-opacity-30 backdrop-blur-md p-8 rounded-lg hover:border-purple-400 hover:bg-opacity-50 transition group text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-purple-500 flex items-center justify-center group-hover:bg-purple-700 group-hover:border-purple-300 transition">
                <Phone size={32} className="text-purple-300 group-hover:text-purple-200 transition" />
              </div>
            </div>

            <h3 className="text-white font-bold text-lg mb-4">Call Us</h3>

            <a
              href="tel:+919870255928"
              className="text-purple-400 hover:text-purple-300 font-semibold text-xl transition inline-block"
            >
              +91-9870255928
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="border border-purple-600  bg-opacity-30 backdrop-blur-md p-8 rounded-lg hover:border-green-400 hover:bg-opacity-50 transition group text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center group-hover:bg-green-700 group-hover:border-green-400 transition">
                <MessageCircle size={32} className="text-green-300 group-hover:text-green-200 transition" />
              </div>
            </div>

            <h3 className="text-white font-bold text-lg mb-4">WhatsApp</h3>

            <a
              href="https://wa.me/919870255928"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 font-semibold text-lg transition inline-block"
            >
              WhatsApp<br />Enquiry Now
            </a>
          </div>

          {/* Email Card */}
          <div className="border border-purple-600  bg-opacity-30 backdrop-blur-md p-8 rounded-lg hover:border-blue-400 hover:bg-opacity-50 transition group text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center group-hover:bg-blue-700 group-hover:border-blue-400 transition">
                <Mail size={32} className="text-blue-300 group-hover:text-blue-200 transition" />
              </div>
            </div>

            <h3 className="text-white font-bold text-lg mb-4">Email</h3>

            <a
              href="mailto:vastusaurabh1@gmail.com"
              className="text-blue-400 hover:text-blue-300 font-semibold break-all transition inline-block text-sm"
            >
              vastusaurabh1@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}