import React, { useState } from "react";
import accordionData from "../components/data.js";
import "../components/Accordian.css"
const Accordian = () => {
  // Holds the id of the currently selected accordion for single selection
  const [selected, setSelected] = useState(null);

  // Enables or disables multi-selection mode
  const [multiSelected, setMultiSelected] = useState(false); 

  // Tracks the ids of the selected accordions in multi-selection mode
  const [selectedIds, setSelectedIds] = useState([]);

  // Function to toggle the accordion's visibility
  function toggleAccordion(id) {
    // Single selection mode logic
    if (!multiSelected) {
      setSelected(id === selected ? null : id); // If the same item is clicked, close it
    } else {
      // Multi-selection mode logic
      setSelectedIds((prevIds) =>
        prevIds.includes(id)
          ? prevIds.filter((removeId) => removeId !== id) // Remove the id if it's already selected
          : [...prevIds, id] // Add the id if it's not selected
      );
    }
  }

  // Logging for debugging
  console.log(selected, selectedIds);

  return (
    <div className="wrapper">
      <div className="accordion">
        <h1>Accordion Data</h1>
        {accordionData.length === 0 ? (
          <div className="no-content">No Data Available</div> // Display if no data is present
        ) : (
          accordionData.map((data) => (
            <div
              className={`accordion-items ${multiSelected ? selectedIds.includes(data.id) ? 'active' : '' : selected === data.id ? 'active' : ''}`}
              key={data.id}
            >
              <h3
                className="accordion-title"
                onClick={() => toggleAccordion(data.id)} // Handle accordion click to toggle visibility
              >
                <span className="title"> {data.title} 🔽</span>
              </h3>
              {/* Display the content if it's selected or in multi-selection mode */}
              {multiSelected
                ? selectedIds.includes(data.id) && (
                    <div className="content">{data.content || "No Content Available"}</div>
                  )
                : selected === data.id && (
                    <div className="content">{data.content || "No Content Available"}</div>
                  )}
            </div>
          ))
        )}
        <button
          className="multiSecltionBtn"
          onClick={() => setMultiSelected(!multiSelected)} // Toggle between multi-selection modes
        >
          {!multiSelected
            ? "Disabled Multi-Selection"
            : "Enabled Multi-Selection"} 
        </button>
      </div>
    </div>
  );
};

export default Accordian;
