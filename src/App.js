// src/App.js
import React from "react";
// i  imported boostrap from boostrap
import "bootstrap/dist/css/bootstrap.min.css";
// i import CARD from react boostrap
import Card from "react-bootstrap/Card";
// I imported button from react bootsrap
import Button from "react-bootstrap/Button";
// i imported Name, price, description and image components from the components folder i created
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

// code to request for your name when the site load
const firstName = prompt("Enter your name"); // Replace with your first name, when name is input here, An image will display else the image behind will not display

const App = () => {
  return (
    //the div container wrapper housing the entire card component
    <div
      style={{
        margin: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card // the card div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: "16rem",
          width: "50rem",
          boxShadow:
            " rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        }}
      >
        {/* the image and the card body are two div that belongs to same parent of card div container */}
        <Image />
        <Card.Body
          style={{
            textAlign: "center",
            padding: "40px",
          }}
        >
          <Name />
          <Price />
          <Description />
          <Button
            style={{ color: "red", fontWeight: "bolder" }}
            variant="primary"
          >
            Click To Purchase
          </Button>
        </Card.Body>
      </Card>

      <p style={{ display: "grid" }}>
        Hello {firstName}
        {/* condition that check if you insert name amd display image under the card else it display only the card */}
        {firstName ? <Image /> : `there!, Insert your name`}
      </p>
    </div>
  );
};

export default App;
