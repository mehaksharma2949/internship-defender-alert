
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">InternShield</span>
          </div>
          
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Protecting students from fake internships with advanced AI technology
          </p>
          
          <div className="border-t pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 InternShield. Built to protect student futures.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
