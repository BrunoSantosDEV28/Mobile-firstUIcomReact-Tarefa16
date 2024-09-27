import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div style={detailsStyle}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={imageStyle} />
      <p>{product.description}</p>
      <h3>Preço: R${product.price}</h3>
      <h4>Nota: {product.rating}/5</h4>
    </div>
  );
};

const detailsStyle = {
  padding: "20px",
};

const imageStyle = {
  maxWidth: "100%",
  height: "auto",
};

export default ProductDetails;
