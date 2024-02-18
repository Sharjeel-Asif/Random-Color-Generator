import React, { useState } from "react";

const ColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#3A736H");

  function generteRandomColor(length) {
    return Math.floor(Math.random() * length);
  }
  const handleHexColor = () => {
    let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D"];

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexArray[generteRandomColor(hexArray.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };
  const handleRgbColor = () => {
    let r = generteRandomColor(255);
    let g = generteRandomColor(255);
    let b = generteRandomColor(255);

    console.log(`rbg (${r},${g},${b})`);
    // let rgbaColor = rbg + `(${r},${g},${b})`;
    // console.log(rgbaColor);
    setColor(`rgb(${r},${g},${b})`);
  };

  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", margin: "1rem" }}
        >
          <button onClick={() => setTypeOfColor("hex")}>HEX Color</button>
          <button onClick={() => setTypeOfColor("rgb")}>RGB Color</button>
          <button
            onClick={typeOfColor === "hex" ? handleHexColor : handleRgbColor}
          >
            Random Generator
          </button>
        </div>
        <div style={{ marginTop: "7rem", textAlign: "center" }}>
          <h1>{typeOfColor === "hex" ? "hex" : "rgb"}</h1>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
};

export default ColorGenerator;
