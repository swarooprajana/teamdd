import React, { useState, useEffect } from "react";
import "./Imageslider.scss";
import { Link } from "react-router-dom";
import Button from "../components/CustomButton";
import { remData } from "../Data/data";

function Imageslider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, img: "images/Devara.jpg", title: "Devara", subtitle: "A fearless warrior rises against tyranny." },
    { id: 2, img: "images/pushap2.jpg", title: "Pushpa", subtitle: "A brave sailor embarks on a perilous journey." },
    { id: 3, img: "images/gg.jpg", title: "Geetha Govindham", subtitle: "A misunderstanding complicates a young man's love story." },
  ];

  const categories = [
    { title: "Recommended for You", key: "recommended" },
    { title: "Trending Now", key: "trending" },
    { title: "Documentaries", key: "documentaries" },
    { title: "Action Movies", key: "action" },
    { title: "Comedy Movies", key: "comedy" },
    { title: "Drama Series", key: "drama" },
    { title: "Horror Movies", key: "horror" },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {/* Hero Section */}
      <div className="slide">
        <div className="top-buttons">
          <Link to="/Video">
            <Button label="Watch Now" color="red" />
          </Link>
        </div>

        <h2 className="slide-title">{slides[currentIndex].title}</h2>
        <p className="slide-subtitle">{slides[currentIndex].subtitle}</p>
        <Link to="/Video">
          <img className="slide-image" src={slides[currentIndex].img} alt={slides[currentIndex].title} />
        </Link>
      </div>

      {/* Navigation Arrows */}
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>

      {/* Movie Categories */}
      {categories.map((category) => (
        <div key={category.key}>
          <div className="content-section">
            <h1 className="section-title">{category.title}</h1>
            <Link to={`/category/${category.key}`}>
              <button className="see-all-btn">See All</button>
            </Link>
          </div>

          
          <div className="movie-list">
          {remData.map((item, index) => (
            <Link key={index} to={`/movie/${index}`} className="movie-item-link">
              <img
                src={item.image}
                alt={`Movie ${index}`}
                onError={() => console.log("Error loading:", item.image)}
                className="movie-item"
              />
            </Link>
          ))}
        </div>
        </div>
      ))}
    </div>
  );
}

export default Imageslider;
