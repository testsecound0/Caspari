'use client'

import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Heart, Award, Users, Clock, Leaf, Star } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion for Authenticity',
      description: 'Every dish is crafted with love using traditional Italian recipes passed down through generations.'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Fresh Ingredients',
      description: 'We source the finest ingredients from local Italian suppliers and our own organic garden.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Family Tradition',
      description: 'The Caspari family has been sharing Italian culinary traditions for over four generations.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Our commitment to quality has earned us recognition as one of Florence\'s premier dining destinations.'
    }
  ]

  const team = [
    {
      name: 'Giuseppe Caspari',
      role: 'Executive Chef & Owner',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400',
      description: 'With 25 years of culinary experience, Giuseppe brings authentic Tuscan flavors to every dish.'
    },
    {
      name: 'Maria Caspari',
      role: 'Pastry Chef',
      image: 'https://images.unsplash.com/photo-1594736797933-d0201ba8e5c8?w=400',
      description: 'Maria creates our handmade desserts using traditional Italian techniques and seasonal ingredients.'
    },
    {
      name: 'Antonio Rossi',
      role: 'Sous Chef',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
      description: 'Antonio specializes in fresh pasta and seafood, bringing innovation to classic Italian dishes.'
    }
  ]

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
                La Nostra <span className="text-italian-gold">Storia</span>
              </h1>
              <div className="w-32 h-1 bg-italian-gold mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Four generations of Italian culinary tradition, bringing the authentic taste 
                of Tuscany to the heart of Florence since 1923
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-italian font-bold text-italian-red mb-8">
                  From Nonna's Kitchen to <span className="text-italian-green">Your Table</span>
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    The Caspari family story began in 1923 when Nonna Elena opened a small 
                    trattoria in the countryside of Tuscany. With just three tables and a heart 
                    full of passion, she served traditional recipes that had been in the family 
                    for generations.
                  </p>
                  
                  <p className="text-lg">
                    Today, her great-grandson Giuseppe continues this legacy in the heart of 
                    Florence, bringing the same authentic flavors and warm hospitality that made 
                    Nonna Elena's table a gathering place for the entire village.
                  </p>
                  
                  <p className="text-lg">
                    Every dish at Caspari tells a story - of sun-soaked Tuscan hillsides, 
                    of hands kneading pasta with love, of families gathering around tables 
                    filled with laughter and the finest Italian cuisine.
                  </p>
                </div>

                <div className="mt-8 flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-italian-red">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-gray-600">Rated #1 Italian Restaurant in Florence</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-warm">
                  <Image
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600"
                    alt="Caspari Restaurant Interior"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-italian">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-italian-red">100+</div>
                    <div className="text-sm text-gray-600">Years of Tradition</div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-italian">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-italian-green">4</div>
                    <div className="text-sm text-gray-600">Generations</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-r from-italian-cream to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-italian font-bold text-italian-red mb-4">
                I Nostri <span className="text-italian-green">Valori</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-italian mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                These core values guide everything we do, from selecting ingredients 
                to creating memorable dining experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-warm hover:shadow-italian transition-all duration-300 text-center group"
                >
                  <div className="bg-italian-red text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-italian-green transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-italian font-bold text-italian-red mb-4">
                Meet Our <span className="text-italian-green">Famiglia</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-italian mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                The passionate team behind every exceptional dish and memorable experience at Caspari
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-warm overflow-hidden hover:shadow-italian transition-all duration-300 group"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-italian font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <div className="text-italian-red font-semibold mb-4">{member.role}</div>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-gradient-to-r from-italian-red via-italian-burgundy to-italian-red text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-italian-pattern opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-italian font-bold mb-4">
                Awards & <span className="text-italian-gold">Recognition</span>
              </h2>
              <div className="w-24 h-1 bg-italian-gold mx-auto mb-6"></div>
              <p className="text-xl max-w-2xl mx-auto">
                Our commitment to excellence has been recognized by culinary experts and food lovers alike
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-italian-gold text-italian-red p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Michelin Guide</h3>
                <p>Featured in Michelin Guide 2023</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-italian-gold text-italian-red p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">TripAdvisor</h3>
                <p>Certificate of Excellence 2023</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-italian-gold text-italian-red p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Local Choice</h3>
                <p>#1 Italian Restaurant in Florence</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-italian-cream">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-italian font-bold text-italian-red mb-6">
                Experience Our <span className="text-italian-green">Passion</span>
              </h2>
              <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
                Join us for an unforgettable journey through authentic Italian flavors 
                in the heart of beautiful Florence
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-italian-red to-italian-burgundy text-white font-semibold rounded-full hover:shadow-warm transition-all duration-300"
                >
                  🍝 Explore Our Menu
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-italian-red text-italian-red font-semibold rounded-full hover:bg-italian-red hover:text-white transition-all duration-300"
                >
                  📞 Make a Reservation
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 