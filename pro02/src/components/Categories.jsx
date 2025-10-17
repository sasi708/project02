import React from 'react';

const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'salads', name: 'Salads', icon: '🥗' },
  { id: 'sushi', name: 'Sushi', icon: '🍱' },
  { id: 'pasta', name: 'Pasta', icon: '🍝' },
];

const Categories = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="bg-yellow-400 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;