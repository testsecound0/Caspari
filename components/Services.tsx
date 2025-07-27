'use client'
import { motion } from 'framer-motion'
import { Utensils, Clock, Car, Calendar, Wine, Users } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Dine-In Experience',
      description: 'Immerse yourself in authentic Italian ambiance with exceptional service and traditional flavors.',
      color: 'from-italian-red to-italian-burgundy'
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Table Reservations',
      description: 'Reserve your table with ease and ensure a perfect dining experience with priority seating.',
      color: 'from-italian-green to-green-700'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Takeaway Service',
      description: 'Enjoy our delicious Italian meals at home. Collection only - taste Caspari wherever you are.',
      color: 'from-gold-500 to-italian-terracotta'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Private Events',
      description: 'Host your special celebrations at Caspari with customized menus and dedicated service.',
      color: 'from-italian-burgundy to-italian-red'
    },
    {
      icon: <Wine className="w-8 h-8" />,
      title: 'Wine Selection',
      description: 'Discover our curated collection of Italian wines, from Tuscany to Piedmont regions.',
      color: 'from-italian-olive to-italian-green'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Extended Hours',
      description: 'Open all day Friday and Saturday. Perfect for lunch meetings or romantic dinners.',
      color: 'from-gold-600 to-gold-700'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-italian-green rounded-full"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-italian-red rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gold-500 rotate-45"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-gold-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            I Nostri Servizi
          </span>
          <h2 className="text-5xl md:text-6xl font-italian font-bold text-italian-red mb-6">
            Our Italian Services
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-italian-green w-20"></div>
            <span className="mx-4 text-italian-green text-3xl">🇮🇹</span>
            <div className="h-px bg-italian-green w-20"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience exceptional Italian hospitality with our comprehensive dining services, 
            designed to make every visit memorable.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-italian transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon container */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-italian-red transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-italian rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-italian font-bold mb-4">
              Ready for an Authentic Italian Experience?
            </h3>
            <p className="text-xl mb-6 text-italian-cream">
              Book your table today and discover the true taste of Italy in Englefield Green
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-italian-red px-8 py-3 rounded-full font-semibold hover:bg-gold-400 hover:text-white transition-colors">
                Make Reservation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-italian-red transition-colors">
                Call: 01784 432 044
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 