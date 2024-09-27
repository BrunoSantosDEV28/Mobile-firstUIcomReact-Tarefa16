// src/App.js
import React from "react";
import ProductPage from "./pages/ProductPage";

const App = () => {
  const product = {
    name: "Produto Exemplo",
    image: "https://source.unsplash.com/random/400x200",
    description: "Esta é uma descrição do produto exemplo.",
    price: 99.99,
    rating: 4.5,
  };

  const seller = {
    name: "Vendedor Exemplo",
    email: "vendedor@example.com",
    phone: "1234-5678",
    rating: 4.0,
  };

  const comments = [
    {
      user: "Usuário 1",
      date: "2023-01-01",
      message: "Ótimo produto!",
      rating: 5,
    },
    {
      user: "Usuário 2",
      date: "2023-01-02",
      message: "Vale a pena!",
      rating: 4,
    },
  ];

  const questions = [
    {
      user: "Usuário A",
      date: "2023-01-01",
      question: "Tem garantia?",
      answer: "Sim, 1 ano.",
    },
    {
      user: "Usuário B",
      date: "2023-01-02",
      question: "Qual a cor disponível?",
      answer: "Várias cores.",
    },
  ];

  const relatedProducts = [
    {
      name: "Produto Relacionado 1",
      image: "https://source.unsplash.com/random/200x100",
      price: 79.99,
    },
    {
      name: "Produto Relacionado 2",
      image: "https://source.unsplash.com/random/200x100",
      price: 89.99,
    },
    {
      name: "Produto Relacionado 3",
      image: "https://source.unsplash.com/random/200x100",
      price: 69.99,
    },
  ];

  return (
    <div>
      <ProductPage
        product={product}
        seller={seller}
        comments={comments}
        questions={questions}
        relatedProducts={relatedProducts}
      />
    </div>
  );
};

export default App;
