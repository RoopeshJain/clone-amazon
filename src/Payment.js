import { Link } from "react-router-dom";
import React from "react";
import BasketItem from "./BasketItem";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import StripeCheckout from "react-stripe-checkout";

function Payment() {
  const [{ basket, user }] = useStateValue();

  const makePayment = (token) => {
    const { email, id } = user;

    const body = {
      email,
      id,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`https://stripepayment-a5c7d.web.app/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__item">
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
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <StripeCheckout
              stripeKey="pk_test_51HQWhfD32JX4Gp4v9c9KLOjsP13G21mA3cVGbk7cpMTtuQYZ41axFUt7CLwwS7xmljk18EusQ0cY4MceCXZeyRGT00O6vgNE4y"
              token={makePayment}
              name="Proceed"
              amount={product.price * 100}
            >
              <button className="payment__button">Proceed</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
