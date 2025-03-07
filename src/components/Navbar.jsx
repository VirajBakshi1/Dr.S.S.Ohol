import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  // Detect scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check for hash in URL after navigation and scroll to that section
  useEffect(() => {
    if (isHomePage && location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # character
      const element = document.getElementById(sectionId);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (!location.hash) {
      // No hash in URL, scroll to top when changing pages
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, you would add/remove dark class to document.documentElement
    // or use a context provider for theme management
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Improved navigation function that works across pages
  const navigateToSection = (sectionId, isExternalPage = false) => {
    setIsMenuOpen(false); // Close mobile menu
    
    if (isExternalPage) {
      // Navigate to external page directly and scroll to top
      navigate(sectionId);
      window.scrollTo(0, 0);
      return;
    }
    
    if (isHomePage) {
      // If on home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };

  // Updated navigation links
  const navLinks = [
    { name: 'Home', sectionId: 'home', isExternalPage: false },
    { name: 'Experience', sectionId: 'experience', isExternalPage: false },
    { name: 'Education', sectionId: 'education', isExternalPage: false },
    { name: 'Publication', sectionId: './PapersPublished', isExternalPage: true },
    { name: 'COEP Acivities', sectionId: './CoepActivities', isExternalPage: true },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-900 text-white' 
          : isScrolled 
            ? 'bg-white text-gray-900 shadow-md' 
            : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                window.scrollTo(0, 0);
              }}
              className={`text-2xl font-bold tracking-tight hover:text-red-500 transition-colors ${
                isDarkMode ? 'text-white' : isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Dr. S. S. Ohol
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.isExternalPage ? link.sectionId : `/#${link.sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection(link.sectionId, link.isExternalPage);
                  }}
                  className={`relative px-2 py-1 text-sm font-medium group ${
                    isDarkMode 
                      ? 'hover:text-red-400' 
                      : isScrolled 
                        ? 'hover:text-red-500' 
                        : 'hover:text-red-300'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <a
                href="/Contact"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false); // Close mobile menu when navigating to Contact
                  navigate('/Contact');
                }}
                className={`ml-4 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-lg'
                }`}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right side icons and mobile menu button */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="md:hidden ml-4">
              <button
                onClick={toggleMenu}
                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-white' 
                    : isScrolled 
                      ? 'hover:bg-gray-100 text-gray-700' 
                      : 'hover:bg-white/10 text-white'
                }`}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide down animation */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${isDarkMode ? 'bg-gray-800' : 'bg-white/95 backdrop-blur-sm'}`}
      >
        <div className="px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.isExternalPage ? link.sectionId : `/#${link.sectionId}`}
              onClick={(e) => {
                e.preventDefault();
                navigateToSection(link.sectionId, link.isExternalPage);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isDarkMode 
                  ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-800 hover:text-gray-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Contact"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false); // Close mobile menu when navigating to Contact
              navigate('/Contact');
            }}
            className={`block px-4 py-3 rounded-md text-base font-medium text-center mt-4 transition-all ${
              isDarkMode 
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-red-500 hover:bg-red-600 text-white shadow-sm'
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;