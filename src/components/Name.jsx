// src/Name.js
import React from "react";
// card component was imported from react boostrap
import Card from "react-bootstrap/Card";
// the product was imported from the product JSON file
import product from "../product";

// the name component call the name prop from the product json file and exported it so it can be useful and imported into the app.js file

const Name = () => {
  return <Card.Title>{product.name}</Card.Title>;
};

export default Name;
