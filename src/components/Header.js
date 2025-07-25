import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import "./Header.css";

const Header = ({ handleLogout, setShowCart }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">🛒 My Store</h1>

        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/category/electronics" className="nav-link">
            Electronics
          </Link>
          <Link to="/category/clothing" className="nav-link">
            Clothing
          </Link>
          <Link to="/category/books" className="nav-link">
            Books
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </nav>

        <div className="header-right">
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>

          {/* Account Button */}
          <button className="account-button">
            <FaUser /> Account
          </button>

          {/* 🛒 Cart Button */}
          <button
            onClick={() => setShowCart(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            🛒 Cart
          </button>

          {/* 🚪 Logout Button */}
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
