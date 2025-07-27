import Link from 'next/link'

export function MenuPreview() {
  const menuCategories = [
    {
      name: 'Starter & Salad',
      slug: 'starter-salad',
      description: 'Fresh beginnings with Italian flair',
      image: '/api/placeholder/300/200?text=Starter',
    },
    {
      name: 'Pizza & Pasta',
      slug: 'pizza-pasta',
      description: 'Our signature dishes made with traditional recipes',
      image: '/api/placeholder/300/200?text=Pizza',
    },
    {
      name: 'Al Forno',
      slug: 'al-forno',
      description: 'Oven-baked specialties bursting with flavor',
      image: '/api/placeholder/300/200?text=AlForno',
    },
    {
      name: 'Wine & Champagne',
      slug: 'wine-champagne',
      description: 'Carefully selected wines to complement your meal',
      image: '/api/placeholder/300/200?text=Wine',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Great food comes from great technique. Discover our carefully crafted dishes 
            made with fresh ingredients and authentic Italian recipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/menu/${category.slug}`}
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="btn-primary text-lg"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
} 