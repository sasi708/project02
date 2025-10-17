import React, { useState } from "react";
import { Star, Filter } from "lucide-react";

// ✅ Import 8 food images
import img1 from "../assets/images/food1.jpg";
import img2 from "../assets/images/food2.jpg";
import img3 from "../assets/images/food3.jpg";
import img4 from "../assets/images/food4.jpg";
import img5 from "../assets/images/food5.jpg";
import img6 from "../assets/images/food6.jpg";
import img7 from "../assets/images/food7.jpg";
import img8 from "../assets/images/food8.jpg";

const MenuPage = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState("none");

  // ✅ Food items
  const foodItems = [
    { id: 1, name: "Margherita Pizza", category: "Pizza", price: 12.99, rating: 4.5, image: img1, description: "Classic tomato and mozzarella" },
    { id: 2, name: "Chicken Burger", category: "Burgers", price: 9.99, rating: 4.7, image: img2, description: "Grilled chicken with lettuce" },
    { id: 3, name: "Caesar Salad", category: "Salads", price: 7.99, rating: 4.3, image: img3, description: "Fresh romaine with parmesan" },
    { id: 4, name: "Pepperoni Pizza", category: "Pizza", price: 14.99, rating: 4.8, image: img4, description: "Loaded with pepperoni" },
    { id: 5, name: "Beef Burger", category: "Burgers", price: 11.99, rating: 4.6, image: img5, description: "Juicy beef with cheese and onion" },
    { id: 6, name: "Sushi Roll", category: "Sushi", price: 15.99, rating: 4.9, image: img6, description: "Fresh salmon and avocado roll" },
    { id: 7, name: "Pasta Carbonara", category: "Pasta", price: 13.99, rating: 4.4, image: img7, description: "Creamy pasta with bacon" },
    { id: 8, name: "Greek Salad", category: "Salads", price: 8.99, rating: 4.2, image: img8, description: "Olives, feta, and fresh veggies" },
  ];

  const categories = ["All", "Pizza", "Burgers", "Salads", "Sushi", "Pasta"];

  // ✅ Filtering logic
  let filteredItems = foodItems.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  // ✅ Sorting logic
  if (sortOption === "lowToHigh") {
    filteredItems = filteredItems.sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    filteredItems = filteredItems.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-gradient-to-b from-black via-yellow-600 to-black min-h-screen">
      {/* ✅ Search + Filter Bar */}
      <div className="bg-#3E1F09 sticky top-[72px] z-40 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Search Bar */}
          <div className="relative w-full sm:w-[600px] group transition-all">
            <input
              type="text"
              placeholder="Search for delicious food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-yellow-400 
                 focus:ring-2 focus:ring-yellow-500 outline-none 
                 text-gray-900 text-lg shadow-md 
                 transition-all duration-300 
                 group-hover:shadow-yellow-400/50 group-hover:scale-[1.02]"
            />
            
          </div>

          {/* Filter Button */}
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-5 py-3 bg-black text-yellow-400 rounded-full 
                       font-semibold shadow-md hover:shadow-yellow-400/50 
                       hover:bg-yellow-600 hover:text-black transition-all duration-300"
            >
              <Filter className="w-5 h-5" /> Filters
            </button>

            {/* Dropdown Filter Menu */}
            {showFilters && (
              <div className="absolute right-0 mt-2 w-52 bg-yellow-100 rounded-xl shadow-lg overflow-hidden border border-yellow-300 animate-fade-in">
                <button
                  onClick={() => {
                    setSortOption("lowToHigh");
                    setShowFilters(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-white text-gray-800"
                >
                  Price: Low to High
                </button>
                <button
                  onClick={() => {
                    setSortOption("highToLow");
                    setShowFilters(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-white text-gray-800"
                >
                  Price: High to Low
                </button>
                <button
                  onClick={() => {
                    setSortOption("none");
                    setShowFilters(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-white text-gray-800"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ✅ Categories Section with Gradient */}
        <div className="bg-#824Bdv">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-3 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-semibold transition-all whitespace-nowrap shadow-md ${
                  selectedCategory === category
                    ? "bg-black text-yellow-400 shadow-yellow-400/60 scale-105"
                    : "bg-yellow-100 text-black hover:bg-yellow-500 hover:text-black hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Food Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-white mb-1">
          {selectedCategory === "All" ? "All Items" : selectedCategory}
        </h2>
        <p className="text-white mb-6">
          {filteredItems.length} items available
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 group"
            >
              {/* Food Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg text-black">{item.name}</h3>
                  <div className="flex items-center gap-1 bg-yellow-400 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-yellow-600 text-yellow-600" />
                    <span className="text-sm font-semibold text-black">
                      {item.rating}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4">{item.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-black">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="bg-black text-yellow-400 px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 hover:text-black transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ No items found message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-xl font-semibold text-black mb-2">
              No items found
            </h3>
            <p className="text-gray-700">
              Try adjusting your search or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
