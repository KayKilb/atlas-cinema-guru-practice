// app/favorites/page.tsx
import FavoritesMain from "@/components/FavoritesMain";
import MovieCards from "@/components/MovieCards";

export default async function Page() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <FavoritesMain />
      <MovieCards />
    </div>
  );
}
