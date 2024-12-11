import { useAuthContext } from "../contexts/AuthContext";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className="w-5/6 lg:w-full mx-auto bg-slate-50 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Welcome to our website</h2>
      {user ? (
        <p> Hello {user.username}</p>
      ) : (
        <p>If you have an account please login or register.</p>
      )}
    </div>
  );
};

export default Home;
