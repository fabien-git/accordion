import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const Index = ({ nbOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    console.log("coucou");
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(nbOfStars)].map((_, index) => {
        const currentIndex = index + 1;
        const isActive = currentIndex <= (hover || rating);
        return (
          <FaStar
            key={currentIndex}
            className={isActive ? "active" : "inactive"}
            onClick={() => handleClick(currentIndex)}
            onMouseEnter={() => handleMouseEnter(currentIndex)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default Index;
