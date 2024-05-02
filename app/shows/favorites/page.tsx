"use client";
import { TvShowCard } from "@/components/TvShowCard";
import { useSessionStorage } from "@/hooks/useSessionStorage";

export default function Page() {
  const [favorites, setFavorites] = useSessionStorage<number[]>(
    "favorites",
    []
  );

  return (
    <main className="p-4">
      <div className="flex flex-col">
        <h2>Favorites</h2>
        <ul className="flex flex-col">
          {favorites.map((favoriteId: number) => (
            <li
              key={favoriteId}
              className="list-none border-b border-gray-400 py-4"
            >
              <TvShowCard id={favoriteId}></TvShowCard>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
