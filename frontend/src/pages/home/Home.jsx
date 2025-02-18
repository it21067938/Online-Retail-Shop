import React, { useEffect, useState } from "react";
import assets from './../../assets/img/assets';
import "../../assets/css/main.css";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [assets.one, assets.two, assets.three];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div>
      <div className="slideshow-container">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`mySlides fade ${index === currentSlide ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index + 1}`}  />
            <div className="text">Caption {index + 1}</div>
          </div>
        ))}
      </div>

       </div>
  );
};

export default Home;
