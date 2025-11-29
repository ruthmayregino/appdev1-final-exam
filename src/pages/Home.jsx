import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Todo App</h1>
      <p style={styles.text}>
        <Link to="/login" style={styles.link}>Create a Note</Link> to manage todos.
      </p>
      <p style={styles.text}>
        <Link to="/todos" style={styles.link}>View Todos</Link> to manage todos.
      </p>
    </div>
  );
}

const styles = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // vertical center
    alignItems: "center",     // horizontal center
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#333",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    color: "#555",
  },
  link: {
    color: "#4f46e5",
    fontWeight: "bold",
  }
};
