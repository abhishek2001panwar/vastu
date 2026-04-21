'use client'

import { Zap, Users, DollarSign, Book, HeadphonesIcon, Star } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Fast & Reliable Services',
    description: '100% Online, Hassle Free Process.'
  },
  {
    icon: Users,
    title: 'Expert Vastu Professional',
    description: 'Serving since 10 years'
  },
  {
    icon: DollarSign,
    title: 'Affordable Prices',
    description: 'Genuine & affordable'
  },
  {
    icon: Book,
    title: 'Vast Knowledge',
    description: 'Feasible & easy remedies'
  },
  {
    icon: HeadphonesIcon,
    title: '24*7 Support Services',
    description: 'On Call, Email, Chat & Whatsapp'
  },
  {
    icon: Star,
    title: 'Special Attention',
    description: 'Detailed analysis of the problem'
  }
]

export default function Why() {
  return (
    <section id="why-choose-us" className="min-h-screen bg-[#160033] py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%221%22/><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%220.5%22/></svg>')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            WHY CHOOSE US?
          </h2>
          
          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-purple-600"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <div className="h-1 w-12 bg-purple-600"></div>
          </div>
        </div>

        {/* Reasons Grid - 3 Columns */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div
                key={index}
                className="border border-dashed  bg-opacity-20 backdrop-blur-md  backdrop-blur-md p-8 rounded-lg hover:border-purple-400 hover:bg-opacity-50 transition group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full border-2 border-purple-500 flex items-center justify-center group-hover:bg-purple-700 group-hover:border-purple-300 transition">
                    <IconComponent size={32} className="text-purple-300 group-hover:text-purple-200 transition" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}