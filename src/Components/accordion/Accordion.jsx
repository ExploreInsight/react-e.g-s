import React, { useState } from "react";
import { accordionData } from "./data";
import { FiPlus, FiMinus } from "react-icons/fi";
import "../accordion/Accordion.css";

const Accordion = () => {
  // State for single-selection mode
  const [selected, setSelected] = useState(null);

  // State for enabling/disabling multi-selection
  const [multiSelected, setMultiSelected] = useState(false);

  // State for storing selected IDs in multi-selection mode
  const [multipleId, setMultipleId] = useState([]);

  // Function to toggle accordion items
  const toggleAccordion = (id) => {
    if (!multiSelected) {
      // Single selection mode: Allow only one item to be open at a time
      setSelected((prevId) => (prevId !== id ? id : null));
    } else {
      // Multi selection mode: Allow multiple items to be open simultaneously
      setMultipleId(
        (prev) =>
          prev.includes(id)
            ? prev.filter((removeId) => removeId !== id) // Remove item if already open
            : [...prev, id] // Add item if not open
      );
    }
  };
  // this function make sure if multiselction is off then close, all items
  const handleMultiSelectionToggle = () => {
    setMultiSelected(!multiSelected);

    if (multiSelected) {
      // If switching to single selection, reset the multipleId and close all items
      setMultipleId([]);
    }
  };

  return (
    <div className="accordion-wrapper">
      {/* Accordion Items */}
      <div className="accordion">
        {accordionData.length > 0 ? (
          accordionData.map((data, index) => (
            <div className="accordion-items" key={index}>
              {/* Accordion Title */}
              <div
                className="accordion-titles"
                onClick={() => toggleAccordion(data.id)}
              >
                <span>{data.title}</span>
                {/* Display Plus/Minus Icon based on open/close state */}
                {selected === data.id || multipleId.includes(data.id) ? (
                  <FiMinus className="icon minus-icon" />
                ) : (
                  <FiPlus className="icon plus-icon" />
                )}
              </div>

              {/* Accordion Content */}
              {(selected === data.id || multipleId.includes(data.id)) && (
                <div className="accordion-content">{data.content}</div>
              )}
            </div>
          ))
        ) : (
          //if no data is available
          <div className="noData">No Data Found</div>
        )}
      </div>

      {/* Multi-Selection Toggle Button */}
      <button
        className="multi-selection-btn"
        onClick={handleMultiSelectionToggle}
      >
        {!multiSelected ? "Enable Multi-Selection" : "Disable Multi-Selection"}
      </button>
    </div>
  );
};

export default Accordion;
