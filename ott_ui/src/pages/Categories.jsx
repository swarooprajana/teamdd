import React from "react";
import { Link } from "react-router-dom";
import './Categories.scss';

function Categories() {
  const genres = [
    "Action", "Anime", "Comedy", "Documentary", "Drama",
    "Fantasy", "Horror", "Kids", "Sci-Fi", "Movies"
  ];

  return (
    <div>
      <div className="cate">
        <h2 className="text-center"><b>Categories</b></h2>
        <br />
        <h4 className="text-center"><b>Genres</b></h4>
      </div>
      <br />
      
      {/* Map through genres to create category links */}
      <div className="menu">
        {genres.map((genre, index) => (
          <div key={index} className="box">
            <Link to={`/category/${genre.toLowerCase()}`} className="gen">
              <button className="genre-button">{genre}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
