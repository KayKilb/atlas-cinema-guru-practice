// components/Card.tsx
import { ClockIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Define the Movie type
interface Movie {
  id: string;
  title: string;
  synopsis: string;
  released: number;
  genre: string | string[]; // Support both string and array of genres
  image?: string;
}

interface CardProps {
  movie: Movie; // Receives movie data as props
}

export default function Card({ movie }: CardProps) {
  const placeholderImage = "images/0c0b6fba-ccba-49d5-8417-6fc945754a91.webp";

  return (
    <div className="relative group overflow-hidden rounded-lg outline outline-1 outline-teal">
      {/* Icons on hover */}
      <div
        className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      >
        <ClockIcon className="w-6 h-6 cursor-pointer" />
        <StarIcon className="w-6 h-6 cursor-pointer" />
      </div>

      {/* Movie Image */}
      <Image
        src={movie.image || placeholderImage}
        alt={`Poster of ${movie.title}`}
        width={500}
        height={500}
        className="object-cover w-full h-full"
      />

      {/* Movie Details */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-light-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-lg my-2">
          {movie.title} ({movie.released})
        </h2>
        <p className="text-base my-2">{movie.synopsis}</p>

        {/* Dynamic Genre Display */}
        <div className="flex flex-wrap justify-start gap-2">
          {(Array.isArray(movie.genre) ? movie.genre : [movie.genre]).map(
            (g, index) => (
              <div key={index} className="my-2 bg-dark-teal rounded-3xl p-2">
                {g}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
