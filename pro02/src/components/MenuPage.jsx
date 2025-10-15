import React, { useState } from 'react';
import { ShoppingCart, User, LogOut, Search, Filter, Star } from 'lucide-react';

// Sample food data
const foodItems = [
  { id: 1, name: 'Margherita Pizza', category: 'Pizza', price: 12.99, rating: 4.5, image: '🍕', description: 'Classic tomato and mozzarella' },
  { id: 2, name: 'Chicken Burger', category: 'Burgers', price: 9.99, rating: 4.7, image: '🍔', description: 'Grilled chicken with lettuce' },
  { id: 3, name: 'Caesar Salad', category: 'Salads', price: 7.99, rating: 4.3, image: '🥗', description: 'Fresh romaine with parmesan' },
  { id: 4, name: 'Pepperoni Pizza', category: 'Pizza', price: 14.99, rating: 4.8, image: '🍕', description: 'Loaded with pepperoni' },
  { id: 5, name: 'Beef Burger', category: 'Burgers', price: 11.99, rating: 4.6, image: '🍔', description: 'Juicy beef with cheese' },
  { id: 6, name: 'Sushi Roll', category: 'Sushi', price: 15.99, rating: 4.9, image: '🍱', description: 'Fresh salmon and avocado' },
  { id: 7, name: 'Pasta Carbonara', category: 'Pasta', price: 13.99, rating: 4.4, image: '🍝', description: 'Creamy bacon pasta' },
  { id: 8, name: 'Greek Salad', category: 'Salads', price: 8.99, rating: 4.2, image: '🥗', description: 'Olives and feta' },
];

const categories = ['All', 'Pizza', 'Burgers', 'Salads', 'Sushi', 'Pasta'];

const MenuPage = ({ user, cart, onAddToCart, onLogout }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter items
  const filteredItems = foodItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Search Bar */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for food..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition font-medium ${
                showFilters ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Price Filter */}
          {showFilters && (
            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-medium text-gray-700">Price Range</label>
                <span className="text-sm font-semibold text-orange-500">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Food Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedCategory === 'All' ? 'All Items' : selectedCategory}
          </h2>
          <p className="text-gray-600 mt-1">{filteredItems.length} items available</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                  <div className="flex items-center gap-1 bg-orange-100 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                    <span className="text-sm font-semibold text-orange-700">{item.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No items found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;