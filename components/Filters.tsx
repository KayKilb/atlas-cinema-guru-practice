// app/components/Filters.tsx
import Genres from "./Genres";
import SearchBar from "./SearchBar";
import Year from "./Year";

export default async function Filters() {
  return (
    <div className={"flex flex-row w-100 justify-between"}>
      <div className={"w-4/12 flex flex-col m-7"}>
        <SearchBar />
        <Year />
      </div>
      <Genres />
    </div>
  );
}
