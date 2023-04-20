import React, { useState } from "react";
import Bar from "./Bar";
import BarInput from "./BarInput";

const BarGraph = () => {
  const [bars, setBars] = useState([]);
  const [previousValue, setPreviousValue] = useState(null);

  const handleAddBar = (value, title) => {
    if (previousValue !== null && value < previousValue) {
      alert("Please enter a value higher than the previous value.");
      return;
    }
    const newBars = [...bars, { title: title, value: value }];
    setBars(newBars);
    setPreviousValue(value);
  };

  return (
    <div style={{ borderLeft: "1px solid black", borderBottom: "1px solid black" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>ReactJS progress graph</h2>
      <div>
        <BarInput onAddBar={handleAddBar} />
      </div>
      <div style={{ display: "flex", height: "300px", justifyContent: "flex-end" }}>
        <div style={{ width: "40px", paddingRight: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          {[...Array(11)].map((_, i) => (
            <div key={i} style={{ height: "30px", textAlign: "right" }}>{i * 10}</div>
          ))}
        </div>
        {bars.map((bar, index) => (
          <Bar
            key={index}
            title={bar.title}
            value={bar.value}
            totalBars={bars.length}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default BarGraph;
