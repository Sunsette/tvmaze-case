"use client";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { FavoriteButton } from "@/ui/FavoriteButton";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

interface FavoriteButtonProps {
  id: number;
}

export function FavoriteButtonWrapper({ id }: FavoriteButtonProps) {
  const [isFavorite, setFavoriteState] = useState(false);
  const [favorites, setFavorites] = useSessionStorage<number[]>(
    "favorites",
    []
  );

  useEffect(() => {
    setFavoriteState(!!favorites.find((currentId) => currentId === id));
  }, [favorites]);

  return (
    // <div>
    //   {isFavorite ? (
    //     <button
    //       onClick={() => {
    //         setFavorites((prev) => [
    //           ...prev.filter((currentId) => currentId !== id),
    //         ]);
    //       }}
    //     >
    //       <HeartIcon className="text-red-700 h-6 w-6"></HeartIcon>
    //     </button>
    //   ) : (
    //     <button
    //       onClick={() => {
    //         setFavorites((prev) => [...prev, id]);
    //       }}
    //     >
    //       <HeartIconOutline className="text-black h-6 w-6"></HeartIconOutline>
    //     </button>
    //   )}
    // </div>
    <FavoriteButton
      isFavorite={isFavorite}
      onSetFavorite={() => {
        setFavorites((prev) => [...prev, id]);
      }}
      onRemoveFavorite={() => {
        setFavorites((prev) => [
          ...prev.filter((currentId) => currentId !== id),
        ]);
      }}
    ></FavoriteButton>
  );
}
