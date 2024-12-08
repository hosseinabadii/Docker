import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="max-w-3xl mx-auto flex items-center p-4 bg-gray-900 text-white justify-between h-16">
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <ul className="flex space-x-4 items-center">
        {!user && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        <li>
          {user ? (
            <button
              onClick={logout}
              className="bg-gray-800 text-white border-0 py-2 px-4 cursor-pointer rounded-md transition duration-200 ease-in-out"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-gray-800 text-white border-0 py-2 px-4 cursor-pointer rounded-md transition duration-200 ease-in-out"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
