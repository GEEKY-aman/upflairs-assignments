import React from "react";
import "./ProductCard.css";

function ProductCard({ name, image, price, description, stock }) {
  return (
    <article className="product-card">
      <header>
        <h2>{name}</h2>
      </header>
      <figure>
        <img src={image} alt={name} className="product-img" />
        <figcaption>{description}</figcaption>
      </figure>
      <footer>
        <p><strong>Price:</strong> ₹{price}</p>
        <p className={stock === "In Stock" ? "in-stock" : "out-stock"}>{stock}</p>
      </footer>
    </article>
  );
}

export default ProductCard;
