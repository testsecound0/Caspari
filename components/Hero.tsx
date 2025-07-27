import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white section-padding">
        <div className="container-max">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Caspari Italian
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            Exquisite Dining
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            The Taste of Italy in Englefield Green
          </p>
          <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto text-gray-200">
            Experience authentic Italian cuisine with fresh ingredients served the Italian way. 
            Located in the heart of Englefield Green, we bring you timeless flavors and warm hospitality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/menu"
              className="btn-primary text-lg px-8 py-4"
            >
              View Our Menu
            </Link>
            <div className="text-center sm:text-left">
              <p className="text-gold-400 font-semibold">Takeaway Available</p>
              <p className="text-sm">Collection Only</p>
              <p className="text-lg font-bold">01784 432 044</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
} 