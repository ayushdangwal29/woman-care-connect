
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle, Menu, X, User, Calendar, Home } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 h-20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-womancare-pink rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="text-2xl font-bold text-womancare-dark">WomanCare</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-600 hover:text-womancare-pink transition-colors ${isActive('/') ? 'text-womancare-pink' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/chat" 
              className={`flex items-center space-x-2 text-gray-600 hover:text-womancare-pink transition-colors ${isActive('/chat') ? 'text-womancare-pink' : ''}`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>AI Assistant</span>
            </Link>
            <Link 
              to="/doctors" 
              className={`text-gray-600 hover:text-womancare-pink transition-colors ${isActive('/doctors') ? 'text-womancare-pink' : ''}`}
            >
              Find Doctors
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-womancare-pink text-womancare-pink hover:bg-womancare-pink hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-womancare-pink hover:bg-pink-600 text-white">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="flex items-center space-x-3 text-gray-600 hover:text-womancare-pink py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link 
                to="/chat" 
                className="flex items-center space-x-3 text-gray-600 hover:text-womancare-pink py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle className="w-5 h-5" />
                <span>AI Assistant</span>
              </Link>
              <Link 
                to="/doctors" 
                className="flex items-center space-x-3 text-gray-600 hover:text-womancare-pink py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="w-5 h-5" />
                <span>Find Doctors</span>
              </Link>
              <Link 
                to="/profile" 
                className="flex items-center space-x-3 text-gray-600 hover:text-womancare-pink py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Calendar className="w-5 h-5" />
                <span>Profile</span>
              </Link>
              <div className="pt-4 space-y-2">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-womancare-pink text-womancare-pink hover:bg-womancare-pink hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-womancare-pink hover:bg-pink-600 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
