import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onSetFavorite: () => void;
  onRemoveFavorite: () => void;
}

export function FavoriteButton({
  isFavorite,
  onSetFavorite,
  onRemoveFavorite,
}: FavoriteButtonProps) {
  return (
    <div>
      {isFavorite ? (
        <button onClick={() => onRemoveFavorite()}>
          <HeartIcon className="text-red-700 h-6 w-6"></HeartIcon>
        </button>
      ) : (
        <button onClick={() => onSetFavorite()}>
          <HeartIconOutline className="text-black h-6 w-6"></HeartIconOutline>
        </button>
      )}
    </div>
  );
}
