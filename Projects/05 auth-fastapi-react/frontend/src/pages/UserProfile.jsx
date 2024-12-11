import { useAuthContext } from "../contexts/AuthContext";

const UserProfile = () => {
  const { user } = useAuthContext();

  return (
    <div className="w-5/6 sm:w-1/2 mx-auto bg-slate-50 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold border-b-2 border-gray-300 mb-4">
        Your Profile
      </h2>
      {user ? (
        <div>
          <p className="font-bold">
            Username: <span className="text-gray-500">{user.username}</span>
          </p>
          <p className="font-bold">
            Email: <span className="text-gray-500">{user.email}</span>
          </p>
        </div>
      ) : (
        <p>You have to login to see this page.</p>
      )}
    </div>
  );
};

export default UserProfile;
