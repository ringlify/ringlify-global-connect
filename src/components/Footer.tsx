
import { MapPin, Mail, MessageSquare, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ringlify-dark-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-ringlify-light-blue to-ringlify-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold">Ringlify</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted global partner for customer support, web development, digital marketing, 
              and revenue cycle management solutions. We help businesses scale efficiently and cost-effectively.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-ringlify-accent" />
                <span className="text-gray-300">116A Ipswich Road, Colchester, United Kingdom CO40AE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-ringlify-accent" />
                <a href="mailto:services@ringlify.site" className="text-gray-300 hover:text-white transition-colors">
                  services@ringlify.site
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-ringlify-accent" />
                <a href="https://wa.me/447495917185" className="text-gray-300 hover:text-white transition-colors">
                  +44 7495 917185
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Customer Support</li>
              <li className="text-gray-300">Digital Marketing</li>
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">Web Management</li>
              <li className="text-gray-300">Call Services</li>
              <li className="text-gray-300">Revenue Cycle Management</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Ringlify. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
