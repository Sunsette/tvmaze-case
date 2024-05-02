"use client";
import { fetchTvShow, fetchTvShows } from "@/lib/api";
import { Show, ShowListItem } from "@/lib/definitions";
import { useQuery } from "@tanstack/react-query";

export function useTvShows(searchTerm: string) {
  const { data, isLoading } = useQuery<ShowListItem[]>({
    queryKey: ["tv-shows", searchTerm],
    queryFn: () => fetchTvShows(searchTerm),
    enabled: !!searchTerm && searchTerm.length > 0,
  });
  return {
    data,
    isLoading,
  };
}

export function useTvShow(id: number, initialData?: Show) {
  const { data, isLoading } = useQuery<Show>({
    queryKey: ["tv-show", id],
    queryFn: () => fetchTvShow(id),
    ...{ ...(initialData ? { initialData: initialData } : {}) },
  });
  return {
    data,
    isLoading,
  };
}
