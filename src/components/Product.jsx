import React from "react";
import "../style/Product.css";
function Product({ id, title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((i) => {
              return <p style={{ color: "yellow" }}>⭐</p>;
            })}
        </div>
      </div>

      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
