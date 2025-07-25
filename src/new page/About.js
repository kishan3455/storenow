// src/new page/About.jsx

import React from "react";
import ProductList from "../components/ProductList";

const About = ({ token }) => {
  return (
    <div>
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
            fontSize: "36px",
            fontWeight: "700",
            textAlign: "left",
            maxWidth: "60%",
            lineHeight: "1.4",
          }}
        >
          Welcome to{" "}
          <span style={{ color: "#218838", fontWeight: "700" }}>
            My Store — Best Deals Everyday!
          </span>
          <br />
          <button
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "600",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "background 0.3s ease",
            }}
            onClick={() => alert("Learn More clicked!")}
          >
            🔍 Learn More
          </button>
        </div>

        <img
          src="https://tse1.mm.bing.net/th/id/OIP.SNoPiQcwLxjl6q8L5vie-gHaHa?pid=Api&P=0&h=180"
          alt="About"
          style={{
            width: "350px",
            height: "350px",
            borderRadius: "16px",
            marginLeft: "30px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* About Info */}
      <div
        style={{
          width: "85%",
          margin: "0 auto 30px",
          fontSize: "18px",
          color: "#333",
        }}
      >
        <h2 style={{ color: "#28a745" }}>About Us</h2>
        <p>
          Welcome to our store! We are committed to delivering quality products
          at affordable prices. Explore our wide range of categories and enjoy
          shopping!
        </p>
      </div>

      {/*  Product List from backend */}
      <div style={{ width: "85%", margin: "40px auto" }}>
        <h3 style={{ color: "#28a745" }}>All Products</h3>
        <ProductList token={token} />
      </div>
    </div>
  );
};

export default About;
