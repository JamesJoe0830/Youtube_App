import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video,type }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  // const [videoId,setVideoId] = useState('')
  // const handleClickDetail = (videoId) =>{
  //   setVideoId(videoId);
  //   console.log(videoId);
  //   navigate(`/videos/watch/${videoId}`);
  // }
  const isList = type ==='list';
  return (
    <li
      className={isList ? 'flex gap-1 m-4': ''}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={isList ?"w-60 rounded-xl hover:scale-105 cursor-pointer"  :"w-full rounded-xl hover:rounded cursor-pointer"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div className={isList ?'ml-2': ''}>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
}
