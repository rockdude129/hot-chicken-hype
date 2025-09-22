import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import Cart from '../Cart';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-smooth hover:scale-105">
            <img 
              src={logo} 
              alt="Dave's Hot Chicken Logo" 
              className="h-12 w-12 rounded-full shadow-warm"
            />
            <span className="font-brand text-xl text-primary">
              Dave's Hot Chicken
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-smooth hover:text-primary ${
                  isActive(item.path) 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {user ? (
              <div className="flex items-center space-x-3">
                <Cart />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={signOut}
                  className="flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button 
                  asChild
                  variant="outline"
                  size="sm"
                >
                  <Link to="/auth">
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="default"
                  className="bg-gradient-hero hover:shadow-brand transition-smooth"
                >
                  <Link to="/coming-soon">Order Now</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md font-medium transition-smooth ${
                    isActive(item.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-neutral-warm hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 space-y-2">
                {user ? (
                  <div className="space-y-2">
                    <div className="px-3">
                      <Cart />
                    </div>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        signOut();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-center space-x-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button 
                      asChild 
                      variant="outline"
                      className="w-full"
                    >
                      <Link to="/auth" onClick={() => setIsOpen(false)}>
                        <User className="h-4 w-4 mr-2" />
                        Sign In
                      </Link>
                    </Button>
                    <Button 
                      asChild 
                      className="w-full bg-gradient-hero hover:shadow-brand transition-smooth"
                    >
                      <Link to="/coming-soon" onClick={() => setIsOpen(false)}>
                        Order Now
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;