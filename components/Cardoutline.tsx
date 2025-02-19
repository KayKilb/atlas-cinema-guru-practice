// components/Cardoutline.tsx
import Image from "next/image";
import placeholder from "@/assets/placeholder.svg";
import { ClockIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/outline";
import { ClockIcon as SolidClock } from "@heroicons/react/24/solid";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";

export default async function Card() {
  return (
    <div className="relative group overflow-hidden rounded-lg outline outline-1 outline-teal">
      <div
        className={
          "absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }
      >
        <ClockIcon className={"w-6 h-6 cursor-pointer"} />
        <StarIcon className={"w-6 h-6 cursor-pointer"} />
      </div>
      <Image
        src={placeholder}
        alt="Movie Image"
        className={"object-cover w-full h-full"}
      />
      <div
        className={
          "absolute bottom-0 left-0 right-0 p-4 bg-light-navy to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }
      >
        <h2 className={"text-lg my-2"}>Beneath the Surface (2021)</h2>
        <p className={"text-base my-2"}>
          A marine biologist discovers a hidden underwater civilization
        </p>
        <div className={"flex flex-wrap justify-start gap-2"}>
          <div className={"my-2 bg-dark-teal rounded-3xl p-2"}>Sci-Fi</div>
          <div className={"my-2 bg-dark-teal rounded-3xl p-2"}>Adventure</div>
        </div>
      </div>
    </div>
  );
}
