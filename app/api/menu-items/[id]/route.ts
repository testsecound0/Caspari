import { NextResponse } from 'next/server'

// Static dummy data for menu items (same as in the main route)
const DUMMY_MENU_ITEMS = [
  // Starter & Salad
  {
    _id: '1',
    name: 'Bruschetta Classica',
    description: 'Toasted artisan bread topped with fresh Roma tomatoes, basil, garlic, and extra virgin olive oil',
    price: 8.95,
    image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=500',
    category: '1',
    allergens: ['Gluten'],
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    isAvailable: true,
    order: 1
  },
  {
    _id: '2',
    name: 'Antipasto Misto',
    description: 'Traditional Italian appetizer featuring cured meats, aged cheeses, olives, and marinated vegetables',
    price: 16.95,
    image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=500',
    category: '1',
    allergens: ['Dairy'],
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    isAvailable: true,
    order: 2
  },
  // ... (other items would be here in a real implementation, keeping short for brevity)
]

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const menuItem = DUMMY_MENU_ITEMS.find(item => item._id === params.id)
    
    if (!menuItem) {
      return NextResponse.json({ error: 'Menu item not found' }, { status: 404 })
    }
    
    return NextResponse.json(menuItem)
  } catch (error) {
    console.error('Error fetching menu item:', error)
    return NextResponse.json({ error: 'Failed to fetch menu item' }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const existingItemIndex = DUMMY_MENU_ITEMS.findIndex(item => item._id === params.id)
    
    if (existingItemIndex === -1) {
      return NextResponse.json({ error: 'Menu item not found' }, { status: 404 })
    }
    
    // Simulate updating the item (in a real app, this would update the database)
    const updatedItem = {
      ...DUMMY_MENU_ITEMS[existingItemIndex],
      ...body,
      updatedAt: new Date()
    }
    
    return NextResponse.json(updatedItem)
  } catch (error) {
    console.error('Error updating menu item:', error)
    return NextResponse.json({ error: 'Failed to update menu item' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const menuItem = DUMMY_MENU_ITEMS.find(item => item._id === params.id)
    
    if (!menuItem) {
      return NextResponse.json({ error: 'Menu item not found' }, { status: 404 })
    }
    
    // Simulate deletion (in a real app, this would delete from database)
    return NextResponse.json({ message: 'Menu item deleted successfully' })
  } catch (error) {
    console.error('Error deleting menu item:', error)
    return NextResponse.json({ error: 'Failed to delete menu item' }, { status: 500 })
  }
} 