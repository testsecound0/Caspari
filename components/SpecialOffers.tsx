'use client'
import { motion } from 'framer-motion'
import { Clock, Percent, Gift, Users } from 'lucide-react'

export function SpecialOffers() {
  const offers = [
    {
      icon: <Percent className="w-8 h-8" />,
      title: 'Pizza Perfection Deal',
      subtitle: 'Monday & Tuesday Special',
      description: '2 for 1 on all pizzas',
      features: ['Authentic', 'Traditional', 'Delizioso'],
      discount: '50% OFF',
      color: 'from-italian-red to-italian-burgundy',
      bgPattern: '🍕'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Pasta Paradise',
      subtitle: 'Wednesday Offer',
      description: 'Free tiramisu with pasta dishes',
      features: ['Homemade', 'Traditional', 'Authentic'],
      discount: 'FREE DESSERT',
      color: 'from-italian-green to-green-700',
      bgPattern: '🍝'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Family Feast',
      subtitle: 'Weekend Special',
      description: 'Kids eat free with adult meals',
      features: ['Family', 'Generous', 'Memorable'],
      discount: 'KIDS FREE',
      color: 'from-gold-500 to-italian-terracotta',
      bgPattern: '👨‍👩‍👧‍👦'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Happy Hour Wines',
      subtitle: 'Daily 5-7 PM',
      description: 'Italian wines at special prices',
      features: ['Premium', 'Imported', 'Authentic'],
      discount: '30% OFF',
      color: 'from-italian-burgundy to-italian-olive',
      bgPattern: '🍷'
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
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-italian-burgundy to-italian-red relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-20 text-6xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          🍝
        </motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 text-6xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          🍕
        </motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/4 text-4xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🍷
        </motion.div>
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
            Offerte Limitate
          </span>
          <h2 className="text-5xl md:text-6xl font-italian font-bold text-white mb-6">
            Special Italian Offers
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gold-400 w-20"></div>
            <span className="mx-4 text-gold-400 text-3xl">🎉</span>
            <div className="h-px bg-gold-400 w-20"></div>
          </div>
          <p className="text-xl text-italian-cream max-w-3xl mx-auto leading-relaxed">
            Enjoy exclusive deals on our authentic Italian dishes. Treat yourself to great food 
            at unbeatable prices, available for limited time only.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-warm transition-all duration-300 transform hover:scale-105"
            >
              {/* Background pattern */}
              <div className="absolute top-4 right-4 text-4xl opacity-20">
                {offer.bgPattern}
              </div>

              {/* Discount badge */}
              <div className="absolute top-0 left-0 bg-italian-red text-white px-4 py-2 rounded-br-2xl">
                <span className="font-bold text-sm">{offer.discount}</span>
              </div>

              {/* Content */}
              <div className="p-6 pt-12">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${offer.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {offer.icon}
                </div>

                {/* Title and subtitle */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {offer.title}
                </h3>
                <p className="text-italian-red font-semibold text-sm mb-3">
                  {offer.subtitle}
                </p>
                <p className="text-gray-600 mb-4">
                  {offer.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {offer.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-italian-green rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action button */}
                <button className={`w-full bg-gradient-to-r ${offer.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  Claim Offer
                </button>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-3xl font-italian font-bold text-white mb-4">
              Don't Miss These Amazing Deals!
            </h3>
            <p className="text-xl text-italian-cream mb-6">
              Book now to secure your table and enjoy these limited-time offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-gold-600 transition-colors">
                Reserve Now
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