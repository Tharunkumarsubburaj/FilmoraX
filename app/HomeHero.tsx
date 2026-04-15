"use client";
import { useFetchMoviesQuery } from "@/store/api/discover/movieApi";
import Image from "next/image";
import { useEffect } from "react";

export default function HomeHero() {
  const { data } = useFetchMoviesQuery();
  console.log("Movies data:", data);
  console.log("Movies:", data?.results);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const res = await fetch("/api/tmdb/user");
        const data = await res.json();
        console.log("Fetched user:", data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchuser();
  }, [])

  return (
    <div className=" bg-ObsidianBlack text-GhostWhite ">
      <h1 className="text-3xl font-bold ">Welcome to Movie Review Site!</h1>
      <p className="text-lg mt-4">
        Discover and share your favorite movies with our community.
      </p>

      {data?.results && (
        <div>
          <h2 className="text-2xl font-semibold mt-6">Trending Movies:</h2>
          <div className=" flex flex-wrap gap-3 justify-center mt-4">
            {data.results.map((movie) => (
              <div
                key={movie.id}
                className="mt-4 w-[22%] border rounded-lg bg-DarkSlateGray"
              >
                <div className=" relative h-100 w-full">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                    className=" absolute top-0 left-0 object-cover object-center rounded-t-xl "
                  />
                </div>
                <div className=" grid grid-row-[1fr_2fr] px-2 ">
                  <h3 className="text-xl font-bold">{movie.title}</h3>
                  <p className="text-sm mt-2 line-clamp-3">{movie.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
