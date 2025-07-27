import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Contact() {
  const openingHours = [
    { day: 'Monday', hours: '11.30-15.00 | 17.00-23.00' },
    { day: 'Tuesday', hours: '11.30-15.00 | 17.00-23.00' },
    { day: 'Wednesday', hours: '11.30-15.00 | 17.00-23.00' },
    { day: 'Thursday', hours: '11.30-15.00 | 17.00-23.00' },
    { day: 'Friday', hours: 'Open all day 23.00' },
    { day: 'Saturday', hours: 'Open all day 23.00' },
    { day: 'Sunday', hours: 'Open all day 22.30' },
  ]

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600">
            Visit us or get in touch - we'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="text-primary-600 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">
                  3-4 St Jude's, Englefield Green<br />
                  Egham, TW20 0DB
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-primary-600 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600 text-lg font-medium">01784 432 044</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-primary-600 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">hello@caspari-italian.net</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="text-primary-600" size={24} />
              <h3 className="text-xl font-semibold text-gray-900">Opening Hours</h3>
            </div>
            <div className="space-y-3">
              {openingHours.map((item) => (
                <div key={item.day} className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-900">{item.day}</span>
                  <span className="text-gray-600">{item.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary-600 text-white rounded-lg">
              <h4 className="font-semibold mb-2">❤ Caspari Event ❤</h4>
              <h5 className="font-medium mb-2">Caspari Christmas</h5>
              <p className="text-sm">
                Let's welcome the year which is fresh and new,<br />
                Let's cherish each moment it beholds,<br />
                Let's celebrate this blissful New year
              </p>
              <p className="text-gold-400 font-medium mt-2">Christmas 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 