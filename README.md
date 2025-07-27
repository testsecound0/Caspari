# Caspari Italian Restaurant Website

A modern, responsive restaurant website with admin panel for Caspari Italian Restaurant in Englefield Green. Built with Next.js, TypeScript, MongoDB, and Tailwind CSS.

## Features

### Public Website
- **Responsive Design**: Modern, mobile-first design that works on all devices
- **Homepage**: Hero section, menu preview, about section, and contact information
- **Menu Page**: Dynamic menu with category filtering and dietary information
- **Contact Information**: Opening hours, location, and contact details
- **Italian Theme**: Elegant design inspired by Italian cuisine and culture

### Admin Panel
- **Authentication**: Secure login system for restaurant management
- **Dashboard**: Overview of categories, menu items, and quick actions
- **Category Management**: Create, edit, and organize menu categories
- **Menu Item Management**: Full CRUD operations for menu items
- **Dietary Information**: Support for vegetarian, vegan, gluten-free, and spicy indicators
- **Real-time Updates**: Changes reflect immediately on the public website

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **TypeScript**: Full type safety throughout the application
- **MongoDB**: NoSQL database with Mongoose ODM
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **JWT Authentication**: Secure token-based authentication
- **API Routes**: RESTful API endpoints for data management
- **Responsive Images**: Optimized image handling

## Installation

### Prerequisites
- Node.js 18 or later
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd caspari-restaurant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/caspari-restaurant
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   JWT_SECRET=your-jwt-secret-here
   ADMIN_EMAIL=admin@caspari-italian.net
   ADMIN_PASSWORD=admin123
   ```

4. **Database Setup**
   - Ensure MongoDB is running locally or set up MongoDB Atlas
   - Run the seed script to populate initial data:
   ```bash
   node scripts/seed-data.js
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Public website: http://localhost:3000
   - Admin panel: http://localhost:3000/admin
   - Admin credentials: `admin@caspari-italian.net` / `admin123`

## Project Structure

```
caspari-restaurant/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin panel pages
│   ├── api/               # API routes
│   ├── menu/              # Public menu pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
├── lib/                   # Utility functions and configurations
├── models/                # MongoDB/Mongoose models
├── scripts/               # Database seeding and utility scripts
├── public/                # Static assets
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/verify` - Verify authentication token

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category
- `PUT /api/categories/[id]` - Update category
- `DELETE /api/categories/[id]` - Delete category

### Menu Items
- `GET /api/menu-items` - Get all menu items (with optional category filter)
- `POST /api/menu-items` - Create new menu item
- `PUT /api/menu-items/[id]` - Update menu item
- `DELETE /api/menu-items/[id]` - Delete menu item

## Database Schema

### Category Model
```javascript
{
  name: String,           // Category name
  slug: String,           // URL-friendly slug
  description: String,    // Optional description
  image: String,          // Optional image URL
  order: Number,          // Display order
  isActive: Boolean,      // Active status
  timestamps: true        // createdAt, updatedAt
}
```

### MenuItem Model
```javascript
{
  name: String,           // Item name
  description: String,    // Item description
  price: Number,          // Price in GBP
  image: String,          // Optional image URL
  category: ObjectId,     // Reference to Category
  allergens: [String],    // List of allergens
  isVegetarian: Boolean,  // Dietary indicators
  isVegan: Boolean,
  isGlutenFree: Boolean,
  isSpicy: Boolean,
  isAvailable: Boolean,   // Availability status
  order: Number,          // Display order within category
  timestamps: true        // createdAt, updatedAt
}
```

## Restaurant Information

**Caspari Italian Restaurant**
- Address: 3-4 St Jude's, Englefield Green, Egham, TW20 0DB
- Phone: 01784 432 044
- Email: hello@caspari-italian.net
- Tagline: "The Taste of Italy in Englefield Green"

### Opening Hours
- Monday - Thursday: 11:30-15:00 | 17:00-23:00
- Friday: Open all day until 23:00
- Saturday: Open all day until 23:00
- Sunday: Open all day until 22:30

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables for Production
Ensure all environment variables are properly set for production deployment:
- Use strong, unique values for `NEXTAUTH_SECRET` and `JWT_SECRET`
- Set `NEXTAUTH_URL` to your production domain
- Configure MongoDB connection string for production database

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Support

For support or questions about this project, please contact:
- Email: hello@caspari-italian.net
- Phone: 01784 432 044

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for Caspari Italian Restaurant 