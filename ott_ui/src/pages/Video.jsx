import React, { useRef, useState } from "react";
import { FaFastBackward, FaFastForward, FaSun, FaCog, FaPlay, FaPause } from "react-icons/fa";
import "./Video.scss";

function Video() {
  const videoRef = useRef(null);
  const [brightness, setBrightness] = useState(100);
  const [videoSource, setVideoSource] = useState("./images/DevaraT.mp4");
  const [showSettings, setShowSettings] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSkip = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  const handleQualityChange = (event) => {
    setVideoSource(event.target.value);
  };

  const handleBrightnessChange = (event) => {
    setBrightness(event.target.value);
    if (videoRef.current) {
      videoRef.current.style.filter = `brightness(${event.target.value}%)`;
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="main">
      <div className="media-player">
        <header className="media-header">
          <h2 className="text-center">Devara</h2>
          <div className="video-container" style={{ position: "relative" }}>
            <video ref={videoRef} className="movie-image" width="100%" height="95%" controls>
              <source src={videoSource} type="video/mp4" />
              <track src="/subtitles/devara.vtt" kind="subtitles" srcLang="en" label="English" default />
            </video>
            
            {/* Overlay Controls - Always Visible */}
            <div className="overlay-wrapper">
              {/* Play/Pause Button in Center */}
              {/* <button className="center-play-button" onClick={togglePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button> */}
              
              <div className="overlay-controls">
                <button className="control-button" onClick={() => handleSkip(-10)}>
                  <FaFastBackward />
                </button>
                <button className="control-button" onClick={() => handleSkip(10)}>
                  <FaFastForward />
                </button>
                <button className="control-button" onClick={() => setShowSettings(!showSettings)}>
                  <FaCog />
                </button>
              </div>

              {/* Brightness Control - Left Vertical */}
              <div className="brightness-control-overlay">
                <FaSun className="brightness-icon" />
                <input type="range" min="50" max="150" value={brightness} onChange={handleBrightnessChange} className="brightness-slider" />
              </div>
            </div>
            
            {/* Settings Panel - Video Quality */}
            {showSettings && (
              <div className="settings-overlay">
                <label>Video Quality:</label>
                <select onChange={handleQualityChange} value={videoSource}>
                  <option value="./images/DevaraT.mp4">1080p</option>
                  <option value="./images/DevaraT.mp4">720p</option>
                  <option value="./images/DevaraT.mp4">480p</option>
                </select>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Video;
