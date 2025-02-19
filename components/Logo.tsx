// components/Logo.tsx
import { FilmIcon } from "@heroicons/react/24/outline";

export default async function Logo() {
  return (
    <div className={"flex flex-row p-4 items-center"}>
      <FilmIcon className={"size-6"} />
      <h1 className={"font-bold text-2xl ml-2"}>Cinema Guru</h1>
    </div>
  );
}
