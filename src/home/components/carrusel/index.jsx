import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleImageClick = () => {
    router.push("/productos");
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Stack
      style={{
        position: "relative",
        width: "120%",
        overflow: "hidden",
        paddingBottom: "40px",
        marginTop: "16px",
        borderRadius: "50px",
      }}
    >
      <div
        onClick={handleImageClick}
        style={{ cursor: "pointer", height: "100%" }}
      >
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "50px",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "20px",
        }}
      >
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              cursor: "pointer",
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "#285b99" : "lightgray",
              display: "inline-block",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </div>
    </Stack>
  );
};

export default Carousel;
