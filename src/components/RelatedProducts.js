import React from "react";

const RelatedProducts = ({ relatedProducts }) => {
  return (
    <div style={relatedProductsStyle}>
      <h2>Produtos Relacionados</h2>
      <div style={relatedProductsListStyle}>
        {relatedProducts.map((product, index) => (
          <div key={index} style={relatedProductStyle}>
            <img src={product.image} alt={product.name} style={imageStyle} />
            <p>{product.name}</p>
            <h4>R${product.price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

const relatedProductsStyle = {
  padding: "20px",
  border: "1px solid #ccc",
  marginTop: "20px",
};

const relatedProductsListStyle = {
  display: "flex",
  flexWrap: "wrap",
};

const relatedProductStyle = {
  width: "30%",
  margin: "10px",
  textAlign: "center",
};

export default RelatedProducts;
