import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

const UserProfile = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-10 p-10 font-bold bg-white rounded-xl shadow-md md:max-w-2xl">
        <h2 className="text-xl leading-6 font-medium text-gray-900 mb-5">
          You have to be logged in to view this page
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-10 font-bold text-2xl bg-white rounded-xl shadow-md md:max-w-2xl">
      <h2 className="text-3xl mb-4 font-semibold text-gray-900 border-b-2 pb-2">
        User Profile
      </h2>
      <p className="">
        Username: <span className="text-gray-600">{user.username}</span>
      </p>
      <p className="">
        Email: <span className="text-gray-600">{user.email}</span>
      </p>
    </div>
  );
};

export default UserProfile;
