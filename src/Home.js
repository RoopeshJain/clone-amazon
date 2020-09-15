import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
          alt=""
        ></img>

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            price={14.99}
            rating={4}
          />
          <Product
            id="2"
            title="Espresso Machines 20 Bar Fast Heating Cappuccino Machine with Milk Frother for Espresso, Latte and Mocha, for Home Barista, 1.25 L Water Tank, Double Temperature Control System, White, 1350W"
            image="https://images-na.ssl-images-amazon.com/images/I/61RDv00CJGL._AC_SX522_.jpg"
            price={139.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Xiaomi Mi Band 4 AMOLED Color Screen Wristband BT5.0 Fitness Tracker Smart Wristbands (Black)"
            image="https://images-na.ssl-images-amazon.com/images/I/61KbCI7wMjL._AC_SX569_.jpg"
            price={33.99}
            rating={4}
          />
          <Product
            id="4"
            title="JBL Flip 4 Waterproof Portable Bluetooth Speaker - Black, Medium (JBLFLIP4BK)"
            image="https://images-na.ssl-images-amazon.com/images/I/61d5F64UDpL._AC_SX425_.jpg"
            price={79.99}
            rating={4}
          />
          <Product
            id="5"
            title="Apple iPhone 11 (64GB, Purple) [Locked] + Carrier Subscription"
            image="https://m.media-amazon.com/images/I/71xn9bCRfhL.jpg"
            price={549.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="2020 Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD Storage) - Space Gray"
            image="https://images-na.ssl-images-amazon.com/images/I/71bElkQQ7LL._AC_SX425_.jpg"
            price={1699.0}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
