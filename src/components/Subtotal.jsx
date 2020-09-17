import React from "react";
import { useStateValue } from "./StateProvider";
import "../style/Subtotal.css";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const add = (basket) => {
    let sum = 0;
    for (let i = 0; i < basket.length; i++) {
      sum += basket[i].price;
    }
    return sum;
  };
  return (
    <div>
      <div className="subtotal">
        <p>
          Subtotal ({basket.length} itmes):<strong>${add(basket)}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" />
          This order contains a gift
        </small>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Subtotal;
