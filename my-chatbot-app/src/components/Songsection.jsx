import React, { useRef, useState } from "react";

const songs = [
  {
    title: "Bhojpuri Song 1",
    file: "/audio/bhojpuri1.mp3"
  },
  {
    title: "Bhojpuri Song 2",
    file: "/audio/bhojpuri2.mp3"
  },
  {
    title: "Online Bhojpuri Song",
    file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  }
];

export default function SongSection() {
  const audioRefs = useRef([]);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    // Pause all other audio
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) audio.pause();
    });

    // Play selected
    if (audioRefs.current[index]) {
      audioRefs.current[index].play();
      setCurrentPlayingIndex(index);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Bhojpuri Songs 🎶</h2>
      {songs.map((song, index) => (
        <div key={index} style={styles.card}>
          <p style={styles.title}>{song.title}</p>
          <button onClick={() => handlePlay(index)} style={styles.button}>
            ▶️ Play
          </button>
          <audio
            ref={(el) => (audioRefs.current[index] = el)}
            src={song.file}
            preload="auto"
          />
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#fafafa",
    borderRadius: "12px",
    maxWidth: "600px",
    margin: "30px auto",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  card: {
    marginBottom: "20px",
    padding: "10px",
    background: "#fff",
    borderRadius: "10px",
    border: "1px solid #ccc"
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold"
  },
  button: {
    marginTop: "8px",
    padding: "8px 14px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "6px",
    background: "#e91e63",
    color: "#fff",
    border: "none"
  }
};
