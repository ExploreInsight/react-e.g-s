import React, { useEffect, useState } from "react";
import "../components/Random.css"; // Importing styles for the component

function RandomColor() {
  // State to track the color type (hex or rgb)
  const [colorType, setColorType] = useState("hex");

  // State to store the generated color
  const [color, setColor] = useState("#111111");

  // Function to generate a random Hexadecimal color

  const generateHexColor = () => {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexColor;
  };

  // Function to generate a random RGB color

  const generateRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  /**
   * Function to handle color generation based on the selected color type
   * Updates the `color` state with a new value
   */
  const handleGenerateColor = () => {
    const newColor =
      colorType === "hex" ? generateHexColor() : generateRgbColor();
    setColor(newColor);
  };

  // useEffect to automatically generate a color whenever `colorType` changes

  useEffect(() => {
    const newColor =
      colorType === "hex" ? generateHexColor() : generateRgbColor();
    setColor(newColor);
  }, [colorType]);

  return (
    <div style={{ height: "100vh", width: "100%", background: color }}>
      <div style={{ textAlign: "center", padding: "20px" }}>
        {/* Button to switch to RGB color type */}
        <button onClick={() => setColorType("rgb")}>RGB Converter</button>

        {/* Button to switch to HEX color type */}
        <button onClick={() => setColorType("hex")}>HEX Converter</button>

        {/* Button to generate a random color */}
        <button onClick={handleGenerateColor}>Random Color Generator</button>

        {/* Display the current color type and its value */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "45px",
            marginTop: "60px",
          }}
        >
          <h3>{colorType === "hex" ? "HEX COLOR:" : "RGB COLOR:"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
}

export default RandomColor;
