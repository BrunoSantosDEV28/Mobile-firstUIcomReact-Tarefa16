import React from "react";

const Menu = () => {
  return (
    <nav style={menuStyle}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={menuItemStyle}>Home</li>
        <li style={menuItemStyle}>Produtos</li>
        <li style={menuItemStyle}>Contato</li>
      </ul>
    </nav>
  );
};

const menuStyle = {
  backgroundColor: "#f2f2f2",
  padding: "10px",
};

const menuItemStyle = {
  margin: "10px 0",
  cursor: "pointer",
};

export default Menu;
