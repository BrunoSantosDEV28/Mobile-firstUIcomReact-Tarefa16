import React from "react";

const SellerInfo = ({ seller }) => {
  return (
    <div style={sellerStyle}>
      <h2>Informações do Vendedor</h2>
      <p>Nome: {seller.name}</p>
      <p>Email: {seller.email}</p>
      <p>Telefone: {seller.phone}</p>
      <h4>Nota: {seller.rating}/5</h4>
    </div>
  );
};

const sellerStyle = {
  padding: "20px",
  border: "1px solid #ccc",
  marginTop: "20px",
};

export default SellerInfo;
