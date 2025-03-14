import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';

// Sample product data
const allProducts = [
  {
    id: 'tableau',
    name: 'Tableau',
    description: 'Create interactive, shareable dashboards with our enterprise-ready platform built for any data environment.',
    image: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
    category: 'Visualization',
    rating: 4.7,
    reviewCount: 1243,
    features: [
      'Drag-and-drop interface for easy visualization creation',
      'Connect to virtually any database or data source',
      'Real-time data analysis and visualization',
      'Powerful dashboard sharing and collaboration tools',
      'Mobile-friendly dashboards',
    ],
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    description: 'Connect to hundreds of data sources, simplify data prep, and drive ad hoc analysis with Microsoft\'s business analytics solution.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/630px-New_Power_BI_Logo.svg.png',
    category: 'Visualization',
    rating: 4.5,
    reviewCount: 987,
    features: [
      'Seamless integration with Microsoft products',
      'AI-powered data insights',
      'Custom visualization creation',
      'Enterprise-grade security and governance',
      'Embedded analytics capabilities',
    ],
  },
  {
    id: 'sparc',
    name: 'sPARC',
    description: 'Our custom-built solution offering maximum flexibility for complex visualizations with complete control over your data.',
    image: 'https://via.placeholder.com/300x200?text=sPARC',
    category: 'Visualization',
    rating: 4.2,
    reviewCount: 156,
    features: [
      'Highly customizable visualization framework',
      'Advanced data transformation capabilities',
      'Integration with DOE systems and databases',
      'Support for complex scientific datasets',
      'Custom development and support from DOE OCIO team',
    ],
  },
  {
    id: 'qlik',
    name: 'Qlik Sense',
    description: 'A complete data analytics platform that lets users create, explore, and share insights with AI-powered, interactive analytics.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Qlik_Logo.svg/1200px-Qlik_Logo.svg.png',
    category: 'Visualization',
    rating: 4.3,
    reviewCount: 567,
    features: [
      'Associative engine for exploring data relationships',
      'AI-assisted analysis and insights',
      'Self-service visualization creation',
      'Enterprise-ready scalability',
      'Embedded analytics options',
    ],
  },
  {
    id: 'looker',
    name: 'Looker',
    description: 'A business intelligence and big data analytics platform that helps you explore, analyze and share real-time business analytics.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Looker_Logo.svg/1200px-Looker_Logo.svg.png',
    category: 'Visualization',
    rating: 4.4,
    reviewCount: 423,
    features: [
      'Modern, web-based architecture',
      'LookML modeling language for data definitions',
      'Real-time data exploration',
      'Embedded analytics capabilities',
      'Integration with Google Cloud Platform',
    ],
  },
  {
    id: 'domo',
    name: 'Domo',
    description: 'A cloud-based business intelligence platform that integrates multiple data sources into a single, easy-to-use dashboard.',
    image: 'https://www.vectorlogo.zone/logos/domo/domo-ar21.svg',
    category: 'Visualization',
    rating: 4.1,
    reviewCount: 289,
    features: [
      'Cloud-native platform',
      '1000+ pre-built connectors',
      'Collaborative dashboards and reporting',
      'Mobile-first design',
      'Data science and machine learning capabilities',
    ],
  },
];

const Products: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  
  // Filter products based on category and search query
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = !category || product.category.toLowerCase() === category.toLowerCase();
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'rating-desc':
        return b.rating - a.rating;
      case 'rating-asc':
        return a.rating - b.rating;
      default:
        return 0; // featured - maintain original order
    }
  });

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {category ? `${category} Products` : 'All Products'}
          </h1>
          
          {/* Search and Filter Bar */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative flex-grow max-w-md">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-3 top-2.5 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="text-gray-700 mr-2">Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="rating-desc">Highest Rated</option>
                  <option value="rating-asc">Lowest Rated</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
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
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
