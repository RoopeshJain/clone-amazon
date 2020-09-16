import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useHistory, Link } from "react-router-dom";

function Subtotal() {
  const history = useHistory();

  const [{ basket }] = useStateValue();

  const getTotalPrice = () => {
    let totalPrice = 0;

    //Loop over basket and calculate Total Price
    for (var i = 0; i < basket.length; i++) {
      totalPrice += basket[i].price;
    }

    return totalPrice;
  };

  return (
    <div className="subtotal">
      {/*Currency Formater to Format Pricing value */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotalPrice()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        // onClick={(e) => history.push("/payment")}
        className="subtotal__checkout"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
