// src/Price.js
import React from "react";
// the card was imported from react boostrap
import Card from "react-bootstrap/Card";
//the product was imported from product Json file created at the src root
import product from "../product";

// the price component call the price prop from the product json file and exported it so it can be useful and imported into the app.js file
// I use the naira sign too to format it and some inline styling to make it look beautiful

const Price = () => {
  return (
    <Card.Text style={{ color: "red", fontWeight: "bolder" }}>
      {" "}
      &#8358;{product.price}{" "}
    </Card.Text>
  );
};

export default Price;
