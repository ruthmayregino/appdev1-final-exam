import React from 'react';

function Todos() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todos</h1>
      <p style={styles.text}>Your todo list will appear here.</p>
    </div>
  );
}

export default Todos;

const styles = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "10px",
    color: "#333",
  },
  text: {
    fontSize: "1.2rem",
    color: "#555",
  }
};
