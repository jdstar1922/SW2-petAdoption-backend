import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar (){
    const { isAuthenticated, logout } = useAuth();

    return (
      <nav className="navbar-frame">
        <ul className="navbar">
          <Link to="/menu" className="text-2xl font-bold">
            <h1>PAWS ON</h1>
          </Link>

          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/adopt">Adopt</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/menu" onClick={() => {
                    logout();
                  }}>Logout </Link>
              </li>
            </>
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
}

export default Navbar;

/*
                <Link>
                    <a href="/" className="logoA">PAWS ON</a>
                </Link>

*/