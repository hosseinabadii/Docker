import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, fetchUserProfile, registerUser } from "../services/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        const user = await fetchUserProfile(token);
        setUser(user);
      };
      getUser();
    }
  }, [token]);

  const login = async (username, password) => {
    try {
      const response = await loginUser({ username, password });
      if (response?.access_token) {
        setToken(response.access_token);
        localStorage.setItem("token", response.access_token);
        const userProfile = await fetchUserProfile(response.access_token);
        setUser(userProfile);
        navigate("/profile");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert(
        error.response?.data?.detail
          ? `${error.response.data.detail}. Please try again.`
          : "An error occurred during login. Please try again."
      );
    }
  };

  const register = async (username, email, password) => {
    try {
      await registerUser({ username, email, password });
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      alert(
        error.response?.data?.detail
          ? `${error.response.data.detail}. Please try again.`
          : "An error occurred during registration. Please try again."
      );
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
