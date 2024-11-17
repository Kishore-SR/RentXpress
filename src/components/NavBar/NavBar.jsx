import 'remixicon/fonts/remixicon.css'
import { useState } from "react";
import "./NavBar.css";

export const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="text-container">
            <h1 className="logo-text">RentXpress</h1>
          </div>
          <ul className="nav-items">
            <li><a href="#">Rent</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="auth-buttons">
            <a href="#" className="btn btn-border">
              Sign In
            </a>
            <a href="#" className="btn btn-gradient">
              Create Account
            </a>
          </div>
          <div className="mobile-menu">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <i class="ri-close-large-fill"></i> : <i class="ri-menu-3-fill"></i>}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="mobile-drawer">
            <ul>
            <li><a href="#">Rent</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
            <div className="drawer-buttons">
              <a href="#" className="btn btn-border">
                Sign In
              </a>
              <a href="#" className="btn btn-gradient">
                Create Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

