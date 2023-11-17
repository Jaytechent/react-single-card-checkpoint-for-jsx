// src/product.js. I imported the card picture from my image folder and read it in the object created (product) and was exported so i can be able to import it into the four components thats need it.
import CardOne from "./images/Card1.jpg";

// the product JSON file with object that has four properties( name, price,description and image)
const product = {
  name: "Jaytech BtcPro-Wallet",
  price: 19.99,
  description: "This is a bitcoin special wallet for Decentralized finances",
  image: CardOne,
};

export default product;
