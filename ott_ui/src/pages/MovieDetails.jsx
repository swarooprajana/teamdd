import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./MovieDetails.scss";

function MovieDetails() {
  const navigate = useNavigate();

  const movie = {
    id: "dark-knight",
    title: "The Dark Knight",
    image: "/images/darkknight.jpg",
    description:
      "Batman battles the Joker, a criminal mastermind who seeks to create chaos in Gotham City. A tale of heroism, sacrifice, and the fine line between justice and vengeance.",
    genre: "Action, Crime, Drama",
    director: "Christopher Nolan",
    releaseYear: "2008",
    duration: "2h 32m",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Gary Oldman"],
    episodes: [
      {
        id: 1,
        title: "Episode 1: The Rise",
        image: "/images/darkknight.jpg",
        link: "/downloads/episode1.mp4",
      },
      {
        id: 2,
        title: "Episode 2: Chaos Begins",
        image: "/images/ep2.jpeg",
        link: "/downloads/episode2.mp4",
      },
      {
        id: 3,
        title: "Episode 3: The Final Showdown",
        image: "/images/ep2.jpeg",
        link: "/downloads/episode3.mp4",
      },
    ],
  };

  return (
    <div className="movie-details">
      {/* Back Button */}
      <Button variant="contained" color="primary" className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </Button>

      {/* Movie Info Section */}
      <div className="movie-container">
        <img src={movie.image} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h1>{movie.title} ({movie.releaseYear})</h1>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <p><strong>Director:</strong> {movie.director}</p>
          
          <h3>Cast:</h3>
          <ul>
            {movie.cast.map((actor, index) => (
              <li key={index}>{actor}</li>
            ))}
          </ul>

          <h3>Synopsis:</h3>
          <p>{movie.description}</p>

          {/* Watch Now Button */}
          <Button variant="contained" color="secondary" className="watch-btn">
            🎬 Watch Now
          </Button>

          {/* Download Movie Button - Redirects to Download Page with Movie Data */}
          <Button
            variant="contained"
            color="success"
            className="download-btn"
            onClick={() => navigate("/download", { state: { movie } })}
          >
            ⬇ Download Movie
          </Button>
        </div>
      </div>

      {/* Episodes Section */}
      <div className="episodes-section">
        <h2>Episodes</h2>
        <div className="episode-list">
          {movie.episodes.map((ep) => (
            <div key={ep.id} className="episode-card">
              <img src={ep.image} alt={ep.title} className="episode-thumbnail" />
              <div className="episode-info">
                <span className="episode-title">{ep.title}</span>
                <Button variant="contained" color="secondary" className="watch-btn">
                  🎬 Watch Now
                </Button>
                <Button
                  variant="outlined"
                  color="success"
                  className="download-btn"
                  onClick={() => navigate("/download", { state: { movie, episode: ep } })}
                >
                  ⬇ Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
