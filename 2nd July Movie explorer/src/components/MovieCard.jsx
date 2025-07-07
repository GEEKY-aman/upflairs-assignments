import React from "react"

export default function MovieCard({ movie }) {
  return (
    <div style={{
      width: "150px",
      margin: "10px",
      overflow: "hidden",
      borderRadius: "8px",
      background: "#222"
    }}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <div style={{ padding: "5px", color: "#fff", textAlign: "center" }}>
        <h3 style={{ fontSize: "14px" }}>{movie.title}</h3>
      </div>
    </div>
  )
}
