// app/page.tsx
import Filters from "@/components/Filters";
import MovieCards from "@/components/MovieCards";

export default async function Page() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Filters />
      <MovieCards />
    </div>
  );
}
