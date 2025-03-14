import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Layout from '../components/Layout';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  requestType: string;
  productId: string;
  description: string;
  urgency: string;
  preferredContact: string;
  agreeToTerms: boolean;
}

const RequestForm: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productIdFromQuery = queryParams.get('productId') || '';
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    requestType: 'product',
    productId: productIdFromQuery,
    description: '',
    urgency: 'normal',
    preferredContact: 'email',
    agreeToTerms: false,
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
    
    // Clear error when field is edited
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (formData.requestType === 'product' && !formData.productId.trim()) {
      newErrors.productId = 'Product is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };
  
  if (isSubmitted) {
    return (
      <Layout>
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 rounded-full p-3">
                  <svg className="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Request Submitted Successfully!</h1>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Thank you for your request. Our team will review it and get back to you shortly.
                You will receive a confirmation email with your request details.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Submit Another Request
                </button>
                <Link
                  to="/"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Request a Service</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <form onSubmit={handleSubmit}>
              {/* Contact Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Contact Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full border ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full border ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.lastName && (
                      <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Request Details */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Request Details
                </h2>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                      Description <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full border ${
                        errors.description ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Please provide details about your request..."
                    ></textarea>
                    {errors.description && (
                      <p className="text-red-600 text-sm mt-1">{errors.description}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Terms and Submit */}
              <div>
                <div className="mb-6">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleCheckboxChange}
                      className={`form-checkbox h-5 w-5 ${
                        errors.agreeToTerms ? 'text-red-500' : 'text-blue-600'
                      }`}
                    />
                    <span className="ml-2 text-gray-700">
                      I agree to the <Link to="/terms" className="text-blue-600 hover:underline">Terms and Conditions</Link>
                    </span>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="text-red-600 text-sm mt-1">{errors.agreeToTerms}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RequestForm;
