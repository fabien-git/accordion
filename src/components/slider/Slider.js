import React from "react";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

const Slider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  function handlePreviousImage() {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : images.length - 1);
    console.log(currentSlide);
  }

  function handleNextImage() {
    setCurrentSlide(currentSlide < images.length - 1 ? currentSlide + 1 : 0);
    console.log(currentSlide);
  }

  function handleCurrentImage(currentIndex) {
    setCurrentSlide(currentIndex);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>data is loading .. please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>An error occured...</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePreviousImage}
        className="arrow arrow-left"
      />
      {images && images.length > 0 ? (
        images.map((imageItem, index) => (
          <img
            key={index}
            src={imageItem.download_url}
            alt={imageItem.download_url}
            className={
              currentSlide === index
                ? "current-image"
                : "current-image hide-current-image"
            }
          />
        ))
      ) : (
        <div>No images</div>
      )}
      <BsArrowRightCircleFill
        onClick={handleNextImage}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length > 0 ? (
          images.map((_, index) => (
            <button
              className={
                currentSlide === index ? "circle" : "circle hide-current-circle"
              }
              onClick={() => handleCurrentImage(index)}
            ></button>
          ))
        ) : (
          <div>no images</div>
        )}
      </span>
    </div>
  );
};

export default Slider;
