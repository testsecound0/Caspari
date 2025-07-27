import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Caspari Italian</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Experience the authentic taste of Italy in the heart of Englefield Green. 
              Fresh ingredients, traditional recipes, and warm hospitality await you.
            </p>
            <p className="text-gold-400 font-medium">
              The Taste of Italy in Englefield Green
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>3-4 St Jude's</p>
              <p>Englefield Green, Egham</p>
              <p>TW20 0DB</p>
              <p className="text-white font-medium mt-4">01784 432 044</p>
              <p>hello@caspari-italian.net</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Caspari Italian Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 