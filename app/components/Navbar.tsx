'use client'

import React from 'react'
import { Search, ShoppingCart, Phone, MapPin, User } from 'lucide-react'

function Navbar() {
  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#170135] text-white px-8 py-4 border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 text-2xl font-bold">
            <img 
              src="https://vastusaurabh.in/vastu/imgs/logo.png" 
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Contact Info - Center */}
          <div className="flex gap-12">
            <div className="flex items-center gap-3 border-l border-r border-gray-600 px-6">
              <MapPin size={20} className="text-purple-400" />
              <div>
                <p className="text-gray-400 text-xs">Reach Us</p>
                <p className="text-white text-sm">vastusaurabh1@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-purple-400" />
              <div>
                <p className="text-gray-400 text-xs">Talk to Astrologers</p>
                <p className="text-white text-sm">+91-9870255928</p>
              </div>
            </div>
          </div>

          {/* Right Section - Appointments & User */}
          <div className="flex items-center gap-6">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full font-semibold text-sm transition">
              APPOINTMENTS
            </button>
            {/* <img
              src="https://via.placeholder.com/40?text=User"
              alt="user"
              className="w-10 h-10 rounded-full border-2 border-green-400"
            /> */}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#170135] text-white px-8 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Left Navigation Links */}
          <div className="flex gap-8 items-center">
            <a href="#" className="hover:text-purple-300 transition font-medium text-sm">
              Home
            </a>
            <a href="#" className="hover:text-purple-300 transition font-medium text-sm border-r border-gray-600 pr-8">
              About Us
            </a>
            <a href="#" className="hover:text-purple-300 transition font-medium text-sm">
              Our Services
            </a>
            <a href="#" className="hover:text-purple-300 transition font-medium text-sm">
              Testimonials
            </a>
            <a href="#" className="hover:text-purple-300 transition font-medium text-sm">
              Contact Us
            </a>
           
          </div>

          {/* Right Section - Search & Cart */}
          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <div className="flex items-center bg-purple-900 bg-opacity-50 px-4 py-2 rounded border border-gray-600">
              <input
                type="text"
                placeholder="Search here"
                className="bg-transparent outline-none w-48 text-sm placeholder-gray-400"
              />
              <Search size={18} className="text-gray-400" />
            </div>

            {/* Cart Icon */}
            {/* <div className="relative cursor-pointer">
              <ShoppingCart size={24} className="text-gray-300 hover:text-white transition" />
              <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                3
              </span>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar