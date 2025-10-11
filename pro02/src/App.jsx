import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🍽️ FoodHub
        </h1>
        <p className="text-gray-600 mb-6">
          Your app is working! Count: {count}
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
        >
          Click Me!
        </button>
      </div>
    </div>
  );
}

export default App;