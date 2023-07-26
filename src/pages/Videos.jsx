import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() { 
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  //🔜
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));
  //   const youtube = new FakeYoutube();
  //   return youtube.search(keyword);
  // }); -> 호출할때마다 계속해서 인스턴스 생성해줘서 비효율적임

  //🔜
  return ( 
    <div>
      Videos {keyword ? `🔎${keyword}` : "🔥"}
      {isLoading && <p>Loading ...</p>}
      {error && <p>Somthing is wrong 😅</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
