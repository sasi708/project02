import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import HomePage from "./Pages/HomePage";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => setUser(userData);
  const handleLogout = () => setUser(null);

  return (
    <div className="min-h-screen">
      {user ? (
        <HomePage user={user} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
