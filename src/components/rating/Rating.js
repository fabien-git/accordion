import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const Rating = ({ nbOfStars }) => {
  const [star, setStars] = useState(0);
  const [starHover, setStarHover] = useState(0);

  function handleClick(currentStarId) {
    setStars(currentStarId);
  }

  function handleMouseEnter(currentStarId) {
    setStarHover(currentStarId);
  }

  function handleMouseLeave() {
    setStarHover(star);
  }

  return (
    <div>
      {[...Array(nbOfStars)].map((_, index) => {
        index += 1;
        const isActive = index <= (starHover || star);
        return (
          <FaStar
            key={index}
            className={isActive ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default Rating;
