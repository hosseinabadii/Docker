import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData.username, formData.email, formData.password);
  };

  return (
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
        <label className="mb-2">Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
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
          value={"Register"}
          className="bg-gray-800 text-white border-0 py-2 px-4 text-lg cursor-pointer rounded-md transition duration-200 ease-in-out"
        ></input>
      </form>
    </div>
  );
};

export default Register;
