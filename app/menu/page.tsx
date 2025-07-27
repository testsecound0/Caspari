'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Eye, Leaf, Wheat, Flame } from 'lucide-react'
import Image from 'next/image'

interface Category {
  _id: string
  name: string
  slug: string
  description?: string
  image?: string
  order: number
}

interface MenuItem {
  _id: string
  name: string
  description: string
  price: number
  image?: string
  category: string
  isVegetarian: boolean
  isVegan: boolean
  isGlutenFree: boolean
  isSpicy: boolean
  allergens?: string[]
  order: number
}

export default function MenuPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [loading, setLoading] = useState(true)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [categoriesRes, itemsRes] = await Promise.all([
        fetch('/api/categories'),
        fetch('/api/menu-items')
      ])

      if (categoriesRes.ok) {
        const categoriesData = await categoriesRes.json()
        setCategories(categoriesData)
      }

      if (itemsRes.ok) {
        const itemsData = await itemsRes.json()
        setMenuItems(itemsData)
      }
    } catch (error) {
      console.error('Error fetching menu data:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  const getDietaryIcons = (item: MenuItem) => {
    const icons = []
    if (item.isVegetarian) icons.push({ icon: <Leaf className="w-4 h-4 text-green-600" />, label: 'Vegetarian' })
    if (item.isVegan) icons.push({ icon: '🌱', label: 'Vegan' })
    if (item.isGlutenFree) icons.push({ icon: <Wheat className="w-4 h-4 text-amber-600" />, label: 'Gluten Free' })
    if (item.isSpicy) icons.push({ icon: <Flame className="w-4 h-4 text-red-600" />, label: 'Spicy' })
    return icons
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-italian-cream to-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-italian-red border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-italian-cream to-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-r from-italian-red via-italian-burgundy to-italian-red overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-italian-pattern opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-italian font-bold mb-6">
                La Nostra <span className="text-italian-gold">Carta</span>
              </h1>
              <div className="w-32 h-1 bg-italian-gold mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Authentic Italian cuisine crafted with the finest ingredients, 
                traditional recipes, and passionate dedication to culinary excellence
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 relative">
          <div className="container mx-auto px-4">
            <div className="backdrop-blur-md bg-white/80 border border-white/20 rounded-2xl shadow-lg mx-4 sticky top-20 z-40">
              <div className="flex flex-wrap gap-3 justify-center p-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-italian-red to-italian-burgundy text-white shadow-italian'
                      : 'bg-white/50 text-italian-red hover:bg-italian-green hover:text-white border border-italian-cream'
                  }`}
                >
                  All Specialties
                </motion.button>
                {categories.map((category) => (
                  <motion.button
                    key={category._id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category._id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category._id
                        ? 'bg-gradient-to-r from-italian-red to-italian-burgundy text-white shadow-italian'
                        : 'bg-white/50 text-italian-red hover:bg-italian-green hover:text-white border border-italian-cream'
                    }`}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {categories.map((category) => {
              const categoryItems = menuItems.filter(item => item.category === category._id)
              
              if (selectedCategory !== 'all' && selectedCategory !== category._id) {
                return null
              }

              if (categoryItems.length === 0) {
                return null
              }

              return (
                <motion.div 
                  key={category._id} 
                  className="mb-20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-italian font-bold text-italian-red mb-4">
                      {category.name}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-italian mx-auto mb-6"></div>
                    {category.description && (
                      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        {category.description}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {categoryItems.map((item, index) => (
                      <motion.div 
                        key={item._id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-white rounded-2xl shadow-warm hover:shadow-italian transition-all duration-500 overflow-hidden hover-lift"
                        onMouseEnter={() => setHoveredItem(item._id)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        {item.image && (
                          <div className="relative h-64 overflow-hidden rounded-t-2xl">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            {/* Overlay with View Details */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: hoveredItem === item._id ? 1 : 0 }}
                              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                            >
                              <button className="bg-white text-italian-red p-4 rounded-full shadow-lg hover:bg-italian-cream transition-all duration-300 transform hover:scale-110">
                                <Eye size={24} />
                              </button>
                            </motion.div>
                          </div>
                        )}
                        
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-italian font-semibold text-gray-900 group-hover:text-italian-red transition-colors duration-300">
                              {item.name}
                            </h3>
                            <span className="text-2xl font-bold text-italian-green">
                              €{item.price.toFixed(2)}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                            {item.description}
                          </p>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex space-x-2">
                              {getDietaryIcons(item).map((dietary, index) => (
                                <span
                                  key={index}
                                  className="flex items-center"
                                  title={dietary.label}
                                >
                                  {dietary.icon}
                                </span>
                              ))}
                            </div>
                            
                            <button className="inline-flex items-center text-italian-red hover:text-italian-burgundy font-medium text-sm transition-colors duration-300">
                              <Eye size={16} className="mr-1" />
                              View Details
                            </button>
                          </div>
                          
                          {item.allergens && item.allergens.length > 0 && (
                            <div className="pt-4 border-t border-gray-100">
                              <p className="text-xs text-gray-500">
                                <span className="font-medium">Contains:</span> {item.allergens.join(', ')}
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}

            {filteredItems.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-4">🍽️</div>
                <p className="text-xl text-gray-600">No specialties available in this category.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-italian-red via-italian-burgundy to-italian-red text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-italian-pattern opacity-10"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-italian font-bold mb-6">
                Ready to Experience <span className="text-italian-gold">Caspari?</span>
              </h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto">
                Visit us for an authentic Italian dining experience or contact us for reservations
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="tel:+39055123456"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-italian-red font-semibold rounded-full hover:bg-italian-cream transition-all duration-300 shadow-warm"
                >
                  📞 Call: +39 055 123 456
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-italian-red transition-all duration-300"
                >
                  🏛️ Visit Us
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