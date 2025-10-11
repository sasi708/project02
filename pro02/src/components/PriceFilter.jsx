import React from 'react';

const PriceFilter = ({ priceRange, onPriceChange, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-700">
              Price Range
            </label>
            <span className="text-sm font-semibold text-orange-500">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>

          {/* Price Range Slider */}
          <input
            type="range"
            min="0"
            max="20"
            step="1"
            value={priceRange[1]}
            onChange={(e) => onPriceChange([0, parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />

          {/* Price Markers */}
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>$0</span>
            <span>$5</span>
            <span>$10</span>
            <span>$15</span>
            <span>$20</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;