import React from "react";
import { useState } from "react";

const Random = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function generateRandom(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += generateRandom(hex);
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {}

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onclick={() => setTypeOfColor("hex")}> Create HEX Color</button>
      <button onclick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
    </div>
  );
};

export default Random;
