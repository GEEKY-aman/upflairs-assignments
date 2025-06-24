import React from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <main className="app">
      <h1>🛍️ Our Products</h1>
      <section className="product-list">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </section>
    </main>
  );
}

export default App;
