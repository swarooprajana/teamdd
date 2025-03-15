import React from "react";
import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
function History() {
  const navigate = useNavigate();


  const watchedHistory = [
    { id: 1, title: "The Dark Knight", date: "March 10, 2025", image: "/images/darkknight.jpg" },
    { id: 2, title: "Inception", date: "March 12, 2025", image: "/images/inception.jpg" },
    { id: 3, title: "Interstellar", date: "March 13, 2025", image: "/images/interstellar.jpg" },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>📜 Watch History</h1>
      <p>Here are the movies and shows you’ve watched:</p>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {watchedHistory.map((item) => (
          <Card key={item.id} style={{ width: "250px", padding: "10px", textAlign: "center" }}>
            <img src={item.image} alt={item.title} style={{ width: "100%",height:"250px", borderRadius: "10px" }} />
            <h3>{item.title}</h3>
            <p style={{ color: "gray" }}>Watched on {item.date}</p>
            <Button variant="contained" color="primary" onClick={() => navigate("/Video")}>🎬 Watch Again</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default History;
