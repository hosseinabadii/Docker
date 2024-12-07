import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";
import Navbar from "./Navbar.jsx";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData.username, formData.password);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md md:max-w-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col p-5">
          <label className="mb-2">Username: </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <label className="mb-2">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="submit"
            value={"Login"}
            className="bg-gray-800 text-white border-0 py-2 px-4 text-lg cursor-pointer rounded-md transition duration-200 ease-in-out"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
