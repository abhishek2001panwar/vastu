'use client'

import { useState } from 'react'
import { Phone, Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', query: '' })
  }

  return (
    <footer className="bg-[#160033] relative">
      {/* Main Footer Content */}
      <div className="border-t border-dashed border-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Column 1: About */}
            <div className="space-y-6 border-r border-dashed border-purple-600 pr-8">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img 
                  src="https://vastusaurabh.in/vastu/imgs/logo.png" 
                  alt="Saurabh Kaushik"
                  className="h-10 w-auto"
                />
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                Saurabh Kaushik is a specialized Vastu Consultant in Delhi NCR with 5+ years of experience for Homes, Business Offices, Factories, Residential Lands, and Industrial Analysis.
              </p>

              {/* Highlights */}
              <ul className="space-y-2 text-gray-300 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">»</span>
                  <span>6+ Years of Experience In Vastu Sastra</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">»</span>
                  <span>Amazing Results in Residential, Commercial, Industrial Sector</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">»</span>
                  <span>1500+ Satisfied Clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">»</span>
                  <span>Scientific Approach & Best Solutions</span>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 rounded-full border border-purple-600 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition text-lg">
                  f
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-purple-600 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition text-lg">
                  𝕏
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-purple-600 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition text-lg">
                  ▶
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-purple-600 flex items-center justify-center text-purple-400 hover:bg-purple-600 hover:text-white transition text-lg">
                  in
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-6 border-r border-dashed border-purple-600 pr-8">
              <h3 className="text-white font-bold text-lg">NEED OUR HELP</h3>

              <nav className="space-y-3">
                <a href="#" className="text-gray-300 hover:text-purple-400 text-sm transition flex items-center gap-2">
                  <ArrowRight size={14} />
                  Home
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 text-sm transition flex items-center gap-2">
                  <ArrowRight size={14} />
                  About Us
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 text-sm transition flex items-center gap-2">
                  <ArrowRight size={14} />
                  Our Services
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 text-sm transition flex items-center gap-2">
                  <ArrowRight size={14} />
                  Testimonials
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 text-sm transition flex items-center gap-2">
                  <ArrowRight size={14} />
                  Contact Us
                </a>
              </nav>

              {/* Contact Box */}
              <div className="bg-purple-900 bg-opacity-40 border border-purple-600 p-4 rounded-lg mt-8">
                <p className="text-gray-300 text-xs mb-4">
                  वास्तु शास्त्र की सेवाएं लेने के लिए फ़ोन, व्हॉट्स-एप या ईमेल से संपर्क करें
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <Phone size={16} className="text-purple-400" />
                  <a href="tel:+919870255928" className="text-purple-400 font-semibold text-sm hover:text-purple-300">
                    +91-9870255928
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-blue-400" />
                  <a href="mailto:vastusaurabh1@gmail.com" className="text-blue-400 font-semibold text-xs hover:text-blue-300 break-all">
                    vastusaurabh1@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Enquiry Form */}
            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg">CONTACT US TODAY</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-purple-900 bg-opacity-40 border border-purple-600 rounded px-4 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-purple-900 bg-opacity-40 border border-purple-600 rounded px-4 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-purple-900 bg-opacity-40 border border-purple-600 rounded px-4 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400"
                />

                <textarea
                  name="query"
                  placeholder="Query*"
                  value={formData.query}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-purple-900 bg-opacity-40 border border-purple-600 rounded px-4 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded transition border border-purple-600"
                >
                  Submit Enquiry
                </button>
              </form>

              <p className="text-gray-400 text-xs text-center pt-4">
                Have any queries? Get in touch today.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-purple-900 bg-opacity-50 border-t border-dashed border-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-400 text-xs">
            <p>© 2024 Saurabh Kaushik Vastu Consultant. All Rights Reserved</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center transition z-50"
      >
        ↑
      </button>
    </footer>
  )
}