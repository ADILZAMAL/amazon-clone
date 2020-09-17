import React from "react";
import { useStateValue } from "./StateProvider";
function CheckoutItem({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  
  const removeFromBasket = (event) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout__item">
      <img className="checkout__item__img" src={image} />
      <div className="checkout__item__info">
        <p className="checkout__item__title">{title}</p>
        <p className="checkout__item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout__item__rating">
          {Array(rating)
            .fill()
            .map((i) => {
              return <p style={{ color: "yellow" }}>⭐</p>;
            })}
        </div>
        <button onClick={removeFromBasket} className="checkout__item__remove">
          Remove item
        </button>
      </div>
    </div>
  );
}

export default CheckoutItem;
