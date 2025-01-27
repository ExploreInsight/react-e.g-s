import { useEffect, useState } from "react";
import "./ImgSlider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImgSlider = ({ limit = 6 }) => {
  // State variables
  const [images, setImages] = useState([]); // To store fetched images
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Current image being displayed
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error state

  // Fetch images on component mount or when the limit changes
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true); // Set loading state
        const res = await fetch(
          `https://picsum.photos/v2/list?page=2&limit=${limit}`
        );
        const resData = await res.json();
        if (resData) {
          setImages(resData); // Store fetched images
        }
      } catch (error) {
        console.error("Error Occurred, Something is wrong. Please wait!");
        setError(`Error in Loading: ${error.message}`); // Set error state
      } finally {
        setLoading(false); // Reset loading state
      }
    };
    fetchImages();
  }, [limit]);

  // Display loading or error state
  if (loading)
    return <div className="loading">Data Loading! Please wait...</div>;
  if (error) return <div className="err">{error}</div>;

  // Function to handle left arrow click
  function handleLeftArrowClick() {
    setCurrentImageIndex((prevImg) =>
      prevImg === 0 ? images.length - 1 : prevImg - 1
    );
  }

  // Function to handle right arrow click
  function handleRightArrowClick() {
    setCurrentImageIndex((prevImg) =>
      prevImg === images.length - 1 ? 0 : prevImg + 1
    );
  }

  // Function to handle specific image button click
  function handleCurrentImage(id) {
    setCurrentImageIndex(id);
  }

  return (
    <div className="container">
      <div className="img-slider">
        {/* Left Arrow */}
        <BsArrowLeftCircleFill
          className="arrow left-arrow"
          onClick={handleLeftArrowClick}
        />

        {/* Display Current Image */}
        {images && images.length ? (
          <img
            src={images[currentImageIndex].download_url}
            alt={`Image by ${images[currentImageIndex].author}`}
          />
        ) : (
          "No data available"
        )}

        {/* Right Arrow */}
        <BsArrowRightCircleFill
          className="arrow right-arrow"
          onClick={handleRightArrowClick}
        />

        {/* Circle Buttons for Navigation */}
        <div className="circle-btn">
          {images &&
            images.length > 0 &&
            images.map((_, index) => (
              <button
                key={index}
                className={`circle-btns ${
                  index === currentImageIndex ? "active" : ""
                }`}
                onClick={() => handleCurrentImage(index)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;
