import React, { useState } from "react";

export default function UploadAndPlay() {
  const [songFile, setSongFile] = useState(null);
  const [songName, setSongName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes("audio")) {
      setSongFile(URL.createObjectURL(file)); // blob URL
      setSongName(file.name);
    } else {
      alert("Please select a valid audio file (MP3)");
    }
  };

  return (
    <div style={styles.container}>
      <h2>🎤 Upload Bhojpuri Song</h2>
      <input type="file" accept="audio/*" onChange={handleFileChange} style={styles.input} />
      
      {songFile && (
        <div style={styles.player}>
          <p><strong>Playing:</strong> {songName}</p>
          <audio controls src={songFile} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    margin: "20px auto",
    maxWidth: "500px",
    background: "#f7f7f7",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  input: {
    marginBottom: "20px"
  },
  player: {
    marginTop: "15px",
    background: "#fff",
    padding: "10px",
    borderRadius: "8px"
  }
};
