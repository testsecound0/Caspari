'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Eye } from 'lucide-react'
import Image from 'next/image'

const specialItems = [
  {
    id: 1,
    name: 'Spaghetti alla Carbonara',
    description: 'Classic Roman pasta with guanciale, eggs, pecorino Romano, and black pepper',
    price: 18.95,
    image: 'https://via.placeholder.com/400x300/96CEB4/FFFFFF?text=Carbonara',
    category: 'Pasta',
    isSpecial: true,
    allergens: ['Gluten', 'Eggs']
  },
  {
    id: 2,
    name: 'Pizza Margherita',
    description: 'Traditional Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, and basil',
    price: 16.95,
    image: 'https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=Pizza',
    category: 'Pizza',
    isSpecial: true,
    allergens: ['Gluten', 'Dairy']
  },
  {
    id: 3,
    name: 'Osso Buco alla Milanese',
    description: 'Braised veal shanks with vegetables, white wine, and saffron risotto',
    price: 32.95,
    image: 'https://via.placeholder.com/400x300/4ECDC4/FFFFFF?text=Osso+Buco',
    category: 'Main Course',
    isSpecial: true,
    allergens: ['Dairy']
  },
  {
    id: 4,
    name: 'Tiramisù',
    description: 'Classic Italian dessert with mascarpone, ladyfingers, espresso, and cocoa',
    price: 8.95,
    image: 'https://via.placeholder.com/400x300/45B7D1/FFFFFF?text=Tiramisu',
    category: 'Dessert',
    isSpecial: true,
    allergens: ['Gluten', 'Dairy', 'Eggs']
  },
  {
    id: 5,
    name: 'Bruschetta Classica',
    description: 'Toasted artisan bread topped with fresh Roma tomatoes, basil, and extra virgin olive oil',
    price: 8.95,
    image: 'https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=Bruschetta',
    category: 'Starter',
    isSpecial: false,
    allergens: ['Gluten']
  },
  {
    id: 6,
    name: 'Linguine alle Vongole',
    description: 'Linguine with fresh clams, white wine, garlic, parsley, and a touch of chili',
    price: 22.95,
    image: 'https://via.placeholder.com/400x300/DDA0DD/FFFFFF?text=Linguine',
    category: 'Pasta',
    isSpecial: false,
    allergens: ['Gluten', 'Shellfish']
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function EnhancedMenuPreview() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-italian-cream to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-italian-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-italian font-bold text-italian-red mb-4">
            La Nostra <span className="text-italian-green">Specialità</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-italian mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our chef's special selections, crafted with authentic Italian ingredients 
            and time-honored recipes passed down through generations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {specialItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-warm hover:shadow-italian transition-all duration-500 overflow-hidden hover-lift"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Special Badge */}
              {item.isSpecial && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-gradient-to-r from-italian-red to-italian-burgundy text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Chef's Special
                  </span>
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                >
                  <button className="bg-white text-italian-red p-3 rounded-full shadow-lg hover:bg-italian-cream transition-colors duration-300">
                    <Eye size={24} />
                  </button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-italian font-semibold text-gray-900 group-hover:text-italian-red transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-italian-green">
                    €{item.price}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-italian-gold bg-italian-cream px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  
                  {/* View Details Button */}
                  <Link href="/menu" className="inline-flex items-center text-italian-red hover:text-italian-burgundy font-medium text-sm transition-colors duration-300">
                    <Eye size={16} className="mr-1" />
                    View Details
                  </Link>
                </div>

                {/* Allergen Info */}
                {item.allergens && item.allergens.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                      Contains: {item.allergens.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/menu"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-italian-red to-italian-burgundy text-white font-semibold rounded-full hover:shadow-warm transition-all duration-300 transform hover:scale-105"
          >
            Explore Full Menu
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 