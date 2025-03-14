import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import RequestForm from './pages/RequestForm';
import NotFound from './pages/NotFound';

// Components
import ChatbotButton from './components/ChatbotButton';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/request" element={<RequestForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Chatbot button is available on all pages */}
        <ChatbotButton />
      </div>
    </Router>
  );
}

export default App;
