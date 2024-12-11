import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuthContext();

  return (
    <nav className="flex justify-between items-center mx-10 max-w-4xl lg:mx-auto h-14 py-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <ul className="flex space-x-4">
        {user ? (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
