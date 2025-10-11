import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🍽️</div>
              <h3 className="text-xl font-bold text-white">FoodHub</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Delicious food delivered to your doorstep. Fresh, fast, and always satisfying.
            </p>
            <div className="flex gap-3">
              <button className="p-2 bg-gray-800 hover:bg-orange-500 rounded-full transition">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-orange-500 rounded-full transition">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-800 hover:bg-orange-500 rounded-full transition">
                <Instagram className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button className="hover:text-orange-500 transition">About Us</button>
              </li>
              <li>
                <button className="hover:text-orange-500 transition">Menu</button>
              </li>
              <li>
                <button className="hover:text-orange-500 transition">Offers</button>
              </li>
              <li>
                <button className="hover:text-orange-500 transition">FAQ</button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <button className="hover:text-orange-500 transition">Help Center</button>
              </li>
              <li>
                <button className="hover:text-orange-500 transition">Privacy Policy</button>
              </li>
              <li>
                <button className="hover:text-orange-500 transition">Terms of Service</button>
              </li>
              <li>
                <button className="hover:text-orange-500 transition">Contact Us</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-orange-500" />
                <div>
                  <p className="text-sm">+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-orange-500" />
                <div>
                  <p className="text-sm">support@foodhub.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-orange-500" />
                <div>
                  <p className="text-sm">123 Food Street, Flavor City, FC 12345</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 FoodHub. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;