import React from 'react';

export default function VideoCard({video}) {
    return (
        <div>
            {video.snippet.title}
            <img src={video.snippet.thumbnails.high.url}/>
        </div>
    );
}