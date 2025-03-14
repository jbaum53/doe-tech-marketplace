import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      {/* Top banner - similar to energy.gov */}
      <div className="bg-blue-900 text-white py-1 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>An official website of the Department of Energy</div>
            <div>
              <a href="#" className="text-white hover:underline">How you know</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="bg-white border-b border-gray-200 shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs">DOE</span>
                </div>
                <div>
                  <div className="text-xs text-blue-900 font-semibold">U.S. DEPARTMENT OF</div>
                  <div className="text-xl font-bold text-blue-900">ENERGY</div>
                </div>
              </Link>
              <span className="ml-4 text-sm bg-green-600 text-white px-2 py-1 rounded">OCIO</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-blue-900 hover:text-blue-600 font-medium">Home</Link>
              <Link to="/products" className="text-blue-900 hover:text-blue-600 font-medium">Products</Link>
              <Link to="/request" className="text-blue-900 hover:text-blue-600 font-medium">Request Service</Link>
              <Link to="/help" className="text-blue-900 hover:text-blue-600 font-medium">Help</Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 w-64"
                />
                <button className="absolute right-3 top-2.5 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation bar */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <Link to="/products/visualization" className="py-3 px-2 hover:bg-blue-800">Data Visualization</Link>
            <Link to="/products/hardware" className="py-3 px-2 hover:bg-blue-800">Hardware</Link>
            <Link to="/products/software" className="py-3 px-2 hover:bg-blue-800">Software</Link>
            <Link to="/products/services" className="py-3 px-2 hover:bg-blue-800">Technical Services</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
