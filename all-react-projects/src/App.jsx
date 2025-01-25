import React from "react";
import Star from "./Components/star-rating/Star";
import './App.css'
import Accordion from "./Components/accordion/Accordion";
import Color from "./Components/color-genrertor/Color";
export default function App() {
  return (
    <div>
      {/* Star component */}
      {/* <Star allStar={5} /> */}

      {/* Accordion component  */}
      <Accordion/>

      {/* color component */}
      {/* <Color/> */}
    </div>
  );
}
