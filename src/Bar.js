import React, { useState } from "react";

const Bar = ({ title, value, totalBars, index, xAxisTitle }) => {
  const barHeight = (value / 100) * 300;

  const marginLeft = index === 0 ? 0 : "2px";
  const marginRight = index === totalBars - 1 ? 0 : "2px";

  // initialize state for the bar's color
  const [backgroundColor, setBackgroundColor] = useState(null);

  // generate a random color if the bar does not have a color assigned
  if (!backgroundColor) {
    setBackgroundColor(getRandomColor());
  }

  // function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div
      style={{
        height: `${barHeight}px`,
        width: `${100 / totalBars}%`,
        backgroundColor: backgroundColor,
        border: "2px solid black",
        marginLeft: marginLeft,
        marginRight: marginRight,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        marginTop: `${300 - barHeight}px`,
      }}
    >
      <div style={{ fontWeight: "bold", marginTop: "5px" }}>{value}</div>
      <div style={{ marginTop: "10px", height: "20px" }}>{title}</div>
    </div>
  );
};

export default Bar;
