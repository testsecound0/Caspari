import { NextResponse } from 'next/server'

// Static dummy data for menu items
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
  {
    _id: '3',
    name: 'Insalata Caprese',
    description: 'Fresh mozzarella di bufala, vine-ripened tomatoes, and basil with aged balsamic reduction',
    price: 12.95,
    image: 'https://images.unsplash.com/photo-1608897013039-8f74c62310ba?w=500',
    category: '1',
    allergens: ['Dairy'],
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    isAvailable: true,
    order: 3
  },
  
  // Pasta
  {
    _id: '4',
    name: 'Spaghetti Carbonara',
    description: 'Classic Roman pasta with pancetta, eggs, Pecorino Romano, and fresh black pepper',
    price: 18.95,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500',
    category: '2',
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    isAvailable: true,
    order: 1
  },
  {
    _id: '5',
    name: 'Fettuccine Alfredo',
    description: 'Fresh fettuccine in a rich and creamy Parmigiano-Reggiano sauce with black pepper',
    price: 16.95,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500',
    category: '2',
    allergens: ['Gluten', 'Dairy'],
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    isAvailable: true,
    order: 2
  },
  {
    _id: '6',
    name: 'Penne Arrabbiata',
    description: 'Penne pasta in a spicy tomato sauce with garlic, red chili peppers, and fresh parsley',
    price: 14.95,
    image: 'https://images.unsplash.com/photo-1599667560877-fb71501b5b3b?w=500',
    category: '2',
    allergens: ['Gluten'],
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: false,
    isSpicy: true,
    isAvailable: true,
    order: 3
  },
  {
    _id: '7',
    name: 'Linguine alle Vongole',
    description: 'Linguine with fresh clams, white wine, garlic, parsley, and a touch of chili',
    price: 22.95,
    image: 'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?w=500',
    category: '2',
    allergens: ['Gluten', 'Shellfish'],
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    isAvailable: true,
    order: 4
  },

  // Pizza
  {
    _id: '8',
    name: 'Pizza Margherita',
    description: 'Traditional Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, and basil',
    price: 16.95,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500',
    category: '3',
    allergens: ['Gluten', 'Dairy'],
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    isAvailable: true,
    order: 1
  },
  {
    _id: '9',
    name: 'Pizza Diavola',
    description: 'Spicy pizza with tomato sauce, mozzarella, spicy salami, and red chili peppers',
    price: 19.95,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500',
    category: '3',
    allergens: ['Gluten', 'Dairy'],
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: true,
    isAvailable: true,
    order: 2
  },
  {
    _id: '10',
    name: 'Pizza Quattro Stagioni',
    description: 'Four seasons pizza with artichokes, mushrooms, ham, and olives in four quarters',
    price: 21.95,
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500',
    category: '3',
    allergens: ['Gluten', 'Dairy'],
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    isAvailable: true,
    order: 3
  },

  // Main Courses
  {
    _id: '11',
    name: 'Osso Buco alla Milanese',
    description: 'Braised veal shanks with vegetables, white wine, and saffron risotto',
    price: 32.95,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500',
    category: '4',
    allergens: ['Dairy'],
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    isAvailable: true,
    order: 1
  },
  {
    _id: '12',
    name: 'Branzino al Sale',
    description: 'Mediterranean sea bass baked in sea salt crust with herbs and lemon',
    price: 28.95,
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500',
    category: '4',
    allergens: ['Fish'],
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    isAvailable: true,
    order: 2
  },
  {
    _id: '13',
    name: 'Pollo alla Parmigiana',
    description: 'Breaded chicken breast with tomato sauce, mozzarella, and Parmigiano-Reggiano',
    price: 24.95,
    image: 'https://images.unsplash.com/photo-1598511757337-fe2cafc31ba1?w=500',
    category: '4',
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    isAvailable: true,
    order: 3
  },

  // Desserts
  {
    _id: '14',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with mascarpone, ladyfingers, espresso, and cocoa',
    price: 8.95,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500',
    category: '5',
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    isAvailable: true,
    order: 1
  },
  {
    _id: '15',
    name: 'Panna Cotta',
    description: 'Silky vanilla panna cotta with mixed berry compote and fresh mint',
    price: 7.95,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500',
    category: '5',
    allergens: ['Dairy'],
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    isAvailable: true,
    order: 2
  },
  {
    _id: '16',
    name: 'Gelato Trio',
    description: 'Three scoops of artisanal gelato: pistachio, stracciatella, and amaretto',
    price: 9.95,
    image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=500',
    category: '5',
    allergens: ['Dairy', 'Nuts'],
    isVegetarian: true,
    isVegan: false,
    isGlutenFree: true,
    isSpicy: false,
    isAvailable: true,
    order: 3
  },

  // Beverages
  {
    _id: '17',
    name: 'Chianti Classico DOCG',
    description: 'Full-bodied Tuscan red wine with notes of cherry and spice',
    price: 12.95,
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500',
    category: '6',
    allergens: ['Sulfites'],
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isSpicy: false,
    isAvailable: true,
    order: 1
  },
  {
    _id: '18',
    name: 'Aperol Spritz',
    description: 'Classic Italian aperitif with Aperol, Prosecco, and soda water',
    price: 8.95,
    image: 'https://images.unsplash.com/photo-1544824924-594073461666?w=500',
    category: '6',
    allergens: ['Sulfites'],
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isSpicy: false,
    isAvailable: true,
    order: 2
  },
  {
    _id: '19',
    name: 'Espresso Romano',
    description: 'Traditional Italian espresso served with a twist of lemon',
    price: 3.95,
    image: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=500',
    category: '6',
    allergens: [],
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isSpicy: false,
    isAvailable: true,
    order: 3
  },
  {
    _id: '20',
    name: 'Limoncello',
    description: 'Traditional Italian lemon liqueur served chilled',
    price: 6.95,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500',
    category: '6',
    allergens: [],
    isVegetarian: true,
    isVegan: true,
    isGlutenFree: true,
    isSpicy: false,
    isAvailable: true,
    order: 4
  }
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const categoryId = searchParams.get('category')
    
    let filteredItems = DUMMY_MENU_ITEMS
    
    if (categoryId) {
      filteredItems = DUMMY_MENU_ITEMS.filter(item => item.category === categoryId)
    }
    
    // Sort by order and then by name
    filteredItems.sort((a, b) => {
      if (a.order !== b.order) {
        return a.order - b.order
      }
      return a.name.localeCompare(b.name)
    })
    
    return NextResponse.json(filteredItems)
  } catch (error) {
    console.error('Error fetching menu items:', error)
    return NextResponse.json({ error: 'Failed to fetch menu items' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Simulate creating a new menu item
    const newMenuItem = {
      _id: (DUMMY_MENU_ITEMS.length + 1).toString(),
      ...body,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    return NextResponse.json(newMenuItem, { status: 201 })
  } catch (error) {
    console.error('Error creating menu item:', error)
    return NextResponse.json({ error: 'Failed to create menu item' }, { status: 500 })
  }
} 