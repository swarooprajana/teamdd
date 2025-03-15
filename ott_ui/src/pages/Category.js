import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { remData } from "../Data/data";
import "./CategoryPage.scss"; // CSS for styling
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function CategoryPage() {
  const { category } = useParams(); // Get category from URL
  const navigate = useNavigate(); // Hook to navigate back

  return (
    <div className="category-container">
      {/* Back Button */}
      
      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        style={{ marginTop: "20px", backgroundColor: "#007bff", color: "white" }} 
        onClick={() => navigate(-1)}
        >
        ⬅ Back
        </Button>
      {/* Category Title */}
      <h1 className="category-title">{category.replace(/-/g, " ").toUpperCase()}</h1>

      {/* Movie Grid */}
      <div className="movie-grid">
        {remData.map((item) => (
            <Link to={`/movie/${item.id}`} key={item.id}>
            <img src={item.image} alt={`Movie ${item.id}`} className="movie-item" />
            </Link>
        ))}

      </div>
    </div>
  );
}

export default CategoryPage;
