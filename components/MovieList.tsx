// components/MovieList.tsx
import { useEffect, useState } from "react";
import Card from "./Card";

interface Movie {
  id: string;
  title: string;
  synopsis: string;
  released: number;
  genre: string;
  image: string;
}

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  // Fetch movie data
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://congenial-space-adventure-6wvxw5j4vjqfrrjv-3000.app.github.dev/api/titles?page=1"
      ); // Update this URL
      const data = await response.json();
      setMovies(data.title);
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      {/* Map over the movie data to render each Card */}
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} /> // Pass each movie as prop to Card
      ))}
    </div>
  );
}
