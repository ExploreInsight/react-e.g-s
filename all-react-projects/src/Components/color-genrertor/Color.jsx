import React, { useState, useEffect } from "react";
import "./Color.css"
function Color() {
  const [colorType, setColorType] = useState("hex"); // State to manage color type (hex or rgb)
  const [color, setColor] = useState("#444434"); // State to manage the current color

  // Utility function to generate a random number up to the specified limit
  function handleRandomUtility(limit) {
    return Math.floor(Math.random() * limit);
  }

  // Function to generate a random RGB color
  const handleRGB = () => {
    const r = handleRandomUtility(256);
    const g = handleRandomUtility(256);
    const b = handleRandomUtility(256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Function to generate a random Hex color
  const handleHex = () => {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[handleRandomUtility(hex.length)];
    }
    return hexColor;
  };

  // Function to handle color generation based on the current color type
  function handleGenerator() {
    const newColor = colorType === "hex" ? handleHex() : handleRGB();
    setColor(newColor);
  }

  // Update color when the color type changes
  useEffect(() => {
    colorType === 'rgb' ?setColor(handleRGB()): setColor(handleHex())
  }, [colorType]);

  return (
    <div
      className="container"
      style={{ background: color, height: "100vh", width: "100%" }}
    >
      <div className="controls">
        {/* Button to switch to Hex color type */}
        <button className="btn" onClick={() => setColorType("hex")}>HEX </button>
        {/* Button to switch to RGB color type */}
        <button className="btn" onClick={() => setColorType("rgb")}>RGB</button>
        {/* Button to generate a new color */}
        <button className="btn" onClick={handleGenerator}>
          {colorType === "hex" ? "Generate Hex" : "Generate RGB"}
        </button>
      </div>
      <div className="color-info">
        {/* Display the current color code */}
        <h1>{colorType === "hex" ? `HEX: ${color}` : `RGB: ${color}`}</h1>
      
      </div>
    </div>
  );
}

export default Color;

/* Add the following CSS styles */
