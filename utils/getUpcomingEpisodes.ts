import { Episode } from "@/lib/definitions";
import { closestTo, isEqual, isFuture } from "date-fns";

export function getUpcomingEpisode(episodes?: Episode[]) {
  if (!episodes) {
    return undefined;
  }
  const dates = episodes.map((episode) => new Date(episode.airdate));
  // Current date for reference
  const currentDate = new Date();

  // Filter out dates that are in the past
  const futureDates = dates.filter(
    (date) => isFuture(date) || date.getTime() === currentDate.getTime()
  );

  // Find the closest future date
  const closestFutureDate = closestTo(currentDate, futureDates);

  //   console.log("closestFutureDate", closestFutureDate);
  if (!closestFutureDate) {
    return null;
  }

  const futureEpisode = episodes.find((episode) =>
    isEqual(new Date(episode.airdate).getTime(), closestFutureDate.getTime())
  );

  return futureEpisode;
}
