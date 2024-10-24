import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Product Store</h1>
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;