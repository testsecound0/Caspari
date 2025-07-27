'use client'
import { useState } from 'react'
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

// Static data
const DUMMY_CATEGORIES: Category[] = [
  {
    _id: 'antipasti',
    name: 'Antipasti',
    slug: 'antipasti',
    description: 'Traditional Italian starters to awaken your appetite',
    order: 1
  },
  {
    _id: 'primi',
    name: 'Primi Piatti',
    slug: 'primi',
    description: 'First courses featuring pasta, risotto, and traditional Italian dishes',
    order: 2
  },
  {
    _id: 'secondi',
    name: 'Secondi Piatti',
    slug: 'secondi',
    description: 'Main courses with meat, fish, and poultry prepared with authentic Italian techniques',
    order: 3
  },
  {
    _id: 'contorni',
    name: 'Contorni',
    slug: 'contorni',
    description: 'Side dishes and vegetables to complement your main course',
    order: 4
  },
  {
    _id: 'dolci',
    name: 'Dolci',
    slug: 'dolci',
    description: 'Traditional Italian desserts and sweet endings',
    order: 5
  }
]

const DUMMY_MENU_ITEMS: MenuItem[] = [
  {
    _id: '1',
    name: 'Bruschetta al Pomodoro',
    description: 'Toasted artisan bread topped with fresh Roma tomatoes, basil, garlic, and extra virgin olive oil',
    price: 8.50,
    image: 'https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=Bruschetta',
    category: 'antipasti',
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: false,
    isSpicy: false,
    allergens: ['Gluten'],
    order: 1
  },
  {
    _id: '2',
    name: 'Carpaccio di Manzo',
    description: 'Thinly sliced raw beef with arugula, parmesan cheese, truffle oil, and lemon',
    price: 16.00,
    image: 'https://via.placeholder.com/400x300/4ECDC4/FFFFFF?text=Carpaccio',
    category: 'antipasti',
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    order: 2
  },
  {
    _id: '3',
    name: 'Burrata con Prosciutto',
    description: 'Fresh burrata cheese served with aged prosciutto di Parma and balsamic glaze',
    price: 14.50,
    image: 'https://via.placeholder.com/400x300/45B7D1/FFFFFF?text=Burrata',
    category: 'antipasti',
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    allergens: ['Dairy'],
    order: 3
  },
  {
    _id: '4',
    name: 'Spaghetti alla Carbonara',
    description: 'Classic Roman pasta with guanciale, eggs, pecorino Romano, and black pepper',
    price: 18.50,
    image: 'https://via.placeholder.com/400x300/96CEB4/FFFFFF?text=Carbonara',
    category: 'primi',
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    allergens: ['Gluten', 'Eggs'],
    order: 4
  },
  {
    _id: '5',
    name: 'Risotto ai Funghi',
    description: 'Creamy risotto with wild mushrooms, parmesan cheese, and white wine',
    price: 16.00,
    image: 'https://via.placeholder.com/400x300/FFEAA7/000000?text=Risotto',
    category: 'primi',
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    allergens: ['Dairy'],
    order: 5
  },
  {
    _id: '6',
    name: 'Linguine alle Vongole',
    description: 'Linguine with fresh clams, white wine, garlic, parsley, and chili',
    price: 22.00,
    image: 'https://via.placeholder.com/400x300/DDA0DD/FFFFFF?text=Linguine',
    category: 'primi',
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: true,
    allergens: ['Gluten', 'Shellfish'],
    order: 6
  },
  {
    _id: '7',
    name: 'Penne all\'Arrabbiata',
    description: 'Penne pasta in spicy tomato sauce with garlic, chili, and fresh basil',
    price: 15.50,
    image: 'https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=Arrabbiata',
    category: 'primi',
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: false,
    isSpicy: true,
    allergens: ['Gluten'],
    order: 7
  },
  {
    _id: '8',
    name: 'Saltimbocca alla Romana',
    description: 'Veal cutlets wrapped with prosciutto and sage, cooked in white wine',
    price: 24.00,
    image: 'https://via.placeholder.com/400x300/4ECDC4/FFFFFF?text=Saltimbocca',
    category: 'secondi',
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    allergens: ['Gluten', 'Dairy'],
    order: 8
  },
  {
    _id: '9',
    name: 'Branzino al Forno',
    description: 'Whole sea bass baked with herbs, lemon, and extra virgin olive oil',
    price: 26.00,
    image: 'https://via.placeholder.com/400x300/45B7D1/FFFFFF?text=Branzino',
    category: 'secondi',
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    order: 9
  },
  {
    _id: '10',
    name: 'Osso Buco alla Milanese',
    description: 'Braised veal shanks with vegetables, white wine, and gremolata',
    price: 28.00,
    image: 'https://via.placeholder.com/400x300/96CEB4/FFFFFF?text=Osso+Buco',
    category: 'secondi',
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    order: 10
  },
  {
    _id: '11',
    name: 'Pollo alla Parmigiana',
    description: 'Breaded chicken breast with tomato sauce, mozzarella, and parmesan',
    price: 20.00,
    image: 'https://via.placeholder.com/400x300/FFEAA7/000000?text=Parmigiana',
    category: 'secondi',
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    allergens: ['Gluten', 'Dairy'],
    order: 11
  },
  {
    _id: '12',
    name: 'Patate Arrosto',
    description: 'Roasted potatoes with rosemary, garlic, and sea salt',
    price: 6.50,
    image: 'https://via.placeholder.com/400x300/DDA0DD/FFFFFF?text=Patate',
    category: 'contorni',
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isSpicy: false,
    order: 12
  },
  {
    _id: '13',
    name: 'Verdure Grigliate',
    description: 'Grilled seasonal vegetables with balsamic glaze and herbs',
    price: 7.00,
    image: 'https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=Verdure',
    category: 'contorni',
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isSpicy: false,
    order: 13
  },
  {
    _id: '14',
    name: 'Insalata Caprese',
    description: 'Fresh mozzarella, tomatoes, basil, and extra virgin olive oil',
    price: 9.00,
    image: 'https://via.placeholder.com/400x300/4ECDC4/FFFFFF?text=Caprese',
    category: 'contorni',
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    allergens: ['Dairy'],
    order: 14
  },
  {
    _id: '15',
    name: 'Tiramisù',
    description: 'Classic Italian dessert with mascarpone cream, coffee-soaked ladyfingers, and cocoa',
    price: 9.00,
    image: 'https://via.placeholder.com/400x300/45B7D1/FFFFFF?text=Tiramisu',
    category: 'dolci',
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    order: 15
  },
  {
    _id: '16',
    name: 'Panna Cotta',
    description: 'Silky vanilla cream dessert with berry compote',
    price: 8.50,
    image: 'https://via.placeholder.com/400x300/96CEB4/FFFFFF?text=Panna+Cotta',
    category: 'dolci',
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    allergens: ['Dairy'],
    order: 16
  },
  {
    _id: '17',
    name: 'Gelato Artigianale',
    description: 'Homemade Italian ice cream with seasonal flavors',
    price: 7.50,
    image: 'https://via.placeholder.com/400x300/FFEAA7/000000?text=Gelato',
    category: 'dolci',
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    allergens: ['Dairy'],
    order: 17
  },
  {
    _id: '18',
    name: 'Cannoli Siciliani',
    description: 'Crispy pastry shells filled with sweet ricotta and chocolate chips',
    price: 8.00,
    image: 'https://via.placeholder.com/400x300/DDA0DD/FFFFFF?text=Cannoli',
    category: 'dolci',
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    allergens: ['Gluten', 'Dairy'],
    order: 18
  }
]

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const filteredItems = selectedCategory === 'all' 
    ? DUMMY_MENU_ITEMS 
    : DUMMY_MENU_ITEMS.filter(item => item.category === selectedCategory)

  const getDietaryIcons = (item: MenuItem) => {
    const icons = []
    if (item.isVegetarian) icons.push({ icon: <Leaf className="w-4 h-4 text-green-600" />, label: 'Vegetarian' })
    if (item.isVegan) icons.push({ icon: '🌱', label: 'Vegan' })
    if (item.isGlutenFree) icons.push({ icon: <Wheat className="w-4 h-4 text-amber-600" />, label: 'Gluten Free' })
    if (item.isSpicy) icons.push({ icon: <Flame className="w-4 h-4 text-red-600" />, label: 'Spicy' })
    return icons
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
                {DUMMY_CATEGORIES.map((category) => (
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
            {DUMMY_CATEGORIES.map((category) => {
              const categoryItems = DUMMY_MENU_ITEMS.filter(item => item.category === category._id)
              
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