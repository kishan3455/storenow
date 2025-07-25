import React, { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";
import AdminPanel from "./components/Adminpanel";
import About from "./new page/About";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [showCart, setShowCart] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    setToken("");
  };

  return (
    <Routes>
      {/* Login Page */}
      <Route
        path="/login"
        element={
          !token ? (
            <LoginForm setToken={setToken} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />

      {/* Home Page */}
      <Route
        path="/"
        element={
          token ? (
            <div style={{ padding: "20px" }}>
              <Header handleLogout={handleLogout} setShowCart={setShowCart} />

              {/* Banner Section */}
              <div
                style={{
                  backgroundColor: "#dee2e6",
                  padding: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: "12px",
                  margin: "30px auto",
                  width: "85%",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  color: "#28a745",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "700",
                    textAlign: "left",
                    maxWidth: "60%",
                    lineHeight: "1.5",
                  }}
                >
                  Grab{" "}
                  <span style={{ color: "#218838", fontWeight: "700" }}>
                    upto 20% OFF
                  </span>{" "}
                  on select all items!
                  <br />
                  <button
                    style={{
                      marginTop: "20px",
                      padding: "12px 24px",
                      backgroundColor: "#28a745",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "18px",
                      cursor: "pointer",
                      fontWeight: "600",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      transition: "background 0.3s ease",
                    }}
                    onClick={() => alert("Buy Now clicked!")}
                  >
                    🛒 Buy Now
                  </button>
                </div>

                <img
                  src="https://tse1.mm.bing.net/th/id/OIP.SNoPiQcwLxjl6q8L5vie-gHaHa?pid=Api&P=0&h=180"
                  alt="Offer"
                  style={{
                    width: "350px",
                    height: "350px",
                    borderRadius: "16px",
                    marginLeft: "30px",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Admin Panel Button */}
              {isAdmin && (
                <div style={{ marginBottom: "10px", textAlign: "center" }}>
                  <Link to="/admin">
                    <button>Go to Admin Panel</button>
                  </Link>
                </div>
              )}

              {/* Cart Section */}
              {showCart && (
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    margin: "20px auto",
                    width: "85%",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h2 style={{ color: "#28a745" }}>🛒 Your Cart</h2>
                  <p>No items in cart yet.</p>
                  <button
                    onClick={() => setShowCart(false)}
                    style={{
                      marginTop: "10px",
                      padding: "10px 20px",
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Close
                  </button>
                </div>
              )}

              <ProductList token={token} />
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* About Page - 🔧 FIXED: passing token to About */}
      <Route
        path="/about"
        element={
          token ? (
            <div style={{ padding: "20px" }}>
              <Header handleLogout={handleLogout} setShowCart={setShowCart} />

              {showCart && (
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    margin: "20px auto",
                    width: "85%",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <h2 style={{ color: "#28a745" }}>🛒 Your Cart</h2>
                  <p>No items in cart yet.</p>
                  <button
                    onClick={() => setShowCart(false)}
                    style={{
                      marginTop: "10px",
                      padding: "10px 20px",
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Close
                  </button>
                </div>
              )}

              {/* ✅ Token passed to About */}
              <About token={token} />
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Admin Panel */}
      <Route
        path="/admin"
        element={
          token && isAdmin ? <AdminPanel /> : <Navigate to="/login" replace />
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
