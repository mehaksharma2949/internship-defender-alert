
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">InternShield</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/detect" 
              className={`font-medium transition-colors ${
                isActive('/detect') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Detect Internship
            </Link>
            <Link 
              to="/scam-list" 
              className={`font-medium transition-colors ${
                isActive('/scam-list') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Scam List
            </Link>
            <Link 
              to="/learn" 
              className={`font-medium transition-colors ${
                isActive('/learn') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Learn
            </Link>
            <Link to="/report">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                Report Scam
              </Button>
            </Link>
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
