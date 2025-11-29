import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      <form style={styles.form}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button}>Login</button>
      </form>
    </div>
  );
}

export default Login;

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
    marginBottom: "20px",
    color: "#000000ff",
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ffffffff",
  },
  button: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "white",
    cursor: "pointer",
  }
};
