/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { VideoList } from "../../constants";
import useIsMobile from "../../hook/useIsMobile";

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = VideoList.length;
  const isMobile = useIsMobile();

  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1,
      );
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 7 ? 0 : prevIndex + 1));
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalSlides - 1 : prevIndex - 1,
      );
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 7 : prevIndex - 1));
    }
  };

  return (
    <div css={carouselStyles}>
      <button className="prev-btn" onClick={prevSlide}>
        Prev
      </button>
      <div
        className="carousel-content"
        style={{
          transform: isMobile
            ? `translateX(-${currentIndex * 100}%)`
            : `translateX(-${currentIndex * 300}px)`,
        }}
      >
        {VideoList.map((image, index) => (
          <img
            key={index}
            src={image.imgSrc}
            alt={`slide-${index}`}
            style={{ cursor: "pointer" }}
            onClick={() => window.open(`${image.link}`, "_blank")}
          />
        ))}
      </div>
      <button className="next-btn" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;

const carouselStyles = css`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;

  .carousel-content {
    display: flex;
    transition: transform 0.5s ease;
    gap: 20px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }

  .prev-btn,
  .next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    cursor: pointer;
    z-index: 10;
  }

  .prev-btn {
    left: 10px;
  }

  .next-btn {
    right: 10px;
  }
`;
