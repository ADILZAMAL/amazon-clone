import React from "react";
import { useStateValue } from "./StateProvider";
import Navbar from "./Navbar";
import "../style/Checkout.css";
import CheckoutItem from "./CheckoutItem";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <div className="checkout__container">
        <div className="checkout">
          <img
            className="checkout__add"
            src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/bday/bday.jpg"
          />
          {basket?.length === 0 ? (
            <div>
              <h2>Your Shopping cart is empty.</h2>
              <p>
                Your have no items in your basket. To buy one or more items,
                click "Add to basket" next to the item
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your Shopping cart</h2>

              {basket?.map((item) => (
                <CheckoutItem
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        <div className="checkout__right">
          {basket.length > 0 && <Subtotal />}
        </div>
      </div>
    </>
  );
}

export default Checkout;
