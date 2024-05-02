"use client";
import { useTvShows } from "@/hooks/useTvShows";
import Link from "next/link";
import { useState } from "react";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setSearchState] = useState(false);
  const { data, isLoading } = useTvShows(searchTerm);

  return (
    <div className="relative">
      <input
        type="text"
        className="h-12 w-full pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none text-black"
        placeholder="Search tv shows..."
        onChange={(q) => {
          setSearchTerm(q.target.value);
          if (q.target.value.length > 0) {
            setSearchState(true);
          }
        }}
        onFocus={() => setSearchState(true)}
      ></input>
      {!data && isLoading && (
        <div className="bg-white text-black absolute w-full p-4">
          Loading...
        </div>
      )}
      {data && isSearchOpen && !isLoading && (
        <div className="bg-white text-black absolute w-full">
          <ul className="list-none">
            {data.map((listItem) => (
              <Link key={listItem.show.id} href={`/shows/${listItem.show.id}`}>
                <li
                  className="p-2 border-b border-grey cursor-pointer hover:bg-gray-100"
                  onClick={() => setSearchState(false)}
                >
                  {listItem.show.name} - (
                  {listItem.show.premiered
                    ? new Date(listItem.show.premiered).getFullYear()
                    : ""}
                  )
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
