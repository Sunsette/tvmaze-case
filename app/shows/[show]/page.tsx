import { TvShowCard } from "@/components/TvShowCard";
import { fetchTvShow } from "@/lib/api";

export default async function Page({ params }: { params: { show: number } }) {
  const { show } = params;

  const initialData = await fetchTvShow(show);

  return (
    <main className="p-4">
      <TvShowCard id={show} initialData={initialData}></TvShowCard>
    </main>
  );
}
