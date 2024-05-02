import { useTvShow } from "@/hooks/useTvShows";
import { getUpcomingEpisode } from "@/utils/getUpcomingEpisodes";

interface ShowCardProps {
  id: number;
}

export function ShowCard({ id }: ShowCardProps) {
  const { data, isLoading } = useTvShow(id);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!data) {
    return <div>No Show Found</div>;
  }

  const futureEpisode = getUpcomingEpisode(data._embedded?.episodes);

  if (!futureEpisode) {
    return <div className=" p-4">No Future Episodes for {data.name}</div>;
  }

  return (
    <div className=" p-4">
      Next episode for {data.name} is {futureEpisode.airdate} and is named{" "}
      {futureEpisode?.name}
    </div>
  );
}
