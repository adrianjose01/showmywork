import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../store/user-context";

const Header = () => {
  const { isLoggedIn, setToken, setIsLoggedIn, setUserId } =
    useContext(UserContext);

  function logoutHandler() {
    localStorage.removeItem("currentUser");
    setToken(null);
    setUserId();
    setIsLoggedIn(false);
  }

  return (
    <header>
      <nav className="flex justify-between items-center px-2 py-3 bg-blue-900 sm:px-8">
        <div>
          <Link to="/" className="font-bold text-white text-2xl">
            ShowMyWork
          </Link>
        </div>
        <ul className="flex items-center">
          {isLoggedIn ? (
            <>
              <li className="mx-3 cursor-pointer">
                <Link to="/my-profile/123" className="text-white">
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={logoutHandler}
                  to="/signup"
                  className="text-blue-900 mx-3 bg-white py-2 px-4 rounded-lg shadow-lg cursor-pointer"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="mx-3 cursor-pointer">
                <Link to="/login" className="text-white">
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-blue-900 mx-3 bg-white py-2 px-4 rounded-lg shadow-lg cursor-pointer"
                >
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
