'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut, Settings, Menu as MenuIcon } from 'lucide-react'
import toast from 'react-hot-toast'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check authentication status
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/verify', {
        credentials: 'include'
      })
      if (response.ok) {
        setIsAuthenticated(true)
      } else {
        router.push('/admin/login')
      }
    } catch (error) {
      router.push('/admin/login')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      })
      toast.success('Logged out successfully')
      router.push('/admin/login')
    } catch (error) {
      toast.error('Logout failed')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const sidebarItems = [
    { href: '/admin', label: 'Dashboard', icon: '📊' },
    { href: '/admin/categories', label: 'Categories', icon: '📂' },
    { href: '/admin/menu-items', label: 'Menu Items', icon: '🍽️' },
    { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0`}>
        <div className="flex items-center justify-center h-16 bg-primary-600">
          <h1 className="text-xl font-bold text-white">Caspari Admin</h1>
        </div>
        
        <nav className="mt-8">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-colors"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="mr-3 text-xl">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="md:ml-64">
        {/* Top bar */}
        <header className="bg-white shadow-sm border-b">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900"
            >
              <MenuIcon size={24} />
            </button>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, Admin</span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
} 