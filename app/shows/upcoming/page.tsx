"use client";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { ShowCard } from "@/components/ShowCard";

export default function Page() {
  const [favorites] = useSessionStorage<number[]>("favorites", []);

  return (
    <main className="p-4">
      <div className="flex flex-col">
        <div>Upcoming Episodes</div>
        <ol className="flex flex-col">
          {favorites.map((favoriteId: number) => (
            <li className="list-none border-b border-gray-400 py-4">
              <ShowCard key={favoriteId} id={favoriteId}></ShowCard>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
