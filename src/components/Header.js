import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={{ margin: 0 }}>E-Commerce</h1>
    </header>
  );
};

const headerStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px 20px",
  textAlign: "center",
};

export default Header;
