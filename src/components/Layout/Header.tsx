
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle, Menu, X, User, Calendar, Home, Bell, Settings } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100 h-20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Simple Text Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-3xl font-bold bg-gradient-to-r from-womancare-pink to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              WomanCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-pink-50 ${
                isActive('/') 
                  ? 'text-womancare-pink bg-pink-50 shadow-md' 
                  : 'text-gray-600 hover:text-womancare-pink'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link 
              to="/dashboard" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-blue-50 ${
                isActive('/dashboard') 
                  ? 'text-womancare-blue bg-blue-50 shadow-md' 
                  : 'text-gray-600 hover:text-womancare-blue'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/chat" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-blue-50 ${
                isActive('/chat') 
                  ? 'text-womancare-blue bg-blue-50 shadow-md' 
                  : 'text-gray-600 hover:text-womancare-blue'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>AI Assistant</span>
            </Link>
            <Link 
              to="/doctors" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:bg-green-50 ${
                isActive('/doctors') 
                  ? 'text-womancare-green bg-green-50 shadow-md' 
                  : 'text-gray-600 hover:text-womancare-green'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Find Doctors</span>
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative p-2 hover:bg-gray-100 rounded-xl">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-womancare-pink rounded-full"></span>
            </Button>
            
            <Link to="/login">
              <Button 
                variant="outline" 
                className="border-2 border-womancare-pink text-womancare-pink hover:bg-womancare-pink hover:text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-womancare-pink to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-2 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 hover:bg-gray-100 rounded-xl transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-2xl animate-fade-in">
            <nav className="px-6 py-8 space-y-6">
              <Link 
                to="/" 
                className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive('/') 
                    ? 'bg-pink-50 text-womancare-pink shadow-md' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-womancare-pink'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </Link>
              <Link 
                to="/dashboard" 
                className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive('/dashboard') 
                    ? 'bg-blue-50 text-womancare-blue shadow-md' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-womancare-blue'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Dashboard</span>
              </Link>
              <Link 
                to="/chat" 
                className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive('/chat') 
                    ? 'bg-blue-50 text-womancare-blue shadow-md' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-womancare-blue'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">AI Assistant</span>
              </Link>
              <Link 
                to="/doctors" 
                className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive('/doctors') 
                    ? 'bg-green-50 text-womancare-green shadow-md' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-womancare-green'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Find Doctors</span>
              </Link>
              <Link 
                to="/profile" 
                className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive('/profile') 
                    ? 'bg-purple-50 text-purple-600 shadow-md' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-purple-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Settings className="w-5 h-5" />
                <span className="font-medium">Profile</span>
              </Link>
              
              <div className="pt-6 space-y-4 border-t border-gray-200">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-womancare-pink text-womancare-pink hover:bg-womancare-pink hover:text-white font-semibold py-3 rounded-xl transition-all duration-300"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-womancare-pink to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300">
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
