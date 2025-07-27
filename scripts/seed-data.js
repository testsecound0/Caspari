const mongoose = require('mongoose')
require('dotenv').config({ path: '.env.local' })

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/caspari-restaurant'

// Define schemas directly in the seed script
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
  },
  order: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
})

const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: String,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  allergens: [{
    type: String,
    trim: true,
  }],
  isVegetarian: {
    type: Boolean,
    default: false,
  },
  isVegan: {
    type: Boolean,
    default: false,
  },
  isGlutenFree: {
    type: Boolean,
    default: false,
  },
  isSpicy: {
    type: Boolean,
    default: false,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
})

const Category = mongoose.model('Category', CategorySchema)
const MenuItem = mongoose.model('MenuItem', MenuItemSchema)

async function seedData() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB')

    // Clear existing data
    await Category.deleteMany({})
    await MenuItem.deleteMany({})
    console.log('Cleared existing data')

    // Create categories with images
    const categories = [
      {
        name: 'Starter & Salad',
        slug: 'starter-salad',
        description: 'Fresh beginnings with Italian flair - antipasti, bruschetta, and crisp salads',
        image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=400',
        order: 1,
        isActive: true
      },
      {
        name: 'Pizza & Pasta',
        slug: 'pizza-pasta',
        description: 'Our signature dishes made with traditional recipes and the finest Italian ingredients',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
        order: 2,
        isActive: true
      },
      {
        name: 'Al Forno',
        slug: 'al-forno',
        description: 'Oven-baked specialties bursting with flavor - lasagna, risotto, and slow-cooked meats',
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400',
        order: 3,
        isActive: true
      },
      {
        name: 'Desert',
        slug: 'desert',
        description: 'Sweet endings to perfect your meal - authentic Italian dolci and gelato',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400',
        order: 4,
        isActive: true
      },
      {
        name: 'Drink',
        slug: 'drink',
        description: 'Refreshing beverages to complement your meal - coffee, soft drinks, and fresh juices',
        image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400',
        order: 5,
        isActive: true
      },
      {
        name: 'Wine & Champagne',
        slug: 'wine-champagne',
        description: 'Carefully selected wines to enhance your dining experience - from Tuscany to Piedmont',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400',
        order: 6,
        isActive: true
      },
      {
        name: 'Kids',
        slug: 'kids',
        description: 'Delicious options specially crafted for our younger guests with smaller portions',
        image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400',
        order: 7,
        isActive: true
      }
    ]

    const createdCategories = await Category.insertMany(categories)
    console.log('Created categories:', createdCategories.length)

    // Create menu items with images
    const menuItems = [
      // Starter & Salad
      {
        name: 'Bruschetta Classica',
        description: 'Toasted artisan bread topped with fresh Roma tomatoes, basil, garlic, and extra virgin olive oil',
        price: 8.95,
        image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?w=500',
        category: createdCategories.find(c => c.slug === 'starter-salad')._id,
        allergens: ['Gluten'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 1
      },
      {
        name: 'Antipasto Italiano',
        description: 'Selection of Italian cured meats, aged cheeses, marinated olives, and roasted vegetables',
        price: 14.95,
        image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?w=500',
        category: createdCategories.find(c => c.slug === 'starter-salad')._id,
        allergens: ['Dairy', 'Sulphites'],
        isVegetarian: false,
        isVegan: false,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 2
      },
      {
        name: 'Caprese Salad',
        description: 'Fresh buffalo mozzarella, vine tomatoes, and basil drizzled with aged balsamic glaze',
        price: 10.95,
        image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500',
        category: createdCategories.find(c => c.slug === 'starter-salad')._id,
        allergens: ['Dairy'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 3
      },
      {
        name: 'Arancini Siciliani',
        description: 'Golden fried risotto balls stuffed with mozzarella and served with marinara sauce',
        price: 9.95,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500',
        category: createdCategories.find(c => c.slug === 'starter-salad')._id,
        allergens: ['Dairy', 'Gluten', 'Eggs'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 4
      },
      {
        name: 'Insalata Rucola',
        description: 'Wild rocket salad with cherry tomatoes, parmesan shavings, and lemon vinaigrette',
        price: 8.50,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
        category: createdCategories.find(c => c.slug === 'starter-salad')._id,
        allergens: ['Dairy'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 5
      },

      // Pizza & Pasta
      {
        name: 'Pizza Margherita',
        description: 'Classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella di bufala, and basil',
        price: 16.95,
        image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500',
        category: createdCategories.find(c => c.slug === 'pizza-pasta')._id,
        allergens: ['Gluten', 'Dairy'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 1
      },
      {
        name: 'Pizza Diavola',
        description: 'Spicy pizza with pepperoni, Calabrian chili flakes, mozzarella, and fire-roasted tomatoes',
        price: 19.95,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500',
        category: createdCategories.find(c => c.slug === 'pizza-pasta')._id,
        allergens: ['Gluten', 'Dairy'],
        isVegetarian: false,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: true,
        isAvailable: true,
        order: 2
      },
      {
        name: 'Pizza Quattro Stagioni',
        description: 'Four seasons pizza with mushrooms, artichokes, ham, and olives',
        price: 18.95,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
        category: createdCategories.find(c => c.slug === 'pizza-pasta')._id,
        allergens: ['Gluten', 'Dairy'],
        isVegetarian: false,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 3
      },
      {
        name: 'Spaghetti Carbonara',
        description: 'Traditional Roman pasta with farm eggs, pecorino Romano, guanciale, and cracked black pepper',
        price: 17.95,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500',
        category: createdCategories.find(c => c.slug === 'pizza-pasta')._id,
        allergens: ['Gluten', 'Dairy', 'Eggs'],
        isVegetarian: false,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 4
      },
      {
        name: 'Penne Arrabbiata',
        description: 'Spicy penne pasta in rich tomato sauce with garlic, fresh chili, and Italian parsley',
        price: 15.95,
        image: 'https://images.unsplash.com/photo-1551892373-9bba3f9e3a3a?w=500',
        category: createdCategories.find(c => c.slug === 'pizza-pasta')._id,
        allergens: ['Gluten'],
        isVegetarian: true,
        isVegan: true,
        isGlutenFree: false,
        isSpicy: true,
        isAvailable: true,
        order: 5
      },
      {
        name: 'Linguine alle Vongole',
        description: 'Fresh linguine with baby clams, white wine, garlic, and Italian parsley',
        price: 22.95,
        image: 'https://images.unsplash.com/photo-1563379091339-03246963d945?w=500',
        category: createdCategories.find(c => c.slug === 'pizza-pasta')._id,
        allergens: ['Gluten', 'Molluscs', 'Sulphites'],
        isVegetarian: false,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 6
      },
      {
        name: 'Gnocchi Gorgonzola',
        description: 'Handmade potato gnocchi in creamy gorgonzola sauce with toasted walnuts',
        price: 16.95,
        image: 'https://images.unsplash.com/photo-1549592706-849888fd2e36?w=500',
        category: createdCategories.find(c => c.slug === 'pizza-pasta')._id,
        allergens: ['Gluten', 'Dairy', 'Nuts'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 7
      },

      // Al Forno
      {
        name: 'Lasagna della Casa',
        description: 'Traditional homemade lasagna with slow-cooked beef ragu, béchamel, and aged mozzarella',
        price: 18.95,
        image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500',
        category: createdCategories.find(c => c.slug === 'al-forno')._id,
        allergens: ['Gluten', 'Dairy', 'Eggs'],
        isVegetarian: false,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 1
      },
      {
        name: 'Melanzane Parmigiana',
        description: 'Layers of grilled aubergine, rich tomato sauce, mozzarella, and parmesan cheese',
        price: 16.95,
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500',
        category: createdCategories.find(c => c.slug === 'al-forno')._id,
        allergens: ['Dairy'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 2
      },
      {
        name: 'Osso Buco alla Milanese',
        description: 'Slow-braised veal shanks with saffron risotto and gremolata',
        price: 26.95,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500',
        category: createdCategories.find(c => c.slug === 'al-forno')._id,
        allergens: ['Dairy'],
        isVegetarian: false,
        isVegan: false,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 3
      },
      {
        name: 'Pollo Parmigiana',
        description: 'Breaded chicken breast topped with marinara sauce and melted mozzarella',
        price: 19.95,
        image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=500',
        category: createdCategories.find(c => c.slug === 'al-forno')._id,
        allergens: ['Gluten', 'Dairy', 'Eggs'],
        isVegetarian: false,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 4
      },

      // Desserts
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with espresso-soaked ladyfingers, mascarpone, and cocoa powder',
        price: 7.95,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500',
        category: createdCategories.find(c => c.slug === 'desert')._id,
        allergens: ['Gluten', 'Dairy', 'Eggs'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 1
      },
      {
        name: 'Panna Cotta',
        description: 'Silky vanilla panna cotta with seasonal berry compote and mint',
        price: 6.95,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500',
        category: createdCategories.find(c => c.slug === 'desert')._id,
        allergens: ['Dairy'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 2
      },
      {
        name: 'Cannoli Siciliani',
        description: 'Crispy pastry shells filled with sweet ricotta and chocolate chips',
        price: 8.50,
        image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500',
        category: createdCategories.find(c => c.slug === 'desert')._id,
        allergens: ['Gluten', 'Dairy', 'Eggs'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 3
      },
      {
        name: 'Gelato Misto',
        description: 'Three scoops of artisan gelato: vanilla, chocolate, and pistachio',
        price: 6.50,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500',
        category: createdCategories.find(c => c.slug === 'desert')._id,
        allergens: ['Dairy', 'Nuts'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 4
      },

      // Drinks
      {
        name: 'San Pellegrino Sparkling',
        description: 'Premium Italian sparkling mineral water (500ml)',
        price: 3.50,
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500',
        category: createdCategories.find(c => c.slug === 'drink')._id,
        allergens: [],
        isVegetarian: true,
        isVegan: true,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 1
      },
      {
        name: 'Espresso Romano',
        description: 'Traditional Italian espresso served with a twist of lemon',
        price: 2.95,
        image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=500',
        category: createdCategories.find(c => c.slug === 'drink')._id,
        allergens: [],
        isVegetarian: true,
        isVegan: true,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 2
      },
      {
        name: 'Cappuccino',
        description: 'Rich espresso topped with steamed milk foam and cocoa powder',
        price: 3.95,
        image: 'https://images.unsplash.com/photo-1572286258217-aac5123902df?w=500',
        category: createdCategories.find(c => c.slug === 'drink')._id,
        allergens: ['Dairy'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 3
      },
      {
        name: 'Limonata Fresca',
        description: 'Freshly squeezed lemon juice with sparkling water and mint',
        price: 4.50,
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500',
        category: createdCategories.find(c => c.slug === 'drink')._id,
        allergens: [],
        isVegetarian: true,
        isVegan: true,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 4
      },

      // Wine & Champagne
      {
        name: 'Chianti Classico DOCG',
        description: 'Traditional Tuscan red wine with rich, fruity flavors and hints of cherry (750ml)',
        price: 28.00,
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500',
        category: createdCategories.find(c => c.slug === 'wine-champagne')._id,
        allergens: ['Sulphites'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 1
      },
      {
        name: 'Prosecco di Valdobbiadene DOCG',
        description: 'Light and refreshing Italian sparkling wine with delicate bubbles (750ml)',
        price: 24.00,
        image: 'https://images.unsplash.com/photo-1560148883-0e06c17ee8b0?w=500',
        category: createdCategories.find(c => c.slug === 'wine-champagne')._id,
        allergens: ['Sulphites'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 2
      },
      {
        name: 'Pinot Grigio delle Venezie',
        description: 'Crisp white wine with notes of green apple and citrus (750ml)',
        price: 22.00,
        image: 'https://images.unsplash.com/photo-1569992530939-0aa03eea9b5a?w=500',
        category: createdCategories.find(c => c.slug === 'wine-champagne')._id,
        allergens: ['Sulphites'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 3
      },
      {
        name: 'Barolo DOCG',
        description: 'Full-bodied Piedmont red wine with complex tannins and aging potential (750ml)',
        price: 65.00,
        image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500',
        category: createdCategories.find(c => c.slug === 'wine-champagne')._id,
        allergens: ['Sulphites'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 4
      },

      // Kids
      {
        name: 'Bambini Pizza Margherita',
        description: 'Small 8-inch margherita pizza perfect for children with mild cheese',
        price: 8.95,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500',
        category: createdCategories.find(c => c.slug === 'kids')._id,
        allergens: ['Gluten', 'Dairy'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 1
      },
      {
        name: 'Pasta Pomodoro',
        description: 'Simple penne pasta with mild tomato sauce and a sprinkle of parmesan - a kids favorite',
        price: 7.95,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500',
        category: createdCategories.find(c => c.slug === 'kids')._id,
        allergens: ['Gluten', 'Dairy'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 2
      },
      {
        name: 'Chicken Strips & Chips',
        description: 'Tender breaded chicken strips served with golden fries and ketchup',
        price: 9.95,
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500',
        category: createdCategories.find(c => c.slug === 'kids')._id,
        allergens: ['Gluten', 'Eggs'],
        isVegetarian: false,
        isVegan: false,
        isGlutenFree: false,
        isSpicy: false,
        isAvailable: true,
        order: 3
      },
      {
        name: 'Mini Gelato Sundae',
        description: 'Two scoops of vanilla gelato with chocolate sauce and rainbow sprinkles',
        price: 4.95,
        image: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=500',
        category: createdCategories.find(c => c.slug === 'kids')._id,
        allergens: ['Dairy'],
        isVegetarian: true,
        isVegan: false,
        isGlutenFree: true,
        isSpicy: false,
        isAvailable: true,
        order: 4
      }
    ]

    const createdMenuItems = await MenuItem.insertMany(menuItems)
    console.log('Created menu items:', createdMenuItems.length)

    console.log('Seed data created successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error seeding data:', error)
    process.exit(1)
  }
}

seedData() 