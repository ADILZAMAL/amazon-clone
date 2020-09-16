import React from "react";
import "../style/Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg"
        alt="Amazon-banner"
        className="home__banner"
      />
      {/**product */}
      <div className="home__row">
        <Product
          id="123455"
          title="Amazonbasics Stand Mixer"
          price={65.04}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81n6V3LEhIL._AC_SX679_.jpg"
        />
        <Product
          id="123455"
          title="HOMCOM Folding Kick Scooter 2 Big Wheels Teens Adult Children 14+ Adjustable Ride On White"
          price={59.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61DUlC4tA0L._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123455"
          title="Apple airpod with Charging Case(wired)"
          price={129.0}
          rating={3}
          image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC._SR360,460.jpg"
        />
        <Product
          id="123455"
          title="StorePAK Medium Storage Boxes - Archive Cardboard Boxes with Handles, 64 litres - 100% Recyclable - H40.5 x W40.5 x D40.5 cm (Pack of 10)"
          price={18.59}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/815DY3WFkjL._AC_SX569_.jpg"
        />
        <Product
          id="123455"
          title="Deal of the day"
          price={15.87}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/merch/2020/campaign/91874378/uk-v3-gateway-dashboard-card-379x304._SY304_CB429036539_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123455"
          title="Samsung C32F391 32-Inch Curved LED Monitor -HDMI, Displayport, White Gloss"
          price={199.97}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61WRAPpyVVL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
