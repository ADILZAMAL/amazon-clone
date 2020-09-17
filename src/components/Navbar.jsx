import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";
function Navbar() {
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  const [{ basket, user }] = useStateValue();
  return (
    <div className="navbar">
      <Link to="/">
        <img
          className="navbar__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="navbar__search">
        <input type="text" className="navbar__search__input" />
        <SearchIcon className="navbar__search__icon" />
      </div>
      <div className="navbar__items">
        <Link className="navbar__items__link" to={!user && "/login"}>
          <div onClick={login} className="navbar__item">
            <span className="navbar__item__line1">
              {" "}
              {user && "Hello"}
              {user?.email}
            </span>
            <span className="navbar__item__line2">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link className="navbar__items__link" to="/">
          <div className="navbar__item">
            <spam className="navbar__item__line1">Reurns</spam>
            <spam className="navbar__item__line2">& Orders</spam>
          </div>
        </Link>
        <Link className="navbar__items__link" to="/">
          <div className="navbar__item">
            <spam className="navbar__item__line1">Your</spam>
            <spam className="navbar__item__line2"> Prime</spam>
          </div>
        </Link>
        <Link to="/checkout" className="navbar__items__link">
          <div className="navbar__basket">
            <ShoppingBasketIcon />
            <span className="navbar__item__line1 basket__count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
