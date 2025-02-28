import { useEffect, useState } from "react";
import "./ImgSlider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImgSlider = ({ limit = 6 }) => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const fetchImages = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(`https://picsum.photos/v2/list?page=2&limit=${limit}`, { signal: controller.signal });
        if (!res.ok) throw new Error("Failed to fetch images!");
        setImages(await res.json());
      } catch (err) {
        if (err.name !== "AbortError") setError(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 10000); // Auto-slide every 10 seconds

    return () => {
      clearInterval(intervalId);
      controller.abort();
    };
  }, [limit, images.length]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!images.length) return <div className="error">No images available</div>;

  return (
    <div className="container">
      <div className="img-slider">
        <BsArrowLeftCircleFill
          className="arrow left-arrow"
          onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
        />
        <img src={images[currentImageIndex].download_url} alt="Random" />
        <BsArrowRightCircleFill
          className="arrow right-arrow"
          onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
        />
        <div className="circle-btn">
          {images.map((_, index) => (
            <button
              key={index}
              className={`circle-btns ${index === currentImageIndex ? "active" : ""}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;
