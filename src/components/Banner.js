import React from "react";

const Banner = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff", // White background
        padding: "20px",
        textAlign: "center",
        fontSize: "26px",
        fontWeight: "bold",
        borderRadius: "8px",
        margin: "20px auto",
        width: "80%",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)", // Optional shadow
        color: "#28a745", // Green text
      }}
    >
      Grab <span style={{ fontWeight: "bold" }}>up to 50% OFF</span> on select
      items!
    </div>
  );
};

export default Banner;
