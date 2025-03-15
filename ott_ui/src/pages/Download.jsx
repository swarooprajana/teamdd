import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, LinearProgress } from "@mui/material";
import "./DownloadPage.scss";

function DownloadPage() {
  const navigate = useNavigate();

 
  const [isDownloading, setIsDownloading] = useState(true);
  const [downloadedMovies, setDownloadedMovies] = useState([
    { id: 1, title: "Inception", image: "/images/ep2.jpeg", link: "/watch/inception" },
    { id: 2, title: "Interstellar", image: "/images/darkknight.jpg", link: "/watch/interstellar" },
  ]);

  
  const cancelDownload = () => setIsDownloading(false);

 
  const deleteMovie = (id) => {
    setDownloadedMovies(downloadedMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="download-page">

      <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
        ⬅ Back
      </Button>

      <h1>Downloads</h1>

      {isDownloading && (
        <div className="downloading-item">
          <img src="/images/darkknight.jpg" alt="Downloading" className="downloading-image" />
          <div className="downloading-info">
            <p><strong>Downloading:</strong> The Dark Knight</p>
            <LinearProgress color="success" />
            <Button variant="outlined" color="error" onClick={cancelDownload}>
              ✖ Cancel Download
            </Button>
          </div>
        </div>
      )}
      <h2>Downloaded Movies</h2>
      <div className="downloaded-list">
        {downloadedMovies.map((movie) => (
          <div key={movie.id} className="downloaded-item">
            <img src={movie.image} alt={movie.title} className="downloaded-image" />
            <p>{movie.title}</p>
            <Button variant="contained" color="secondary" onClick={() => navigate("/Video")}>
              🎬 Watch Now
            </Button>
            <Button variant="outlined" color="error" onClick={() => deleteMovie(movie.id)}>
              🗑 Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DownloadPage;
