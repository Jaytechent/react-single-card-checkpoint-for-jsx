// src/Description.js
import React from "react";
// the product is imported from the product JSON file
import product from "../product";
// the description component call the description prop from the product json file and exported it so it can be useful and imported into the app.js file
const Description = () => {
  return <p>{product.description}</p>;
};

export default Description;
