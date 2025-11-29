import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to your Todo List</h1>
      <p style={{ marginBottom: "20px" }}>
       Simplify your mind, one note at a time.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <Link to="/login" className="btn btn-primary" style={{ textAlign: "center" }}>
          Login to Create Notes
        </Link>

        <Link to="/todos" className="btn" style={{ textAlign: "center", background: "#97b0e2ff" }}>
          View Todos
        </Link>
      </div>
    </div>
  );
}