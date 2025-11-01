import Link from 'next/link';
import { Phone, Mail, Instagram, ShoppingCart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 text-white" style={{ backgroundColor: 'var(--neutral)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1: Logo, Name, and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">CakeCrumbs</span>
            </Link>
            <p className="text-gray-300">
              Creating delicious memories one bite at a time. We specialize in custom cakes and pastries made with love and the finest ingredients.
            </p>
          </div>

          {/* Section 2: Page Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/cakes" className="text-gray-300 hover:text-white transition-colors">
                  Our Cakes
                </Link>
              </li>
              <li>
                <Link href="/food" className="text-gray-300 hover:text-white transition-colors">
                  Other Treats
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">info@cakecrumbs.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Instagram className="mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">@cakecrumbs</span>
              </li>
            </ul>
          </div>

          {/* Section 4: Buy Cakes Button */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ready to Order?</h3>
            <p className="text-gray-300">
              Place your order today and let us create something special for you.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center space-x-2 bg-[var(--primary)] hover:bg-[#d4453d] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              <ShoppingCart size={20} />
              <span>Buy Cakes</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;