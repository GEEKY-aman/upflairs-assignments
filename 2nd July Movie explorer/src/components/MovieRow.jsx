import React from "react"
import MovieCard from "./MovieCard"

export default function MovieRow({ title, movies }) {
  return (
    <div style={{ marginTop: "70px" }}>
      <h2 style={{ color: "#fff", marginLeft: "10px" }}>{title}</h2>
      <div style={{
        display: "flex",
        overflowX: "scroll",
        padding: "10px"
      }}>
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}
