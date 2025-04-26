import React, { useState } from "react";
import { IoIosStarOutline } from "react-icons/io"; // Importing star icon from react-icons
import '../star-rating/Star.css'; // Importing external CSS for additional styling

/**
 * Star Component
 * This component renders a star rating system where users can hover over and select a rating.
 *
 * Props:
 * - allStar (number): Total number of stars to display (default is 10).
 */

function Star({ allStar = 10 }) {
  // State to track the selected rating value
  const [rating, setRating] = useState(0);

  // State to track the hovered star (for visual feedback)
  const [hovered, setHovered] = useState(null);

// Handle mouse hover event

  const handleHover = (i) => {
    setHovered(i + 1); // Set hovered state to the star's index + 1 (1-based)
  };

  /**
   * Handle mouse leave event
   * Clears the hover effect when the mouse leaves the star
   */
  const handleLeave = () => {
    setHovered(null); // Reset hovered state to null
  };

  const handleClick = (i) => {
    setRating(i + 1); // Update the rating state to the star's index + 1 (1-based)
  };

  return (
    <div className="container">
      {/* Stars Wrapper: Displays the stars horizontally in the center */}
      <div 
        className="stars" 
        style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}
      >
        {/* Generate stars dynamically based on the 'allStar' prop */}
        {[...Array(allStar)].map((_, index) => (
          <span
            key={index} // Unique key for each star
            onMouseEnter={() => handleHover(index)} // Trigger hover effect
            onMouseLeave={handleLeave} // Remove hover effect
            onClick={() => handleClick(index)} // Set rating on click
            style={{ cursor: "pointer" }} // Change cursor to pointer for interactivity
          >
            {/* Conditional rendering for star color */}
            {hovered > index || rating > index ? (
              <IoIosStarOutline color="#ffc107" size="6rem" /> // Highlighted star
            ) : (
              <IoIosStarOutline color="#e4e5e9" size="6rem" /> // Default star
            )}
          </span>
        ))}
      </div>

      {/* Rating Text: Displays the selected rating below the stars */}
      <div 
        className="rating" 
        style={{ 
          textAlign: 'center', 
          marginTop: '2rem', 
          fontWeight: 'bold', 
          fontSize: '1.5rem' 
        }}
      >
        <span className="rating-text">
          Rating: {rating}/{allStar} {/* Dynamically show the current rating */}
        </span>
      </div>
    </div>
  );
}

export default Star;
