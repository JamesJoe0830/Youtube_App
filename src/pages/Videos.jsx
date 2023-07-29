import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import Sidebar from "../components/Sidebar";

export default function Videos() { 
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  //🔜
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword),{stleTime : 1000*60*1});
  //   const youtube = new FakeYoutube();
  //   return youtube.search(keyword);
  // }); -> 호출할때마다 계속해서 인스턴스 생성해줘서 비효율적임

  //🔜
  return ( 
    <div>
      <Sidebar/>
      {/* Videos {keyword ? `🔎${keyword}` : "🔥"} */}
      {isLoading && <p>Loading ...</p>}
      {error && <p>Somthing is wrong 😅</p>}
      {videos && (

        <ul className='m-auto mt-20 grid grid-cols-1 max-w-xs sm:grid-cols-2 sm:max-w-2xl lg:grid-cols-3 lg:max-w-4xl xl:grid-cols-4 xl:max-w-5xl 2xl:grid-cols-5 2xl:max-w-6xl gap-2 gap-y-4'>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
       )}
    </div>
  );
}
