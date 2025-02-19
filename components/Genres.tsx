// components/Genres.tsx
import GenreButton from "./GenreButton";

export default async function Genres() {
  return (
    <div className={"w-4/12 m-7"}>
      <h2 className={"mt-2 mb-1"}>Genres</h2>
      <GenreButton genre="Romance" />
      <GenreButton genre="Horror" />
      <GenreButton genre="Drama" />
      <GenreButton genre="Action" />
      <GenreButton genre="Mystery" />
      <GenreButton genre="Fantasy" />
      <GenreButton genre="Thriller" />
      <GenreButton genre="Western" />
      <GenreButton genre="Sci-Fi" />
      <GenreButton genre="Adventure" />
    </div>
  );
}
