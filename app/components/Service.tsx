'use client'

import { Home, Building2, Hammer } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'RESIDENTIAL VASTU',
    subcategories: [
      'Vastu For Builder Floor',
      'Vastu for Plot',
      'Other Residential sites',
      'Vastu for Home',
      'Vastu for Flat/ Apartment',
      'Other Residential'
    ]
  },
  {
    icon: Building2,
    title: 'COMMERCIAL VASTU',
    subcategories: [
      'Shops',
      'Showroom',
      'Offices',
      'Institutes',
      'Hotels/ Hospitals',
      'Other Commercial'
    ]
  },
  {
    icon: Hammer,
    title: 'INDUSTRIAL VASTU',
    subcategories: [
      'Vastu for Warehouse',
      'Vastu for Factories',
      'Buying Industrial Plots',
      'Vastu for Manufacturing',
      'Vastu for steel industry',
      'Other Industrial'
    ]
  }
]

export default function Service() {
  return (
    <section id="services" className="min-h-screen bg-[#160033] py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%221%22/><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%220.5%22/></svg>')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            OUR SERVICES
          </h2>
          
          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-purple-600"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <div className="h-1 w-12 bg-purple-600"></div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Comprehensive vastu consultation services for residential, commercial, and industrial properties
          </p>
        </div>

        {/* Services Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="border border-dashed  bg-opacity-20 backdrop-blur-md p-8 rounded-lg hover:border-purple-400 transition group"
              >
                {/* Icon Circle with Dotted Border */}
                <div className="flex justify-center mb-8">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    {/* Outer dotted circle */}
                    <div className="absolute inset-0 border-2 border-dashed border-purple-500 rounded-full"></div>
                    {/* Middle dotted circle */}
                    <div className="absolute inset-2 border border-dashed border-purple-600 rounded-full"></div>
                    {/* Icon */}
                    <div className="relative z-10 w-20 h-20 rounded-full border-2 border-purple-500 flex items-center justify-center bg-purple-900 bg-opacity-40 group-hover:bg-purple-700 group-hover:border-purple-300 transition">
                      <IconComponent size={40} className="text-purple-300 group-hover:text-purple-200 transition" />
                    </div>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-white font-bold text-center mb-6 text-lg">
                  {service.title}
                </h3>

                {/* Subcategories List */}
                <div className="space-y-3">
                  {service.subcategories.map((subcategory, subIndex) => (
                    <div
                      key={subIndex}
                      className="text-gray-300 text-sm hover:text-purple-300 transition cursor-pointer flex items-center gap-2"
                    >
                      <span className="text-purple-400">→</span>
                      {subcategory}
                    </div>
                  ))}
                </div>

                {/* Read More Link */}
                <div className="text-center mt-6 pt-6 border-t border-purple-600">
                  <a href="#" className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition">
                    Explore More →
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}