import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import BasketItem from "./BasketItem";

function Checkout() {
  const [{ basket }] = useStateValue();

  const checkoutLeft = () => {
    return (
      <div className="checkout__left">
        <div className="">
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        {basket.map((item, index) => {
          return (
            <BasketItem
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    );
  };

  const checkoutRight = () => {
    return (
      <div className="checkout__right">
        <Subtotal />
      </div>
    );
  };

  return (
    <div className="checkout">
      {checkoutLeft()}
      {checkoutRight()}
    </div>
  );
}

export default Checkout;
