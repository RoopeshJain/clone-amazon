import React from "react";
import { useStateValue } from "./StateProvider";
import "./BasketItem.css";

function BasketItem({ id, title, image, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="basketItem">
      <img className="basketItem__image" src={image} alt="" />

      <div className="basketItem__info">
        {/* <TextTruncate
          className="basketItem__title"
          line={2}
          element="h5"
          truncateText="..."
          text={title}
        /> */}
        <p className="basketItem__title">{title}</p>
        <p className="basketItem__price">
          <small>$</small> <strong>{price}</strong>{" "}
        </p>
        <button onClick={removeFromBasket} className="basketItem__button">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
