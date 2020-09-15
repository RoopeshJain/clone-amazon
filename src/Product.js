import React, { useContext } from "react";
import "./Product.css";
import TextTruncate from "react-text-truncate";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addtoBasket = () => {
    //Dispatch data in Data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        {/* <p>{title}</p> */}
        <TextTruncate line={2} element="p" truncateText="..." text={title} />
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>
      <img src={image}></img>
      <button onClick={addtoBasket} className="product__button">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
