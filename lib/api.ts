import { baseUrl } from "@/utils/data-access";

export async function fetchTvShows(searchTerm: string) {
  const response = await fetch(baseUrl + "/search/shows?q=" + searchTerm);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

export async function fetchTvShow(id: number) {
  const response = await fetch(baseUrl + `/shows/${id}?embed=episodes`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
