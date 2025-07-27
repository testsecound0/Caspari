import { NextResponse } from 'next/server'

// Static dummy data for categories
const DUMMY_CATEGORIES = [
  {
    _id: '1',
    name: 'Starter & Salad',
    slug: 'starter-salad',
    description: 'Fresh beginnings with Italian flair - antipasti, bruschetta, and crisp salads',
    image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=400',
    order: 1,
    isActive: true
  },
  {
    _id: '2',
    name: 'Pasta',
    slug: 'pasta',
    description: 'Handcrafted pasta dishes with authentic Italian sauces and fresh ingredients',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400',
    order: 2,
    isActive: true
  },
  {
    _id: '3',
    name: 'Pizza',
    slug: 'pizza',
    description: 'Wood-fired pizzas with traditional Italian toppings and artisanal dough',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
    order: 3,
    isActive: true
  },
  {
    _id: '4',
    name: 'Main Courses',
    slug: 'main-courses',
    description: 'Hearty Italian mains featuring fresh seafood, tender meats, and seasonal vegetables',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400',
    order: 4,
    isActive: true
  },
  {
    _id: '5',
    name: 'Desserts',
    slug: 'desserts',
    description: 'Traditional Italian sweets including tiramisu, gelato, and homemade pastries',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
    order: 5,
    isActive: true
  },
  {
    _id: '6',
    name: 'Beverages',
    slug: 'beverages',
    description: 'Italian wines, coffee, cocktails, and refreshing drinks',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400',
    order: 6,
    isActive: true
  }
]

export async function GET() {
  try {
    return NextResponse.json(DUMMY_CATEGORIES)
  } catch (error) {
    console.error('Error fetching categories:', error)
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Simulate creating a new category
    const newCategory = {
      _id: (DUMMY_CATEGORIES.length + 1).toString(),
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    return NextResponse.json(newCategory, { status: 201 })
  } catch (error) {
    console.error('Error creating category:', error)
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 })
  }
} 