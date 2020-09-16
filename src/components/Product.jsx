import React from "react";
import "../style/Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = (event) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
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
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
