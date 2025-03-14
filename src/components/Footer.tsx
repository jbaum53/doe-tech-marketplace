import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Main footer content */}
      <div className="bg-blue-900 text-white pt-10 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-900 font-bold text-xs">DOE</span>
                </div>
                <div>
                  <div className="text-xs text-white font-semibold">U.S. DEPARTMENT OF</div>
                  <div className="text-lg font-bold text-white">ENERGY</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Your one-stop shop for Department of Energy technology services and solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/energy" className="text-gray-300 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="https://twitter.com/energy" className="text-gray-300 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://youtube.com/energy" className="text-gray-300 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
              <ul className="space-y-2">
                <li><Link to="/products/visualization" className="text-gray-300 hover:text-white">Data Visualization</Link></li>
                <li><Link to="/products/hardware" className="text-gray-300 hover:text-white">Hardware</Link></li>
                <li><Link to="/products/software" className="text-gray-300 hover:text-white">Software</Link></li>
                <li><Link to="/products/services" className="text-gray-300 hover:text-white">Technical Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Support</Link></li>
                <li><Link to="/documentation" className="text-gray-300 hover:text-white">Documentation</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/security" className="text-gray-300 hover:text-white">Security</Link></li>
                <li><Link to="/accessibility" className="text-gray-300 hover:text-white">Accessibility</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom footer bar */}
      <div className="bg-blue-950 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Department of Energy Office of the Chief Information Officer. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link to="/web-policy" className="text-gray-300 hover:text-white">Web Policy</Link>
              <Link to="/no-fear-act" className="text-gray-300 hover:text-white">No Fear Act</Link>
              <Link to="/foia" className="text-gray-300 hover:text-white">FOIA</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
