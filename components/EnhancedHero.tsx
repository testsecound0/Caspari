'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Clock, MapPin } from 'lucide-react'

export function EnhancedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-italian-green via-italian-red to-italian-burgundy pt-24">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-italian-gold rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-italian-cream rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold-400 rotate-45 animate-pulse"></div>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center text-white px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container-max">
          {/* Top badge */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <span className="inline-block bg-italian-gold text-italian-red px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg border border-italian-gold/20">
              Since 1985 • Autentico Italiano
            </span>
          </motion.div>

          {/* Main heading with Italian flair */}
          <motion.h1 
            className="text-6xl md:text-8xl font-italian font-bold mb-6 bg-gradient-to-r from-italian-cream to-gold-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Caspari Italian
          </motion.h1>
          
          <motion.div 
            className="flex items-center justify-center mb-4"
            variants={itemVariants}
          >
            <div className="h-px bg-gold-400 w-16"></div>
            <span className="mx-4 text-gold-400 text-2xl">✦</span>
            <div className="h-px bg-gold-400 w-16"></div>
          </motion.div>

          <motion.p 
            className="text-2xl md:text-3xl mb-4 font-light text-italian-cream"
            variants={itemVariants}
          >
            Indulge in Caspari Delights
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gold-200"
            variants={itemVariants}
          >
            The Taste of Italy in Englefield Green
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed"
            variants={itemVariants}
          >
            Experience an exquisite dining adventure with our gourmet Italian menu, 
            cozy ambiance, and memorable moments. Indulge in authentic flavors that delight.
          </motion.p>
          
          {/* Action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <Link
              href="/menu"
              className="group relative overflow-hidden bg-italian-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-italian hover:shadow-xl transform hover:scale-105"
            >
              <span className="relative z-10">Explore Menu</span>
              <div className="absolute inset-0 bg-gradient-to-r from-italian-red to-italian-burgundy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              href="#reservation"
              className="group relative overflow-hidden bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-italian-red px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Book a Table
            </Link>
          </motion.div>

          {/* Quick contact info */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center space-x-3 text-italian-cream">
              <Phone className="text-gold-400" size={20} />
              <div>
                <p className="text-sm text-gold-400">Call Now</p>
                <p className="font-semibold">01784 432 044</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-italian-cream">
              <Clock className="text-gold-400" size={20} />
              <div>
                <p className="text-sm text-gold-400">Open Today</p>
                <p className="font-semibold">11:30 - 23:00</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-italian-cream">
              <MapPin className="text-gold-400" size={20} />
              <div>
                <p className="text-sm text-gold-400">Location</p>
                <p className="font-semibold">Englefield Green</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
} 