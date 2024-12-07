import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import Navbar from "./Navbar.jsx";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-10 bg-white rounded-xl shadow-md md:max-w-2xl">
        {user ? (
          <h1 className="text-3xl mb-4 font-semibold text-gray-900 border-b-2 pb-2">Welcome back, {user.username}!</h1>
        ) : (
          <>
            <h1 className="text-3xl mb-4 font-semibold text-gray-900 border-b-2 pb-2">Welcome to our website!</h1>
            <p>Please register to enjoy more features.</p>
            <p>If you have an account, please log in to continue.</p>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
