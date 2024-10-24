import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <div 
        className="relative pb-[100%] mb-4 cursor-pointer"
        onClick={handleViewDetails}
      >
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
      <h3 
        className="text-lg font-semibold mb-2 flex-grow line-clamp-2 cursor-pointer hover:text-green-600"
        onClick={handleViewDetails}
      >
        {product.title}
      </h3>
      <div className="flex items-center justify-between mt-2">
        <span className="text-xl font-bold">
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={handleViewDetails}
          className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-[10px] hover:bg-green-600 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;