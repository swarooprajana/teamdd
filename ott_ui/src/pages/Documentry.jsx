import React from "react";
import "./Documentary.scss"; // Import the CSS file

function Documentry() {
  return (
    <div className="documentary-container">
      <h2 className="documentary-title">Documentary</h2>
      <div className="documentary-slider">
        <img className="movie" src="images/doc1.png" alt="Doc 1" />
        <img className="movie" src="images/doc.png" alt="Doc 2" />
        <img className="movie" src="images/doc2.png" alt="Doc 3" />
        <img className="movie" src="images/doc3.png" alt="Doc 4" />
        <img className="movie" src="images/doc4.png" alt="Doc 5" />
        <img className="movie" src="images/doc5.png" alt="Doc 6" />
        <img className="movie" src="images/doc6.png" alt="Doc 7" />
        <img className="movie" src="images/doc7.png" alt="Doc 8" />
        <img className="movie" src="images/doc8.png" alt="Doc 9" />
        <img className="movie" src="images/doc9.png" alt="Doc 10" />
      </div>
    </div>
  );
}

export default Documentry;
