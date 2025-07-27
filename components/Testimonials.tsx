'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Maria Rossi',
      role: 'Food Critic',
      content: 'The most authentic Italian experience I\'ve had outside of Italy. The pasta is perfectly al dente and the sauces are divine!',
      rating: 5,
      image: 'https://via.placeholder.com/100x100/FF6B6B/FFFFFF?text=MR',
    },
    {
      id: 2,
      name: 'Giuseppe Bianchi',
      role: 'Regular Customer',
      content: 'I come here every week for the Osso Buco. It reminds me of my grandmother\'s cooking in Sicily.',
      rating: 5,
      image: 'https://via.placeholder.com/100x100/4ECDC4/FFFFFF?text=GB',
    },
    {
      id: 3,
      name: 'Sofia Martinez',
      role: 'Food Blogger',
      content: 'The atmosphere is incredible and the wine selection is outstanding. Perfect for date nights!',
      rating: 5,
      image: 'https://via.placeholder.com/100x100/45B7D1/FFFFFF?text=SM',
    },
    {
      id: 4,
      name: 'Marco Romano',
      role: 'Chef',
      content: 'As a chef myself, I appreciate the attention to detail and authentic techniques used here.',
      rating: 5,
      image: 'https://via.placeholder.com/100x100/96CEB4/FFFFFF?text=MR',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-italian-cream via-white to-gold-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-9xl text-italian-red">💝</div>
        <div className="absolute bottom-20 right-20 text-9xl text-italian-green">⭐</div>
      </div>

      <div className="container-max section-padding relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-italian-red text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Cosa Dicono i Nostri Ospiti
          </span>
          <h2 className="text-5xl md:text-6xl font-italian font-bold text-italian-red mb-6">
            Guest Testimonials
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gold-500 w-20"></div>
            <span className="mx-4 text-gold-500 text-3xl">✨</span>
            <div className="h-px bg-gold-500 w-20"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Hear from our satisfied guests who have experienced the exceptional dining 
            and memorable moments at Caspari Italian.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative bg-white rounded-3xl shadow-italian p-8 md:p-12"
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-italian-red opacity-20">
              <Quote size={48} />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold-500 fill-current" />
              ))}
            </div>

            {/* Testimonial text */}
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-8 relative z-10">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author info */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-gold-200"
              />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-italian-red font-medium">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-italian-red text-white p-3 rounded-full hover:bg-italian-burgundy transition-colors shadow-lg"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-italian-red text-white p-3 rounded-full hover:bg-italian-burgundy transition-colors shadow-lg"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-italian-red' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-italian-red mb-2">500+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-italian-green mb-2">4.9★</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold-600 mb-2">35+</div>
            <p className="text-gray-600">Years of Excellence</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 