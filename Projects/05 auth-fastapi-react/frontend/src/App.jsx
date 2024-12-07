import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import UserProfile from "./components/UserProfile.jsx";
import Home from "./components/Home.jsx";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen text-gray-800 bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
