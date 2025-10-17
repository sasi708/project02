import React from "react";
import { ShoppingCart, User, LogOut } from "lucide-react";

const Header = ({ cartCount, user, onLogout, onHomeClick }) => {
  return (
    <header className="bg-yellow-500 shadow-md sticky top-0 z-50 border-b border-yellow-400">
      <div className="flex items-center justify-between px-6 py-4 text-black">

        {/* Clickable Brand Logo */}
        <h1
          onClick={onHomeClick}
          className="text-4xl font-extrabold tracking-wide animate-logo-glow cursor-pointer hover:scale-105 transition-transform"
        >
          <span className="font-[cursive] text-white">Cafe </span>
          <span className="font-[cursive] bg-gray-800 bg-clip-text text-transparent font-extrabold drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]">
            SaKZuu
          </span>
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-5 text-black">
          <button className="relative p-2 hover:bg-yellow-500/30 rounded-full transition duration-300">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2">
            <User className="w-6 h-6" />
            {user && <span className="text-sm font-medium">{user.email}</span>}
          </div>

          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-black text-yellow-400 hover:bg-gray-900 rounded-lg transition font-semibold shadow-md"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes logoGlow {
          0% { filter: drop-shadow(0 0 4px rgba(255, 230, 80, 0.3)); }
          50% { filter: drop-shadow(0 0 8px rgba(255, 230, 100, 0.6)); }
          100% { filter: drop-shadow(0 0 4px rgba(255, 230, 80, 0.3)); }
        }
        .animate-logo-glow { animation: logoGlow 5s ease-in-out infinite; }
      `}</style>
    </header>
  );
};

export default Header;
