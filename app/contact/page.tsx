'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { MapPin, Phone, Mail, Clock, Calendar, Heart } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Reservation request:', formData)
    alert('Grazie! We have received your reservation request and will contact you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-italian-cream to-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-italian-green via-italian-red to-italian-burgundy overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-italian-pattern opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-italian font-bold mb-6">
                Contatti & <span className="text-italian-gold">Prenotazioni</span>
              </h1>
              <div className="w-32 h-1 bg-italian-gold mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Visit us in the heart of Florence for an unforgettable Italian dining experience. 
                We look forward to welcoming you to our family.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information & Reservation Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-italian font-bold text-italian-red mb-8">
                    Find Us in <span className="text-italian-green">Firenze</span>
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-warm hover:shadow-italian transition-all duration-300">
                      <div className="bg-italian-red p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Location</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Via dei Neri, 25<br />
                          50122 Firenze, Italy<br />
                          Near Ponte Vecchio & Uffizi Gallery
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-warm hover:shadow-italian transition-all duration-300">
                      <div className="bg-italian-green p-3 rounded-full">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600">
                          <a href="tel:+39055123456" className="hover:text-italian-red transition-colors">
                            +39 055 123 456
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">Call for reservations</p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-warm hover:shadow-italian transition-all duration-300">
                      <div className="bg-italian-burgundy p-3 rounded-full">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:info@caspari-italian.net" className="hover:text-italian-red transition-colors">
                            info@caspari-italian.net
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="bg-gradient-to-br from-italian-red to-italian-burgundy p-8 rounded-2xl text-white">
                  <div className="flex items-center mb-6">
                    <Clock className="w-8 h-8 text-italian-gold mr-3" />
                    <h3 className="text-2xl font-italian font-bold">Orari di Apertura</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Thursday</span>
                      <span>12:00 - 15:00, 19:00 - 23:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Friday - Saturday</span>
                      <span>12:00 - 15:00, 19:00 - 24:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>12:00 - 15:00, 19:00 - 22:00</span>
                    </div>
                    <div className="pt-3 border-t border-italian-gold border-opacity-30">
                      <p className="text-italian-gold text-sm">
                        Kitchen closes 30 minutes before closing time
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Reservation Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-warm"
              >
                <div className="flex items-center mb-8">
                  <Calendar className="w-8 h-8 text-italian-red mr-3" />
                  <h2 className="text-3xl font-italian font-bold text-italian-red">
                    Make a Reservation
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-red focus:border-transparent transition-all duration-300"
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-red focus:border-transparent transition-all duration-300"
                        placeholder="mario@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-red focus:border-transparent transition-all duration-300"
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-red focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time *
                      </label>
                      <select
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-red focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select time</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Guests *
                      </label>
                      <select
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-red focus:border-transparent transition-all duration-300"
                      >
                        {[1,2,3,4,5,6,7,8].map(num => (
                          <option key={num} value={num.toString()}>
                            {num} {num === 1 ? 'person' : 'people'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-italian-red focus:border-transparent transition-all duration-300"
                      placeholder="Dietary restrictions, special occasions, etc..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-italian-red to-italian-burgundy text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-warm transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Heart className="w-5 h-5" />
                    <span>Reserve Your Table</span>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-italian-cream">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-italian font-bold text-italian-red mb-4">
                Visit Us in <span className="text-italian-green">Historic Florence</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Located in the heart of Florence, just steps away from the famous Ponte Vecchio 
                and the renowned Uffizi Gallery
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-warm overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.347!2d11.253075!3d43.767839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ2JzA0LjIiTiAxMcKwMTUnMTEuMSJF!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Caspari Restaurant Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-italian-green via-italian-red to-italian-burgundy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-italian-pattern opacity-10"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-italian font-bold mb-6">
                <span className="text-italian-gold">Benvenuti</span> alla Famiglia Caspari
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We can't wait to welcome you to our family table and share the authentic taste of Italy with you.
              </p>
              <motion.a
                href="/menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-italian-red font-semibold rounded-full hover:bg-italian-cream transition-all duration-300 shadow-warm"
              >
                🍝 Explore Our Menu
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 