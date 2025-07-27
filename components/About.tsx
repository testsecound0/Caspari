export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Welcome To Caspari
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              A Little About Caspari - The Taste of Italy in Englefield Green
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Caspari Italian Restaurant is nestled in the friendly village of Englefield Green, 
              just a stone's throw from Egham and Virginia Water in Surrey. We're renowned for our 
              fresh and fabulous food as well as our friendly and attentive service.
            </p>
            
            <div className="bg-primary-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">
                ♥ Our Service Commitment
              </h3>
              <p className="text-primary-700 font-medium mb-2">
                It's simple but timeless
              </p>
              <p className="text-gray-700">
                Greet our guests in a friendly fashion, pay attention and get you what they want, 
                and last but not least, thank them for their business. Always using fresh ingredients 
                and served the Italian way.
              </p>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/600/400?text=Caspari+Restaurant"
                alt="Caspari Italian Restaurant Interior"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg">
              <p className="font-semibold">Bruce</p>
              <p className="text-sm">Caspari Italian Restaurant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 