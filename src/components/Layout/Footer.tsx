import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-text-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="Dave's Hot Chicken Logo" 
                className="h-10 w-10 rounded-full"
              />
              <span className="font-brand text-xl text-brand-red">
                Dave's Hot Chicken
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Nashville's hottest chicken experience. Fresh, crispy, and made with love by CEO Nandan Pericherla and his team. 
              Come taste the fire that made us famous!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/GranadaHighPride/" className="text-gray-400 hover:text-brand-red transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/granadahighschool/" className="text-gray-400 hover:text-brand-red transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/granadapride" className="text-gray-400 hover:text-brand-red transition-smooth">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-brand-yellow">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-white transition-smooth">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-smooth">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 text-brand-yellow">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-brand-red mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  400 Wall St<br />
                  Livermore, CA 94550
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-brand-red" />
                <span className="text-gray-300 text-sm">(615) 555-FIRE</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-brand-red" />
                <span className="text-gray-300 text-sm">hello@daveshotchicken.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © 2024 Dave's Hot Chicken. All rights reserved. EST. 2017 Nashville, TN
          </p>
          <p className="text-gray-500 text-xs">
            I built this site in 20 minutes.<br />
            I used Lovable and Supabase Authentication to build this site.<br />
            It took me 12 prompts to make this site.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;