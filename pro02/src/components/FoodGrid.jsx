import React from 'react';
import FoodCard from './FoodCard';

const FoodGrid = ({ items, selectedCategory, onAddToCart }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {selectedCategory === 'All' ? 'All Items' : selectedCategory}
        </h2>
        <p className="text-gray-600 mt-1">
          {items.length} {items.length === 1 ? 'item' : 'items'} available
        </p>
      </div>

      {/* Food Items Grid */}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <FoodCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No items available in this category.</p>
      )}
    </div>
  );
}