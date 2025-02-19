// components/NavBar.tsx
import LatestActivity from "./LatestActivity";
import { HomeButton, FavoritesButton, WatchLaterButton } from "./NavButtons";

export default async function NavBar() {
  return (
    <div
      className={
        "bg-dark-teal group flex flex-col w-20 hover:w-60 transition-all duration-300 overflow-hidden"
      }
    >
      <HomeButton />
      <FavoritesButton />
      <WatchLaterButton />
      <div className="mt-4 hidden group-hover:block">
        <LatestActivity />
      </div>
    </div>
  );
}
