import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

// Sample product data for visualization tools
const featuredProducts = [
  {
    id: 'tableau',
    name: 'Tableau',
    description: 'Create interactive, shareable dashboards with our enterprise-ready platform built for any data environment.',
    image: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
    category: 'Visualization',
    rating: 4.7,
    reviewCount: 1243,
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    description: 'Connect to hundreds of data sources, simplify data prep, and drive ad hoc analysis with Microsoft\'s business analytics solution.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/630px-New_Power_BI_Logo.svg.png',
    category: 'Visualization',
    rating: 4.5,
    reviewCount: 987,
  },
  {
    id: 'sparc',
    name: 'sPARC',
    description: 'Our custom-built solution offering maximum flexibility for complex visualizations with complete control over your data.',
    image: 'https://via.placeholder.com/300x200?text=sPARC',
    category: 'Visualization',
    rating: 4.2,
    reviewCount: 156,
  },
];

const Home: React.FC = () => {
  // const [searchQuery, setSearchQuery] = useState('');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                DOE Technology Marketplace
              </h1>
              <p className="text-xl mb-8 font-light">
                Your one-stop shop for Department of Energy technology services and solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300 text-center"
                >
                  Browse Products
                </Link>
                <Link
                  to="/request"
                  className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded transition duration-300 text-center hover:bg-white hover:text-blue-900"
                >
                  Request Service
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://via.placeholder.com/600x400?text=DOE+Tech+Marketplace"
                alt="DOE Tech Marketplace"
                className="rounded shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-blue-800 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-green-600">Featured Data Visualization Tools</h2>
            <Link to="/products/visualization" className="text-blue-600 hover:text-blue-800 hover:underline font-semibold">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                category={product.category}
                rating={product.rating}
                reviewCount={product.reviewCount}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-10 mx-auto text-center relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-green-600">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/products/visualization" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Data Visualization</h3>
                <p className="text-gray-600">Tools for creating interactive dashboards and visualizations.</p>
              </div>
            </Link>
            
            <Link to="/products/hardware" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Hardware</h3>
                <p className="text-gray-600">Computers, servers, and other physical technology.</p>
              </div>
            </Link>
            
            <Link to="/products/software" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6">
                <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Software</h3>
                <p className="text-gray-600">Applications and software solutions for various needs.</p>
              </div>
            </Link>
            
            <Link to="/products/services" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6">
                <div className="bg-green-800 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Technical Services</h3>
                <p className="text-gray-600">Configuration, support, and consulting services.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 mb-12 mx-auto text-center relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-green-600">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6">
              <div className="bg-blue-900 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Browse or Chat</h3>
              <p className="text-gray-600">Browse our catalog or chat with our AI assistant to find the right technology solution for your needs.</p>
            </div>
            
            <div className="text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6">
              <div className="bg-blue-900 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Request Service</h3>
              <p className="text-gray-600">Submit a request for the technology, software, or service you need through our simple form.</p>
            </div>
            
            <div className="text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6">
              <div className="bg-blue-900 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Support</h3>
              <p className="text-gray-600">Our team will process your request and provide ongoing support for your technology needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to find the right technology solution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-light">
            Our AI assistant can help you identify the perfect data visualization tool for your specific needs.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded transition duration-300 text-lg">
            Chat with our AI Assistant
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
