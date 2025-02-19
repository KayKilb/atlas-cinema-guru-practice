// app/watch-later/page.tsx
import MovieCards from "@/components/MovieCards";
import WatchLaterMain from "@/components/WatchLaterMain";

export default async function Page() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <WatchLaterMain />
      <MovieCards />
    </div>
  );
}
