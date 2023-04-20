import React, { useState } from "react";

const BarInput = ({ onAddBar }) => {
  const [title, setTitle] = useState("Monday");
  const [value, setValue] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBar(value, title);
    setTitle("Monday");
    setValue("");
    setSelectedDays([...selectedDays, title]);
  };

  const dayOptions = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  return (
    <form onSubmit={handleSubmit}>
        <div  style={{ margin: '20px' }}>
        <select value={title} onChange={(e) => setTitle(e.target.value)}>
        {dayOptions.map((option) => (
          <option
            key={option}
            value={option}
            disabled={selectedDays.includes(option)}
          >
            {option}
          </option>
        ))}
      </select>

        </div >
      <div  style={{ margin: '20px' }}>
      <input
        type="number"
        placeholder="Enter bar value (0-100)"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "200px" }}
      />


      </div>
     <div  style={{ margin: '20px' }}>

     <button type="submit">Add Bar</button>
     </div>
   
    </form>
  );
};

export default BarInput;
