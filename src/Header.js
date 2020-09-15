import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } else {
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchinput" type="text" />
        <SearchIcon className="header__searchicon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/signin"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionlineOne">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header__optionlineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionlineOne">Hello</span>
          <span className="header__optionlineTwo">{`&Orders`}</span>
        </div>
        <div className="header__option">
          <span className="header__optionlineOne">Hello</span>
          <span className="header__optionlineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionlineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
