"use client";
import { useTvShow } from "@/hooks/useTvShows";
import { Show } from "@/lib/definitions";
import Image from "next/image";
import { FavoriteButtonWrapper } from "./FavoriteButtonWrapper";
import { HtmlContent } from "./HtmlContent";

interface TvShowCardProps {
  id: number;
  initialData?: Show;
}

export function TvShowCard({ id, initialData }: TvShowCardProps) {
  const { data, isLoading } = useTvShow(id, initialData);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!data) {
    return <div>Can't find show</div>;
  }

  return (
    <div className="flex">
      <div className="w-[200px] h-[200px] min-w-[200px]">
        {data.image?.medium && (
          <Image
            src={data.image?.medium}
            width={200}
            height={200}
            alt="Picture of the show"
            className="h-full w-full object-contain"
            priority={true}
          />
        )}
      </div>
      <div>
        <div className="mb-4">
          <h2 className="font-bold">Name</h2>
          {data.name}{" "}
          {data.premiered ? `${new Date(data.premiered).getFullYear()}` : ""}
        </div>
        <div className="mb-4">
          <h2 className="font-bold">Summary</h2>
          <HtmlContent html={data?.summary || ""}></HtmlContent>
        </div>
        <FavoriteButtonWrapper id={data.id}></FavoriteButtonWrapper>
      </div>
    </div>
  );
}
