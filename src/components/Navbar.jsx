import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    alert("You have been logged out.");
    navigate("/");
  };

  return (
    <div className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h2>MyShop</h2>

        <button
          className="navbar-toggler me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0 fs-5 text">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="cart nav-link" to="/cart">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png"
                  className="cart-icon"
                  alt="cart"
                />
                <sup>{cartItems.length}</sup>
              </Link>
            </li>
            <button className="btn5" onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
