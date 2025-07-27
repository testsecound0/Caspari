'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed w-full z-50 top-4 left-0 right-0">
      <div className="container mx-auto px-4">
        <div className="backdrop-blur-md bg-white/80 border border-white/20 rounded-2xl shadow-lg mx-4">
          <div className="flex justify-between items-center h-16 px-6">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-italian-red to-italian-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <div>
                  <h1 className="text-xl font-italian font-bold text-italian-red group-hover:text-italian-green transition-colors duration-300">
                    Caspari
                  </h1>
                  <p className="text-xs text-italian-burgundy font-medium">Ristorante Italiano</p>
                </div>
              </div>
            </Link>

            {/* Quick Contact Info - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-italian-red" />
                <span>+39 055 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-italian-green" />
                <span>Via dei Neri, 25 - Firenze</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-4 py-2 text-gray-700 hover:text-italian-red font-medium transition-all duration-300 group"
                  >
                    {item.label}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-italian scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                ))}
                <Link
                  href="/admin"
                  className="ml-4 px-4 py-2 bg-gradient-to-r from-italian-red to-italian-burgundy text-white rounded-full hover:shadow-warm transition-all duration-300 transform hover:scale-105 font-medium text-sm"
                >
                  Admin
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-italian-red hover:text-italian-green transition-colors duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-white/20 bg-white/90 backdrop-blur-md rounded-b-2xl">
              <div className="px-4 pt-2 pb-4 space-y-1">
                {/* Quick Contact Info - Mobile */}
                <div className="pb-4 mb-4 border-b border-white/20">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <Phone className="w-4 h-4 text-italian-red" />
                    <span>+39 055 123 456</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-italian-green" />
                    <span>Via dei Neri, 25 - Firenze</span>
                  </div>
                </div>

                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-3 text-gray-700 hover:text-italian-red hover:bg-white/50 rounded-lg font-medium transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/admin"
                  className="block w-full text-center mt-4 px-6 py-3 bg-gradient-to-r from-italian-red to-italian-burgundy text-white rounded-full font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Admin Panel
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
} 