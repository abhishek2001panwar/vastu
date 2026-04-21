'use client'

const stats = [
  {
    number: '6+',
    label: 'Year of Experience'
  },
  {
    number: '520+',
    label: 'Happy Clients'
  },
  {
    number: '10+',
    label: 'Services'
  },
  {
    number: '137+',
    label: 'Professionals Network'
  }
]

export default function Stats() {
  return (
    <section className="w-full bg-[#160033] py-16 relative overflow-hidden border-y border-dashed border-purple-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><circle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%221%22/><circle cx=%2250%22 cy=%2250%22 r=%2230%22 fill=%22none%22 stroke=%22%23fff%22 stroke-width=%220.5%22/></svg>')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 py-8 px-4 border-r border-dashed border-purple-600 last:border-r-0"
            >
              {/* Number Circle with Dotted Border */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Outer dotted circle */}
                <div className="absolute inset-0 border-2 border-dashed border-purple-600 rounded-full"></div>
                {/* Inner circle */}
                <div className="absolute inset-1 border border-dashed border-purple-700 rounded-full"></div>
                {/* Number */}
                <span className="relative z-10 text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                  {stat.number}
                </span>
              </div>

              {/* Label */}
              <p className="text-center text-gray-300 font-semibold text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}