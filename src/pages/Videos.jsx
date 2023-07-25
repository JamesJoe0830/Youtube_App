import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import axios from 'axios';


export default function Videos() {
  const { keyword } = useParams();
  //🔜
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], async () => {
    return axios
    .get(`/videos/${keyword ? "search" : "popular"}.json`)
    .then((res)=> res.data.items);
    // fetch(`/videos/${keyword ? "search" : "popluar"}.json`)
    //   .then((res) => res.json())
    //   .then((data) => data.items);
  });
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