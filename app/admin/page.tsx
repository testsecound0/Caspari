'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { PlusCircle, Eye, Edit } from 'lucide-react'

interface Stats {
  totalCategories: number
  totalMenuItems: number
  activeItems: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ totalCategories: 0, totalMenuItems: 0, activeItems: 0 })
  const [recentItems, setRecentItems] = useState([])

  useEffect(() => {
    fetchStats()
    fetchRecentItems()
  }, [])

  const fetchStats = async () => {
    // Mock stats for now - in a real app, create API endpoints for this
    setStats({
      totalCategories: 7,
      totalMenuItems: 45,
      activeItems: 42
    })
  }

  const fetchRecentItems = async () => {
    try {
      const response = await fetch('/api/menu-items?limit=5')
      if (response.ok) {
        const items = await response.json()
        setRecentItems(items.slice(0, 5))
      }
    } catch (error) {
      console.error('Error fetching recent items:', error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <Link
          href="/"
          target="_blank"
          className="btn-secondary"
        >
          <Eye className="mr-2" size={16} />
          View Website
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <span className="text-2xl">📂</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Categories</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalCategories}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <span className="text-2xl">🍽️</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Menu Items</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalMenuItems}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <span className="text-2xl">✅</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Items</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeItems}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="p-6 space-y-4">
            <Link
              href="/admin/categories"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <PlusCircle className="text-primary-600 mr-3" size={24} />
              <div>
                <p className="font-medium text-gray-900">Manage Categories</p>
                <p className="text-sm text-gray-600">Add, edit, or organize menu categories</p>
              </div>
            </Link>

            <Link
              href="/admin/menu-items"
              className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Edit className="text-primary-600 mr-3" size={24} />
              <div>
                <p className="font-medium text-gray-900">Manage Menu Items</p>
                <p className="text-sm text-gray-600">Add, edit, or remove menu items</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Restaurant Info */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Restaurant Information</h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-600">Address</p>
              <p className="text-gray-900">3-4 St Jude's, Englefield Green, Egham, TW20 0DB</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Phone</p>
              <p className="text-gray-900">01784 432 044</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Email</p>
              <p className="text-gray-900">hello@caspari-italian.net</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 