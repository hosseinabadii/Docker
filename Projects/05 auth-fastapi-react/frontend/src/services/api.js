import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8000" });

const registerUser = async (userData) => {
  const response = await api
    .post("/auth/register", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((error) => {
      console.error("Registration failed:", error);
      alert(error.response?.data?.detail || "Something went wrong!");
    });

  return response.data;
};

const loginUser = async (username, password) => {
  const credentials = { username, password };

  const response = await api
    .post("/auth/token", credentials, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .catch((error) => {
      console.error("Login failed:", error);
      alert(error.response?.data?.detail || "Something went wrong!");
    });

  return response.data;
};

const fetchCurrentUser = async (accessToken) => {
  const response = await api
    .get("/users/me/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .catch((error) => {
      console.error("Registration failed:", error);
      alert(error.response?.data?.detail || "Something went wrong!");
    });

  return response.data;
};

export { registerUser, loginUser, fetchCurrentUser };
