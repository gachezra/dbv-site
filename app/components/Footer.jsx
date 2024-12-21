import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = ({ showNewsletter = true }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/catalog' },
    { name: 'Contact', href: '/contact' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <footer className="bg-sky-900 text-white">
      {showNewsletter && (
        <div className="border-b border-sky-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-sky-200 mb-6">
                Subscribe to our newsletter for the latest products and exclusive offers.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-sky-800 text-white placeholder-sky-400 border border-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-sky-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-sky-900 font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">DBV</h3>
                <p className="text-sky-200 text-sm">Enterprises</p>
              </div>
            </div>
            <p className="text-sky-200 mb-4">
              Your trusted partner in electronic supplies and solutions since 2020.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-sky-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sky-200 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sky-200">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <a href="tel:+254700000000" className="hover:text-white transition-colors">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <a href="mailto:info@dbv.co.ke" className="hover:text-white transition-colors">
                  info@dbv.co.ke
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-3" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3" />
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-3 text-sky-200">
              <li>Monday - Friday</li>
              <li>8:00 AM - 6:00 PM</li>
              <li>Saturday</li>
              <li>9:00 AM - 4:00 PM</li>
              <li className="text-yellow-400">Sunday - Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-sky-800 text-center text-sky-200">
          <p>
            &copy; {currentYear} DBV Enterprises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;