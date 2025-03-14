import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';

// Sample product data (same as in Products.tsx)
const allProducts = [
  {
    id: 'tableau',
    name: 'Tableau',
    description: 'Create interactive, shareable dashboards with our enterprise-ready platform built for any data environment.',
    longDescription: 'Tableau is a visual analytics platform that helps people see and understand data. Our intuitive, interactive dashboards enable you to explore hidden insights in your data. Connect to virtually any database, drag and drop to create visualizations, and share with a click. From global enterprises to early-stage startups and small businesses, people everywhere use Tableau to see and understand their data.',
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
    pricing: [
      { name: 'Tableau Creator', price: '$70', period: 'per user/month', features: ['Full authoring capabilities', 'Connect to all data sources', 'Desktop and web authoring'] },
      { name: 'Tableau Explorer', price: '$42', period: 'per user/month', features: ['Web authoring capabilities', 'Self-service analytics', 'Governed data access'] },
      { name: 'Tableau Viewer', price: '$15', period: 'per user/month', features: ['View and interact with dashboards', 'Receive alerts', 'Mobile access'] },
    ],
    screenshots: [
      'https://via.placeholder.com/800x450?text=Tableau+Dashboard+Example+1',
      'https://via.placeholder.com/800x450?text=Tableau+Dashboard+Example+2',
      'https://via.placeholder.com/800x450?text=Tableau+Dashboard+Example+3',
    ],
    requirements: 'Windows or macOS, 8GB RAM minimum (16GB recommended), 1.5GB free disk space',
    support: 'Email, phone, and live chat support available. Training and certification programs offered.',
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    description: 'Connect to hundreds of data sources, simplify data prep, and drive ad hoc analysis with Microsoft\'s business analytics solution.',
    longDescription: 'Microsoft Power BI is a business analytics service that delivers insights to enable fast, informed decisions. Transform data into stunning visuals and share them with colleagues on any device. Create personalized dashboards with a unique, 360-degree view of your business. Scale across your organization with built-in governance and security.',
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
    pricing: [
      { name: 'Power BI Pro', price: '$9.99', period: 'per user/month', features: ['Self-service BI', 'Collaboration', 'Governance', 'Publish reports'] },
      { name: 'Power BI Premium', price: '$20', period: 'per user/month', features: ['All Pro features', 'Advanced AI', 'Larger datasets', 'Dedicated capacity'] },
      { name: 'Power BI Embedded', price: 'Custom', period: 'based on capacity', features: ['Embed in your apps', 'Pay-as-you-go', 'Scale as needed'] },
    ],
    screenshots: [
      'https://via.placeholder.com/800x450?text=Power+BI+Dashboard+Example+1',
      'https://via.placeholder.com/800x450?text=Power+BI+Dashboard+Example+2',
      'https://via.placeholder.com/800x450?text=Power+BI+Dashboard+Example+3',
    ],
    requirements: 'Windows 10 or later, 1GB RAM minimum (2GB recommended), 1GB free disk space',
    support: 'Microsoft support plans available. Community forums and extensive documentation.',
  },
  {
    id: 'sparc',
    name: 'sPARC',
    description: 'Our custom-built solution offering maximum flexibility for complex visualizations with complete control over your data.',
    longDescription: 'sPARC (Specialized Platform for Analytics, Reporting, and Collaboration) is the Department of Energy\'s custom-built data visualization solution. Designed specifically for the unique needs of DOE agencies, sPARC offers unparalleled flexibility for complex scientific and operational data visualization. With direct integration to DOE systems and databases, sPARC provides a secure, powerful platform for your most demanding visualization needs.',
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
    pricing: [
      { name: 'sPARC Basic', price: 'Free', period: 'for DOE agencies', features: ['Core visualization capabilities', 'Standard data connectors', 'Basic support'] },
      { name: 'sPARC Advanced', price: 'Internal cost allocation', period: 'annual', features: ['Advanced features', 'Custom development', 'Priority support'] },
      { name: 'sPARC Enterprise', price: 'Custom', period: 'based on requirements', features: ['Full customization', 'Dedicated resources', '24/7 support'] },
    ],
    screenshots: [
      'https://via.placeholder.com/800x450?text=sPARC+Dashboard+Example+1',
      'https://via.placeholder.com/800x450?text=sPARC+Dashboard+Example+2',
      'https://via.placeholder.com/800x450?text=sPARC+Dashboard+Example+3',
    ],
    requirements: 'Modern web browser, compatible with all major operating systems',
    support: 'Direct support from DOE OCIO team. Training and documentation available.',
  },
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Find the product with the matching ID
    const foundProduct = allProducts.find((p) => p.id === id);
    setProduct(foundProduct || null);
  }, [id]);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex mb-6 text-sm">
            <Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/products" className="text-gray-500 hover:text-blue-600">Products</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-blue-600">{product.name}</span>
          </nav>
          
          {/* Product Header */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-6 md:mb-0 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-w-full max-h-64 object-contain"
                />
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600">({product.reviewCount} reviews)</span>
                    </div>
                  </div>
                  
                  <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6">{product.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/request" 
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition duration-300 text-center"
                  >
                    Request This Product
                  </Link>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                    Compare Options
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs Navigation */}
          <div className="bg-white rounded-lg shadow-md mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex overflow-x-auto">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                    activeTab === 'overview'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                    activeTab === 'features'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setActiveTab('pricing')}
                  className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                    activeTab === 'pricing'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Pricing
                </button>
                <button
                  onClick={() => setActiveTab('screenshots')}
                  className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                    activeTab === 'screenshots'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Screenshots
                </button>
                <button
                  onClick={() => setActiveTab('requirements')}
                  className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                    activeTab === 'requirements'
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Requirements
                </button>
              </nav>
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">About {product.name}</h2>
                  <p className="text-gray-700 mb-6">{product.longDescription}</p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Why Choose {product.name}?</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {product.features.map((feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.features.map((feature: string, index: number) => (
                      <div key={index} className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-800 mb-1">Feature {index + 1}</h3>
                          <p className="text-gray-600">{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'pricing' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Pricing Options</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {product.pricing.map((plan: any, index: number) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-gray-50 p-4 border-b border-gray-200">
                          <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                        </div>
                        <div className="p-6">
                          <div className="flex items-baseline mb-6">
                            <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                            <span className="text-gray-500 ml-2">{plan.period}</span>
                          </div>
                          
                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                            Request Quote
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'screenshots' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">{product.name} Screenshots</h2>
                  
                  <div className="mb-6">
                    <img 
                      src={product.screenshots[activeImageIndex]} 
                      alt={`${product.name} Screenshot ${activeImageIndex + 1}`} 
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {product.screenshots.map((screenshot: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`rounded-lg overflow-hidden border-2 ${
                          index === activeImageIndex ? 'border-blue-600' : 'border-transparent'
                        }`}
                      >
                        <img 
                          src={screenshot} 
                          alt={`${product.name} Thumbnail ${index + 1}`} 
                          className="w-full h-auto"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'requirements' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">System Requirements</h2>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Requirements</h3>
                    <p className="text-gray-700 mb-4">{product.requirements}</p>
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">Support</h3>
                    <p className="text-gray-700">{product.support}</p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-4">Need Help?</h3>
                    <p className="text-gray-700 mb-4">
                      Our technical team is available to help you determine if {product.name} is right for your needs
                      and assist with deployment and configuration.
                    </p>
                    <Link 
                      to="/contact" 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                    >
                      Contact Support
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Related Products */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">You Might Also Like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {allProducts
                .filter((p) => p.id !== product.id)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link key={relatedProduct.id} to={`/products/${relatedProduct.id}`} className="group">
                    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                      <div className="p-4 flex items-center justify-center h-40">
                        <img 
                          src={relatedProduct.image} 
                          alt={relatedProduct.name} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <div className="p-4 border-t border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{relatedProduct.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
