import React from 'react';
import { Star, Plus } from 'lucide-react';

const FoodCard = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Food Image */}
      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
        <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
          {item.image}
        </div>
        
        {/* Quick Add Button (appears on hover) */}
        <button
          onClick={() => onAddToCart(item)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-500 hover:text-white"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Title and Rating */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg text-gray-900 leading-tight flex-1">
            {item.name}
          </h3>
          <div className="flex items-center gap-1 bg-orange-100 px-2 py-1 rounded-full ml-2">
            <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
            <span className="text-sm font-semibold text-orange-700">
              {item.rating}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Price and Add Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-500">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(item)}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;