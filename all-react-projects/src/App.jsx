import React from "react";
import Star from "./Components/star-rating/Star";
import "./App.css";
import Accordion from "./Components/accordion/Accordion";
import Color from "./Components/color-genrertor/Color";
import ImgSlider from "./Components/image-slider/ImgSlider";
export default function App() {
  return (
    <div>
      {/* 1.Accordion component  */}
      {/* <Accordion /> */}

      {/* 2.color component */}
      {/* <Color /> */}

      {/* 3.Star component */}
      {/* <Star allStar={5} /> */}

      {/* 4. Image Slider */}
      <ImgSlider limit={10} />
    </div>
  );
}
