import React, { useEffect, useState } from "react"
import MovieRow from "../components/MovieRow"
import { fetchUpcomingMovies } from "../api"

export default function Home() {
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {
    fetchUpcomingMovies().then(setUpcoming)
  }, [])

  return (
    <div style={{ background: "#000", minHeight: "100vh", paddingTop: "60px" }}>
      <MovieRow title="Upcoming Movies" movies={upcoming} />
    </div>
  )
}
